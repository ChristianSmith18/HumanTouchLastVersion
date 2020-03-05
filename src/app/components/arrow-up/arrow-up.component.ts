import { Component, Input } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'arrow-up',
  templateUrl: './arrow-up.component.html',
  styleUrls: ['./arrow-up.component.css']
})
export class ArrowUpComponent {

  @Input() ruta: string;
  @Input() acceso: boolean;

  constructor(public scrollservice: ScrollService) { }

  scroll() {
    this.scrollservice.moveTo(this.ruta);
  }
}
