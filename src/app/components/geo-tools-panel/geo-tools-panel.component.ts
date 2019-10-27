import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {GLOBAL} from '../../services/global.service';

import {BufferModel} from '../../models/bufferModel';

import {GlobalComponent} from '../global/global.component'
import {Mapv2Component} from '../mapv2/mapv2.component'

declare let L;
var controlLayers;
@Component({
  selector: 'app-geo-tools-panel',
  templateUrl: './geo-tools-panel.component.html',
  styleUrls: ['./geo-tools-panel.component.css']
})
export class GeoToolsPanelComponent implements OnInit {

  public pointsFound=[];

  public url: String;
  public geotools: boolean;

  public radioBuffer:BufferModel;

  constructor(private mapV2:Mapv2Component,private globals: GlobalComponent,private _http: HttpClient) { this.url=GLOBAL.url,this.radioBuffer=new BufferModel(" ")}

  ngOnInit() {
  }

  generateBuffer(){

    var pointsToBuffer=[];
    var bufferJson

    for(let i=0;i<this.globals.selectedFeatures.length;i++){
      
      var pointId=this.globals.selectedFeatures[i].id.split(',');

      var PointIdSplitted=pointId[0].split(':');

      pointId=PointIdSplitted[1];

      bufferJson={
        "pointId":pointId,
        "userId":this.globals.selectedFeatures[i].userId,
        "radio":this.radioBuffer
      }
      pointsToBuffer.push(bufferJson)
    }

     this._http.post(this.url + "geometries/createBuffer", pointsToBuffer).pipe(map(data => {}))
     .subscribe(result => {
      console.log(result);
      this.globals.map.removeLayer(this.globals.polygon);
      this.mapV2.getFeaturesByUserId()})
  }

  findPointsIntoPolygon(){
    this.globals.selectedFeatures
    
    var polygonsArray=[]
    for(let i=0;i<this.globals.selectedFeatures.length;i++){
      this.globals.selectedFeatures[i].id;

      var pointId=this.globals.selectedFeatures[i].id.split(',');

      var PointIdSplitted=pointId[0].split(':');

      pointId=PointIdSplitted[1];
 
      //check if the selectedFeature is not a polygon
      if(this.globals.selectedFeatures[i].geometryType!="Point"){
        this._http.post(this.url+'geometries/findPointsIntoAPolygon',pointId).subscribe( 
          res=>{
            
            for(let i=0;i<res.toString.length;i++){
              this.globals.pointsFoundObj.push(res[i]);
            }
          
          }
           )
      }
      

  }
  
  }

}
