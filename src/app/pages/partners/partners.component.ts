import { Component } from '@angular/core';
import * as platform from 'platform';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  rutaUp = '#maps';
  rutaDown = '#contacto';
  permitir = true;

  constructor() {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
  }
}
