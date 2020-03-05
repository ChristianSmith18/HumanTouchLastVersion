import { Component } from '@angular/core';
import * as platform from 'platform';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  rutaUp = '#portfolio';
  rutaDown = '#futuro';
  permitir = true;

  constructor() {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
  }
}
