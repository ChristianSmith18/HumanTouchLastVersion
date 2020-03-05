import { Component } from '@angular/core';
import * as platform from 'platform';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent {
  rutaUp = '#futuro';
  rutaDown = '#clientes';
  permitir = true;

  constructor() {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
  }
}
