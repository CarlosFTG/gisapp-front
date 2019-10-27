import { Component, OnInit } from '@angular/core';
import {GlobalComponent} from '../global/global.component'
import {Mapv2Component} from '../mapv2/mapv2.component'

import { FormBuilder } from "@angular/forms";
import {HttpClient} from '@angular/common/http';

import { MapInfoInput } from '../../models/mapInfoInput';

import {GLOBAL} from '../../services/global.service';

declare let L;
var markerPoint;
var counter=0;
var pointInserted;
@Component({
  selector: 'app-edition-panel',
  templateUrl: './edition-panel.component.html',
  styleUrls: ['./edition-panel.component.css']
})
export class EditionPanelComponent implements OnInit {

  public featureTypeSelected:boolean=false;

  public mapInfoInput:MapInfoInput;

  public url: String;

  public pointsFound=[];

  

  constructor(private map:Mapv2Component,private globals: GlobalComponent,public fb: FormBuilder,private _http: HttpClient,) {
    this.mapInfoInput=new MapInfoInput(" "),this.url=GLOBAL.url
   }

   public selectedFeatures=this.globals.selectedFeatures

   featureTypeForm = this.fb.group({
    feature: [" "]
    });

    facilityForm = this.fb.group({
      feature: [" "]
      });

  ngOnInit() {
  }

  displaySecondForm(){
    this.featureTypeSelected=true;
    this.globals.featureType=this.featureTypeForm.value.feature;
  }

  setFacilityType(){
    this.globals.facilityType=this.facilityForm.value.feature;
    this.globals.editFeaturesSelected=false;
  }
    
  removePoints(){
    console.log(this.globals.selectedFeatures);
    this._http.post(this.url+'geometries/removeFeatures',this.globals.selectedFeatures).subscribe(
      res=>{
        this.map.getFeaturesByUserId()
      },
      err=>{}
    )
  }

}
