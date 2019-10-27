import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

import {HttpClient} from '@angular/common/http';

import {GLOBAL} from '../../services/global.service';


import { User } from '../../models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public url: String;
  public user:User;
  public identity;
  public errorMessage;
  
  constructor(
    private _router:Router,private _http: HttpClient) {
      this.user=new User("","","","",false,""), this.url=GLOBAL.url, this.user=new User("","",""," ",false,"")
     }

  ngOnInit() {
  }
  redirectToLogin(){
    this._router.navigate(['login'])
  }

   public register(){
    this._http.post(this.url+'users/createUser',this.user).subscribe(
      res => {
        this._router.navigate(['login']);
            
    },
    err => {
      
      }
    )
  } 
}
