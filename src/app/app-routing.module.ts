import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component'
import {Mapv2Component} from './components/mapv2/mapv2.component'
import {ContainerComponent} from './components/container/container.component'

const routes: Routes = [
  {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'userProfile', component:UserProfileComponent},
    {path:'registeredMaps', component:Mapv2Component},
    {path:'mapContainer', component:ContainerComponent},


     { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
