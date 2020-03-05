import { Component } from '@angular/core';
import { tileLayer, latLng, marker, Icon } from 'leaflet';
import * as platform from 'platform';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  rutaUp = '#clientes';
  permitir = true;

  icon = new Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, attribution: '...' }),
      marker(latLng(-33.4071066, -70.5676703), {
        title: 'Manquehue Norte 151 – Of. 909',
        icon: this.icon
      })
    ],
    zoom: 17,
    center: latLng(-33.4071066, -70.5676703),
    scrollWheelZoom: false
  };

  constructor() {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
  }

  sweetAlertMapa() {
    return {
      imageUrl: '../../../assets/img/edificio/edificio-corporativo.jpeg',
      confirmButtonColor: '#ee473f',
      imageWidth: 300,
      html: '<p>Manquehue Norte #151 - Of. 909 Las Condes</p>',
      imageAlt: 'Edificio corporativo',
      confirmButtonText: 'Cerrar'
    } as SweetAlertOptions;
  }
}
