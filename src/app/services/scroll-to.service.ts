import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import * as platform from 'platform';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  duracion = 10;

  constructor(private scrollToService: ScrollToService) {
    if (platform.os.family === 'iOS' || platform.os.family === 'OS X') {
      this.duracion = 1000;
    }
  }

  moveTo(href: string) {
    const config: ScrollToConfigOptions = {
      target: href,
      duration: this.duracion,
      easing: 'easeInOutQuad'
    };
    if (href === '#') {
      this.scrollToService.scrollTo({offset: -10000, duration: this.duracion, easing: 'easeInOutQuad'});
    } else {
      this.scrollToService.scrollTo(config);
    }


  }
}
