import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import {GlobalComponent} from '../global/global.component'
import {FeatureselectorComponentComponent} from '../featureselector-component/featureselector-component.component'

import {HttpClient} from '@angular/common/http';

import {GLOBAL} from '../../services/global.service';


declare let L;
var controlLayers;
var counter=0;
var marker;
var pointId
var userId=sessionStorage.getItem("userId");
var selectedPoints=[];
//var polygon;
var polygonId;
var drawControl

@Component({
  selector: 'app-mapv2',
  templateUrl: './mapv2.component.html',
  styleUrls: ['./mapv2.component.css']
})

@Injectable()
export class Mapv2Component implements OnInit {

  public clickOnMap:boolean=false;

  public url: String;
  constructor(private globals: GlobalComponent,private _http: HttpClient) { this.url=GLOBAL.url};
  ngOnInit() {
    this.globals.map = L.map('map').setView([40.415456528704595, -3.703765869140625], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.globals.map);
  controlLayers = L.control.layers().addTo(this.globals.map);
  this.getFeaturesByUserId();
   drawControl = new L.Control.Draw({
      draw: {
          
      },
       
  });
  this.globals.map.addControl(drawControl);

  }

  getCoords(){
      var polygonButton;
      var polylineButton;
      var markerButton;
      var lat;
      var lng;
      var geometry;
      if(drawControl._toolbars.draw._modes.polygon.handler._markers!=undefined){
         polygonButton=drawControl._toolbars.draw._modes.polygon.handler._markers[counter]._latlng;
          lat=polygonButton.lat;
         lng=polygonButton.lng;
         geometry='POLYGON'
      }else if(drawControl._toolbars.draw._modes.polyline.handler._markers!=undefined){
        polylineButton=drawControl._toolbars.draw._modes.polyline.handler._markers[counter]._latlng;
        lat=polylineButton.lat;
        lng=polylineButton.lng;
        geometry="LINESTRING"
      } else if(drawControl._toolbars.draw._modes.marker.handler._marker!=undefined){
        markerButton=drawControl._toolbars.draw._modes.marker.handler._marker._latlng;
        lat=markerButton.lat;
        lng=markerButton.lng;
        geometry="POINT"
      }
      var coordsString=lat+" "+lng;

      if(geometry==="POINT"){
        this.globals.geom= "POINT ("+lat+" "+lng+")";
        this.globals.featureType="Point";
      }else if(geometry==="LINESTRING"){
        if(counter<1){
          this.globals.geom= "LINESTRING ("+coordsString+")";
          this.globals.featureType="Line";
        }else{
          var geomOperation=this.globals.geom.replace(")",",")+coordsString+",";
          this.globals.geom=geomOperation.substring(0, geomOperation.length-1)+")";
        }
      }else if(geometry==="POLYGON"){
        if(counter<1){
          this.globals.geom= "POLYGON(("+coordsString+")";
          this.globals.featureType="Polygon";
        }else{
          var geomOperation=this.globals.geom.replace(")",",")+coordsString+",";
          this.globals.geom=geomOperation.substring(0, geomOperation.length-1)+")";
        }
      }
      counter++;
  }
  //take the features by user id
getFeaturesByUserId(){
  var selectedFeatures=this.globals.selectedFeatures;
  this._http.post(this.url+'/geometries/findFeaturesByUserId',userId).subscribe(
    res =>{
      var pointsList=res.pointsList;
      var linesList=res.linesList;
      var polygonsList=res.polygonsList;
      var myIcon = L.icon({
        iconSize: [41, 51],
        iconAnchor: [20, 51],
        popupAnchor: [-3, -76],
        shadowUrl: 'assets/leaflet/marker-shadow.png',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
      }); 
      for(let i=0;i<pointsList.length;i++){
        var coordsArray=[];
        
        var layer=pointsList[i].point;
        var layerStringToJson=JSON.parse(layer);
        if(layerStringToJson.properties.facility==="Transport"){         
          myIcon.options.iconUrl='assets/leaflet/bus.png'
        }else{
          
          myIcon.options.iconUrl= 'assets/leaflet/leisure.jpg'
        }
       var coordinates=layerStringToJson.geometry.coordinates;
        var lat=coordinates.substring(0,18)
        var lng=coordinates.substring(18,38);
        var pointAttributes="Point Id:"+layerStringToJson.properties.id+",  Name:"+layerStringToJson.properties.name;
        coordsArray.push(lat);coordsArray.push(lng);
        marker=L.marker(coordsArray,{icon: myIcon,clickable:
           true,draggable:'false',title:pointAttributes}).addTo(this.globals.map)
           .on('click', onClick)
        coordsArray=[];
        var selectedPoint;
        var selectedPoints=this.globals.selectedPoints;
        var includes=[]
      
        function onClick(e) {
          selectAndDeselectGeometries(e,"point");
        }
          
        }
       var linesPolyline=[]
      for(let i=0;i<linesList.length;i++){
        var lineJson=JSON.parse(linesList[i].line).geometry.coordinates;
        var coordsList=lineJson;        
        var numberOfCommas=(coordsList.split(",").length);
        var coordsArrayArray=[];
         for(let z=0;z<numberOfCommas;z++){
          var coordsArray=[];
          var indexOfComma=coordsList.indexOf(",");
          //as at the end of the string there's no comma, checks if comma exists as the last pair
          //does not have comma
          if(coordsList.match(/,/g)){
            var extractPair=coordsList.substring(0,indexOfComma);
          }else{
            var extractPair=coordsList.substring(0,coordsList.lengt);
          }
          var indexOf=extractPair.trim().indexOf(" ");
          var extractLng=extractPair.substring(0,indexOf);
          var extractLat=extractPair.substring(indexOf+1,extractPair.length);
          coordsArray.push(parseFloat(extractLng));
          coordsArray.push(parseFloat(extractLat));
          coordsList=coordsList.substr(indexOfComma+1,coordsList.length);
          coordsArrayArray.push(coordsArray)
        } 
        linesPolyline.push(coordsArrayArray)
        
      }
      var polyline = L.multiPolyline(linesPolyline, {color: 'red',clickable: true}).addTo(this.globals.map).on('click');
    
      var polygonsPolygon=[];
      for(let i=0;i<polygonsList.length;i++){
        var layerPolygon=polygonsList[i].polygon;
        var layerStringToJsonPolygon=JSON.parse(layerPolygon);
        var polygonJson=JSON.parse(polygonsList[i].polygon).geometry.coordinates;
        var coordsList=polygonJson;        
        var numberOfCommas=(coordsList.split(",").length);
        var coordsArrayArray=[];
        var polygonsAttributes="polygon id:"+layerStringToJsonPolygon.properties.polygonId+",  polygon name:"+layerStringToJsonPolygon.properties.name
        for(let z=0;z<numberOfCommas;z++){
          var coordsArray=[];
          var indexOfComma=coordsList.indexOf(",");
          //as at the end of the string there's no comma, checks if comma exists as the last pair
          //does not have comma
          if(coordsList.match(/,/g)){
            var extractPair=coordsList.substring(0,indexOfComma);
          }else{
            var extractPair=coordsList.substring(0,coordsList.lengt);
          }
          var indexOf=extractPair.trim().indexOf(" ");
          var extractLng=extractPair.substring(1,indexOf);
          var extractLat=extractPair.substring(indexOf+1,extractPair.length);
          coordsArray.push(parseFloat(extractLng));
          coordsArray.push(parseFloat(extractLat));
          coordsList=coordsList.substr(indexOfComma+1,coordsList.length);
          coordsArrayArray.push(coordsArray)
      }
      polygonsPolygon.push(coordsArrayArray);
      this.globals.polygon=L.multiPolygon(polygonsPolygon,{clickable:
        true,title:polygonsAttributes}).addTo(this.globals.map).on('click',onClick);

      polygonsPolygon=[];
      
      function onClick(e) {
        selectAndDeselectGeometries(e,"polygon");
      
      }
    }

    },
    err=>{
    }
  )
  function selectAndDeselectGeometries(e, geometry){
    var includes=[];
    var geometryId;
    if(geometry==="polygon"){
      geometryId=e.target._options.title;
    }else if(geometry==="point"){
      geometryId=e.target.options.title;
    }
    
    var selectedGeometry={"id":geometryId,"userId":userId};

    var addToArray=false;
        var removeFromArray=false;
        if(selectedFeatures.length==0){
          selectedFeatures.push(selectedGeometry);
          includes.push(selectedGeometry.id)
          
        }else{
          
          for(let i=0;i<selectedFeatures.length;i++){
            
            if(selectedFeatures[i].id!=selectedGeometry.id ){

                addToArray=true;
            }else if(selectedFeatures[i].id===selectedGeometry.id){
              removeFromArray=true;
            }

            if(addToArray){
              if(!includes.includes(selectedGeometry.id)){
                includes.push(selectedGeometry.id)
                selectedFeatures.push(selectedGeometry);
                addToArray=false;
                break;
              }
              
            };

            if(removeFromArray){
            
              selectedFeatures.splice(i,1)
              removeFromArray=false;
              for(let i=0;i<includes.length;i++){
                if(includes[i]===selectedGeometry.id){
                  includes.splice(i,1)
                }
              }
              break;
            }
          }
        }
  }
}
}