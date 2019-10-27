import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,FormControl, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContainerComponent } from './components/container/container.component';
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component';
import { GeoToolsPanelComponent } from './components/geo-tools-panel/geo-tools-panel.component';
import { EditionPanelComponent } from './components/edition-panel/edition-panel.component';

import { GlobalComponent } from './components/global/global.component';
import { Mapv2Component } from './components/mapv2/mapv2.component';
import { ShowSelectedFeaturesComponent } from './components/show-selected-features/show-selected-features.component';
import { FinishEntityComponentComponent } from './components/finish-entity-component/finish-entity-component.component';
import { ShowFoundPointsComponentComponent } from './components/show-found-points-component/show-found-points-component.component';
import { ShowMessageComponentComponent } from './components/show-message-component/show-message-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ContainerComponent,
    ToolsBarComponent,
    GeoToolsPanelComponent,
    EditionPanelComponent,
    GlobalComponent,
    Mapv2Component,
    ShowSelectedFeaturesComponent,
    FinishEntityComponentComponent,
    ShowFoundPointsComponentComponent,
    ShowMessageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GlobalComponent, Mapv2Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
