import { Component, Input } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll-to.service';

@Component({
  selector: 'arrow-down',
  templateUrl: './arrow-down.component.html',
  styleUrls: ['./arrow-down.component.css']
})
export class ArrowDownComponent {

  @Input() ruta: string;
  @Input() acceso: boolean;

  constructor(public scrollservice: ScrollService) { }

  scroll() {
    this.scrollservice.moveTo(this.ruta);
  }
}
