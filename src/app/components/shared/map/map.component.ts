import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet';
import 'leaflet.markercluster';
import { Facility, Address, AddressMap } from '../../../domain/faciLITE.model'
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

  
  markers: Facility[] = [
    {
      "facilityCleansiness": null,
      "facilityDescription": "MyFirstFacility",
      "facilityDimensions": null,
      "facilityIdentifier": "FAC0001",
      "facilityName": "THALES SPAIN",
      "facilityType": "Warehouse",
      "relating": null,
      "address":  {
        "addressCountry": "Spain",
        "addressEMail": null,
        "addressFaxNumber": null,
        "addressIdentifier": "ADR00001",
        "addressPostalBox": null,
        "addressPostalCode": "28942",
        "addressStreet": null,
        "addressStreetNumber": null,
        "addressTelephoneNumber": null,
        "addressTelexNumber": null,
        "addressURL": null,
        "addressCoordXY": [22, 13]
      },
      "focalPoint": "String",
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
        var popup = this.markers[i].facilityIdentifier +
                    '<br/><b>FacilityIdentifier:</b> ' + this.markers[i].facilityIdentifier +
                    '<br/><b>FacilityName:</b> ' + this.markers[i].facilityName +
                    '<br/><b>FacilityDescription:</b> ' + this.markers[i].facilityDescription;
      
        var m = L.marker( [this.markers[i].address.addressCoordXY[0], this.markers[i].address.addressCoordXY[1]] )
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
      var popup = this.markers[i].facilityIdentifier +
      '<br/><b>FacilityIdentifier:</b> ' + this.markers[i].facilityIdentifier +
      '<br/><b>FacilityName:</b> ' + this.markers[i].facilityName +
      '<br/><b>FacilityDescription:</b> ' + this.markers[i].facilityDescription;

          var m = L.marker( [this.markers[i].address.addressCoordXY[0], this.markers[i].address.addressCoordXY[1]] )
          .bindPopup( popup );
      markerClusters.addLayer( m );
    }
    this.map.addLayer( markerClusters );  


  break; 
  }
}
  }
}