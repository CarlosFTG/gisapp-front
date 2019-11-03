import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { User } from '../../models/user';


var selectedPoints=[];
var selectedPolygons=[];
 

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})

@Injectable()
export class GlobalComponent implements OnInit {

  geotoolsSelected: boolean = false;
  featureType:String;
  facilityType:String;
  geom: String;
  featureGeoJson:{};
  within:boolean=false;
  geomFinished:boolean=false;
  map;
  selectedPoints=[];
  selectedFeatures=[];
  radio:String;
  pointsFoundObj=[];
  message:String;
  messageActive:boolean=false;
  userId:String;
  polygon;
  constructor() { };

  ngOnInit() {
  }

}
