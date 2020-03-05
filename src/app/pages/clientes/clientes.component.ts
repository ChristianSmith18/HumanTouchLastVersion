import { Component, OnInit } from '@angular/core';
import * as platform from 'platform';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  rutaUp = '#team';
  rutaDown = '#maps';
  permitir = true;

  clientes = [
    ['../../../assets/img/clients/Imagen1.png', 'Frigorífico CAMER'],
    ['../../../assets/img/clients/Imagen2.jpg', 'AASA'],
    ['../../../assets/img/clients/Imagen3.png', 'Comafri S.A.'],
    ['../../../assets/img/clients/Imagen4.png', 'AUDIOMUSICA'],
    ['../../../assets/img/clients/Imagen5.png', 'Entre rios'],
    ['../../../assets/img/clients/Imagen6.png', 'MSA'],
    ['../../../assets/img/clients/Imagen7.png', 'MIMET'],
    ['../../../assets/img/clients/Imagen8.png', 'Servimet'],
    ['../../../assets/img/clients/Imagen9.png', 'Mi plast'],
    ['../../../assets/img/clients/Imagen10.png', 'MI Logistic'],
    ['../../../assets/img/clients/Imagen11.png', 'Interscreen'],
    ['../../../assets/img/clients/Imagen12.png', 'VH Group'],
    ['../../../assets/img/clients/Imagen13.png', 'Truck Center'],
    ['../../../assets/img/clients/Imagen14.png', 'SYM'],
    ['../../../assets/img/clients/Imagen15.png', 'HumanApis'],
  ];

  constructor() {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
  }

  ngOnInit() {
  }

}
