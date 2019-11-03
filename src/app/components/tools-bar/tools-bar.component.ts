import { Component, OnInit } from '@angular/core';
import {GlobalComponent} from '../global/global.component'

import {Router, ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-tools-bar',
  templateUrl: './tools-bar.component.html',
  styleUrls: ['./tools-bar.component.css']
})
export class ToolsBarComponent implements OnInit {
  
  constructor(private globals: GlobalComponent,private _router:Router) { }

  ngOnInit() {
  }

  private displayGeoTools() {
    this.globals.geotoolsSelected=true;
  }

  private goToUserPanel(){
    this._router.navigate(['userProfile'])
  }

}
