import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import { User } from '../../models/user';

import {GLOBAL} from '../../services/global.service';

import {GlobalComponent} from '../global/global.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[]
})
export class LoginComponent implements OnInit {
  public user:User;
  public identity;
  public token: String;
  public errorMessage;
  public url: String;
  public resTest;

  constructor(private _route:ActivatedRoute,
    private _router:Router,private http: HttpClient,private globals: GlobalComponent) {
      this.user=new User("","",""," ",false,""), this.url=GLOBAL.url; }

  ngOnInit() {
 
  }
  redirectToRegister(){
    this._router.navigate(['register']);
  }

  public onSubmit(){

    this.http.post(this.url+'/users/login',this.user).subscribe(
       res => {
    
        if(res.token<1){
          console.log('auth error')
        }else{
          var resToString=res.toString;
          
          this._router.navigate(['mapContainer']);
          sessionStorage.setItem("userId",res.id);
          sessionStorage.setItem("userEmail",res.email)
                  }     
    },
    err => {
      console.log(err);
    } 
    
 );

  }
}
