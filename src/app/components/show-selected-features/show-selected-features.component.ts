import { Component, OnInit } from '@angular/core';

import {GlobalComponent} from '../global/global.component'


@Component({
  selector: 'app-show-selected-features',
  templateUrl: './show-selected-features.component.html',
  styleUrls: ['./show-selected-features.component.css']
})
export class ShowSelectedFeaturesComponent implements OnInit {

  constructor(private globals: GlobalComponent) { }

  selectedFeatures=this.globals.selectedFeatures;

  

  ngOnInit() {
  }

  getSelectedFeatures(){

  }

}
