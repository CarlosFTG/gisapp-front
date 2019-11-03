import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import {GlobalComponent} from '../global/global.component';

import { Renderer } from '@angular/core';
declare let L;

var polygonButton;

@Component({
  selector: 'app-featureselector-component',
  templateUrl: './featureselector-component.component.html',
  styleUrls: ['./featureselector-component.component.css']
})

@Injectable()
export class FeatureselectorComponentComponent implements OnInit {

  constructor(private globals: GlobalComponent,private renderer: Renderer) { }

  ngOnInit() {
    var drawnItems = new L.FeatureGroup();
    
    var drawControl = new L.Control.Draw({
        draw: {
            position: 'topleft',
            polygon: {
                title: 'Draw a sexy polygon!',
                allowIntersection: false,
                drawError: {
                    color: '#b00b00',
                    timeout: 1000
                },
                shapeOptions: {
                    color: '#bada55'
                }
            },
            
        },
          
    });
    this.globals.map.addControl(drawControl);
  }
 

}



