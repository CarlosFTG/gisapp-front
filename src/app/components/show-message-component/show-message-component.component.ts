import { Component, OnInit } from '@angular/core';

import {GlobalComponent} from '../global/global.component'


@Component({
  selector: 'app-show-message-component',
  templateUrl: './show-message-component.component.html',
  styleUrls: ['./show-message-component.component.css']
})
export class ShowMessageComponentComponent implements OnInit {

  constructor(private globals: GlobalComponent) { }

  message=this.globals.message;
  messageActive=this.globals.messageActive

  ngOnInit() {
  }
}
