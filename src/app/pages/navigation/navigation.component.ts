import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll-to.service';
import { MyLocationService } from 'src/app/services/my-location.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  mostrar = false;

  constructor(
    public scrollservice: ScrollService,
    public location: MyLocationService
    ) { }

  onClick(direccion?: string) {
    this.scrollservice.moveTo(direccion);
    if (window.innerWidth <=  1000 && direccion !== '#') {
      (this.mostrar) ? this.mostrar = false : this.mostrar = true;
    }
  }
}
