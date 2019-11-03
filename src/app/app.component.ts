import { Component } from '@angular/core';

// import plugin
//import '../node_modules/leaflet-draw/dist/draw.js'
import '../../../gisapp-front/node_modules/leaflet-draw/dist/leaflet.draw'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gisapp';
}
