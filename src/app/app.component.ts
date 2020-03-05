import { Component, HostListener, AfterViewChecked } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.4s ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.4s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements AfterViewChecked {
  cargado: boolean;
  cont = 0;
  navbar = false;

  body: number;
  porcentaje: number;

  constructor() {
    this.cargado = false;
    document.addEventListener('scroll', () => {
      this.body = document.getElementsByTagName('body')[0]
        .offsetHeight as number;
      this.porcentaje = (window.pageYOffset * 111) / this.body;
      this.porcentaje > 100 ? (this.porcentaje = 100) : null;
      if (document.getElementById('roadBar')) {
        document.getElementById(
          'roadBar'
        ).style.width = `${this.porcentaje.toFixed()}%`;
      }
    });
  }

  ngAfterViewChecked() {
    this.cont++;
    if (this.cont === 2) {
      this.loadPage();
    }
  }

  loadPage() {
    window.onload = () => {
      setTimeout(() => {
        this.cargado = true;
      }, 1000);
    };
  }

  @HostListener('window:scroll', ['$event']) doSomethingOnInternalScroll(
    $event?
  ) {
    if (window.pageYOffset >= 250) {
      this.navbar = true;
    } else {
      this.navbar = false;
    }
  }
}
