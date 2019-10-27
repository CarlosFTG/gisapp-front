import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import {GlobalComponent} from '../global/global.component'

import {HttpClient} from '@angular/common/http';

import {GLOBAL} from '../../services/global.service';


import {MapInfoInput} from '../../models/mapInfoInput'

declare let L;
var counter=0;
var markerPoint;
var pointInserted;
@Component({
  selector: 'app-finish-entity-component',
  templateUrl: './finish-entity-component.component.html',
  styleUrls: ['./finish-entity-component.component.css']
})
export class FinishEntityComponentComponent implements OnInit {

  public mapInfoInput:MapInfoInput;

  public url: String;

  constructor(private globals: GlobalComponent,private _http: HttpClient,public fb: FormBuilder) {this.mapInfoInput=new MapInfoInput(" "),this.url=GLOBAL.url }

  geom=this.globals.geom;

  geomFinished=this.globals.geomFinished;
  

  public pointsFound=[];

  facilityForm = this.fb.group({
    feature: [" "]
    });

  ngOnInit() {
  }

  finishEntity(){
    
    this.globals.featureGeoJson={
      "pointName":this.mapInfoInput.info,
      "facility":this.globals.facilityType,
      "geom":this.globals.geom,
      "userEmail":sessionStorage.getItem("userEmail"),
      "userId":sessionStorage.getItem("userId")
    }
    this.mapInfoInput.info=" ";
      if(this.globals.geom){
      this._http.post(this.url+'geometries/insert'+this.globals.featureType,this.globals.featureGeoJson).subscribe(
        res =>{
          pointInserted="Feature inserted";
          this.globals.geom=" ";
          counter=0;
          console.log(pointInserted);
          this.globals.messageActive=true;
          this.globals.message="Feature inserted";
        
        },
        err=>{
          console.log(err)
        }
      ) 
    }else{
      this.globals.messageActive=true;
      this.globals.message="No coords selected";
      
    }
    } 
}
