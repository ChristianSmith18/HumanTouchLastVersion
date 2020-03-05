import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { HeaderComponent } from './pages/header/header.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AboutComponent } from './pages/about/about.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FuturoComponent } from './pages/futuro/futuro.component';
import { ArrowUpComponent } from './components/arrow-up/arrow-up.component';
import { ArrowDownComponent } from './components/arrow-down/arrow-down.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapComponent } from './components/map/map.component';

// Leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

// Scroll
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// Carousel
import { CarouselModule } from 'ngx-carousels';

// LazyLoadImages
import { NgxLazyImagesModule } from 'ngx-lazy-loading-images';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    PartnersComponent,
    ServiciosComponent,
    AboutComponent,
    EquipoComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent,
    ArrowUpComponent,
    ArrowDownComponent,
    LoadingComponent,
    MapComponent,
    FuturoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    SweetAlert2Module.forRoot(),
    ScrollToModule.forRoot(),
    HttpClientModule,
    CarouselModule,
    NgxLazyImagesModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCwVhYP2j5yfz6wWHcJCWFXXmqJIxd7ObA',
      authDomain: 'gag-5e854.firebaseapp.com',
      databaseURL: 'https://gag-5e854.firebaseio.com',
      projectId: 'gag-5e854',
      storageBucket: 'gag-5e854.appspot.com',
      messagingSenderId: '870741686795',
      appId: '1:870741686795:web:322586f5a802eb8d'
    }, 'HumanTouch'),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
