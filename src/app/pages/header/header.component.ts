import { Component } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll-to.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public scrollservice: ScrollService) { }

}
