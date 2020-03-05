import { Injectable } from '@angular/core';

// Solicitudes HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyLocationService {
  ipAddress: any;
  intento = 0;

  constructor(
    private http: HttpClient
    ) {}

  getLocation(ip: string) {
    return this.http.get(`https://ipapi.co/${ip}/json/`);
  }
}
