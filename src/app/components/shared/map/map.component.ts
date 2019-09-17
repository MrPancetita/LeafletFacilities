import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet';
import 'leaflet.markercluster';
import { DeprecatedDatePipe } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map: any; 
  static readonly LOCAL: boolean = false; 
  static readonly BARAJAS_COORDINATES: [number, number] = [43.2603479, -2.9334110];
  static readonly DEFAULT_ZOOMLEVEL = 3; 

  
  markers: any = [
    {
      "name":"Goroka",
      "city":"Goroka, Papua New Guinea",
      "iata_faa":"GKA",
      "icao":"AYGA",
      "lat":-6.081689,
      "lng":145.391881,
      "alt":5282,
      "tz":"Pacific/Port_Moresby"
    },
    {
      "name":"Madang",
      "city":"Madang, Papua New Guinea",
      "iata_faa":"MAG",
      "icao":"AYMD",
      "lat":-5.207083,
      "lng":145.7887,
      "alt":20,
      "tz":"Pacific/Port_Moresby"
    },
    {
      "name":"San Diego Old Town Transit Center",
      "city":"San Diego, United States",
      "iata_faa":"OLT",
      "lat":32.7552,
      "lng":-117.1995,
      "alt":0,
      "tz":"America/Los_Angeles"
    }
  ]
 

  constructor() { }

  ngOnInit() {

    switch (MapComponent.LOCAL) {

    case true: {
      this.map = L.map('map').
      setView(MapComponent.BARAJAS_COORDINATES, MapComponent.DEFAULT_ZOOMLEVEL);

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
      });

      L.tileLayer('assets/maps/{z}/{x}/{y}.png', {maxZoom: 6}).addTo(this.map);
      L.marker([ 43.2603479,-2.9334110],{draggable: true}).addTo(this.map);

      var southWest = L.latLng(-89.98155760646617, -180),
      northEast = L.latLng(89.99346179538875, 180);
      var bounds = L.latLngBounds(southWest, northEast);

      this.map.setMaxBounds(bounds);
      this.map.on('drag', function() {
          this.map.panInsideBounds(bounds, { animate: false });
      });

      var markerClusters = L.markerClusterGroup();

      for ( var i = 0; i < this.markers.length; ++i )
      {
        var popup = this.markers[i].name +
                    '<br/>' + this.markers[i].city +
                    '<br/><b>IATA/FAA:</b> ' + this.markers[i].iata_faa +
                    '<br/><b>ICAO:</b> ' + this.markers[i].icao +
                    '<br/><b>Altitude:</b> ' + Math.round( this.markers[i].alt * 0.3048 ) + ' m' +
                    '<br/><b>Timezone:</b> ' + this.markers[i].tz;
      
        var m = L.marker( [this.markers[i].lat, this.markers[i].lng] )
                        .bindPopup( popup );
      
        markerClusters.addLayer( m );
      }
      
      this.map.addLayer( markerClusters );  
      break; 
  } 

  case false:{ 

    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([51.5, -0.09]).addTo(this.map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    var markerClusters = L.markerClusterGroup();

    
    for ( var i = 0; i < this.markers.length; ++i )
    {
      var popup = this.markers[i].name +
                  '<br/>' + this.markers[i].city +
                  '<br/><b>IATA/FAA:</b> ' + this.markers[i].iata_faa +
                  '<br/><b>ICAO:</b> ' + this.markers[i].icao +
                  '<br/><b>Altitude:</b> ' + Math.round( this.markers[i].alt * 0.3048 ) + ' m' +
                  '<br/><b>Timezone:</b> ' + this.markers[i].tz;
    
      var m = L.marker( [this.markers[i].lat, this.markers[i].lng] )
                      .bindPopup( popup );
    
      markerClusters.addLayer( m );
    }
    this.map.addLayer( markerClusters );  


  break; 
  }
}
  }
}