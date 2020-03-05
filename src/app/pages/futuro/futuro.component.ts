import { Component } from '@angular/core';
import * as platform from 'platform';

@Component({
  selector: 'app-futuro',
  templateUrl: './futuro.component.html',
  styleUrls: ['./futuro.component.css']
})
export class FuturoComponent {

  constructor() {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
  }
  rutaUp = '#about';
  rutaDown = '#team';
  permitir = true;
}
