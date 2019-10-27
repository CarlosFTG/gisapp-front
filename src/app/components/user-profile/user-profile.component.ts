import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import {HttpClient} from '@angular/common/http';

import {GLOBAL} from '../../services/global.service';

import { User } from '../../models/user';

import {GlobalComponent} from '../global/global.component'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public userId;
  public url: String;
  public user:User;
  constructor(private _router:Router,private _http: HttpClient,private globals: GlobalComponent) {this.url=GLOBAL.url, 
    this.user=new User("","",""," ",false,"")}

  ngOnInit() {
  }

  goBackToMap(){
    this._router.navigate(['mapContainer']);
  }

   removeAccount(){
    this._http.post(this.url+'users/removeUser',sessionStorage.getItem("userId")).subscribe(
      res => {
        this._router.navigate(['login']);
            
    },
    err => {
      
      }
    )
  }


}
