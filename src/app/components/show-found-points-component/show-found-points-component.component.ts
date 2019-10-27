import { Component, OnInit } from '@angular/core';

import {GlobalComponent} from '../global/global.component'

@Component({
  selector: 'app-show-found-points-component',
  templateUrl: './show-found-points-component.component.html',
  styleUrls: ['./show-found-points-component.component.css']
})
export class ShowFoundPointsComponentComponent implements OnInit {

  constructor(private globals: GlobalComponent) { }

  pointsFound=this.globals.pointsFoundObj;

  ngOnInit() {
  }

}
