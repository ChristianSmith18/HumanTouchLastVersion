import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as platform from 'platform';
import { SweetAlertOptions } from 'sweetalert2';
import * as Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { MyLocationService } from 'src/app/services/my-location.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, AfterViewInit {
  // IPAddres: string;
  informacion = platform.description;
  data: any;

  constructor(
    // private http: HttpClient,
    public location: MyLocationService,
    public database: AngularFirestore
  ) {
    if (platform.os.family === 'iOS' || platform.os.family === 'Android') {
      this.permitir = false;
    }
    // this.http
    //   .get(`https://api.ipify.org/?format=json`)
    //   .subscribe((data: any) => {
    //     this.IPAddres = data.ip;
    //   });
  }
  rutaUp = '#';
  rutaDown = '#about';
  permitir = true;

  titulos = [
    'Gestión de personas',
    'Assessment On line',
    'Job Hunter',
    'Empleo de PeSD',
    'Upgrade Profesional'
  ];

  textos = [
    `
    <ul style="text-align: left;">
      <li>Reclutamiento.</li>
      <li>Head Hunting.</li>
      <li>Job Hunting.</li>
      <li>Assessment On Line.</li>
      <li>Evaluaciones Psicolaborales.</li>
      <li>Evaluaciones Clima Laboral.</li>
      <li>Coaching individual.</li>
      <li>Coaching Grupal.</li>
      <li>Gestión por Competencias.</li>
      <li>Detección de Brechas Organizacionales</li>
      <li>Assessment  IT / Inglés / Minería / Ventas.</li>
    </ul>
    `,
    `
    <p style="text-align: justify;">PDA es una poderosa herramienta On Line que, a través de una metodología simple, precisa y científica, permite describir y analizar el Perfil Conductual de las personas.</p>
    <p style="text-align: left;">Nos permite :</p>
    <ul style="text-align: left;">
      <li>Conocer las fortalezas y las áreas de oportunidad de la persona respecto a la Empresa.</li>
      <li>Entender cómo conducir y liderar  efectivamente a las personas.</li>
      <li>Medir el Lidership Matching.</li>
      <li>Medir la compatibilidad entre la persona y el puesto o cargo.</li>
      <li>Medir la energía de un equipo de trabajo para saber si está sub o sobre exigido.</li>
      <li>Desarrollar perfiles de cargo específicos a la medida exacta que requiera el puesto.</li>
    </ul>
    `,
    `
    <ul class="nav nav-tabs">
      <li  class="nav-item">
        <a id="tPersonas" class="nav-link active" onclick="ctswal2(true)">Personas</a>
      </li>
      <li class="nav-item">
        <a id="tCorporativos" class="nav-link" onclick="ctswal2(false)">Corporativos</a>
      </li>
    </ul>
    <div id="tTexto1">
      <p style="text-align: justify;">Es un proceso  personalizado donde  orientamos a profesionales de distintas áreas en la búsqueda de nuevas oportunidades en el Mercado Laboral.</p>
      <p style="text-align: left;">Consta de dos etapas:</p>
      <ul style="text-align: left;">
      <li style="text-align: justify;">En la primera te ayudaremos a conocer bajo una mirada transversal, tu perfil profesional y las áreas de mayor potencialidad donde hacer foco.</li>
      <li style="text-align: justify;">En la segunda, que es opcional, nos encargamos de conseguir una oferta laboral que se ajuste a tus intereses y a tu perfil levantado. Somos el nexo entre tú y las empresas.</li>
      </ul>
    </div>
    <div id="tTexto2" style="display: none;">
    <p style="text-align: justify;">Servicio prestado a empresas que dentro de su plan RS, contemplan programas de Out Placement para sus mandos medios o líneas ejecutivas.</p>
    <p style="text-align: justify;">Este programa entrega herramientas de alto contenido a los participantes que les permiten identificar sus potencialidades para volver al mercado laboral activo.</p>
    <p style="text-align: justify;">Todos son evaluados bajo altos estándares, aplicando, Test Psicolaborales, Eneagrama, Entrevistas con Psicólogas Laborales y PDA Assessment.</p>
    <p style="text-align: justify;">Una vez levantado el perfil de esta persona, Humantouch Consultores comienza la búsqueda de oportunidades laborales donde potencialmente pueden calificar estos profesionales.</p>
    <p style="text-align: justify;">Si se detectan brechas importantes se aplican Planes de Coaching para fortalecer las áreas detectadas.</p>
    <p style="text-align: justify;"><i style="color: #2D2D2D; font-size: 1rem;">Nuestro trabajo termina con las personas contratadas, no mediando plazo de extinción de servicio.</i></p>
    </div>
    `,
    `
    <p style="text-align: justify;">El empleo es un pilar fundamental para el desarrollo del ser humano.</p>
    <p style="text-align: justify;">Trabajamos con y para Personas en Situación de Discapacidad, física-motora o sensorial que tengan estudios Técnico Profesional o Univesitarios y que deseen desarrollarse profesionalmente.</p>
    <p style="text-align: justify;">Creémos en los talentos de PeSD.</p>
    `,
    `
    <p style="text-align: justify;">Definimos la capacitación como una actividad fundamental dentro de nuestro objetivo: lograr el crecimiento y mejora continua de su organización. Es por esto que ofrecemos asesoría y orientación a su empresa para confeccionar un plan de capacitaciones que cierre brechas de competencias de sus colaboradores. Además si así lo requiere ofrecemos apoyo en lo relacionado con los trámites administrativos con SENCE.</p>
    <br/>
    <h4>Compromiso</h4>
    <p style="text-align: justify;">Todas las capacitaciones que realizamos son evaluadas, tanto por los participantes como por nuestros clientes. Esos resultados son entregados a la empresa en un informe, el cual contiene además datos técnicos y cuando aplica, recomendaciones para potenciar los contenidos de la capacitación una vez terminada.</p>

    `
  ];

  sweetAlert(posicion: number) {
    return {
      title: `<h2>${this.titulos[posicion]}</h2>`,
      html: this.textos[posicion],
      showConfirmButton: true,
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#ee473f'
    } as SweetAlertOptions;
  }

  changeSegment() {
    console.log('click');
  }

  agregarUsuario() {
    if (this.data !== undefined) {
      setTimeout(() => {
        const hora = new Date().getHours();
        const minutos = new Date().getMinutes();
        // return this.database.collection('usuarios').doc(`${this.IPAddres}`).set({
        //   usuario: {
        //     location: {
        //       ciudad: this.data.city,
        //       pais: this.data.country_name,
        //       region: this.data.region,
        //       laitude: this.data.latitude,
        //       longitude: this.data.longitude,
        //       conexion: this.data.org
        //     },
        //     informacion: this.informacion,
        //     fecha: `${hora}:${minutos}`
        //   }
        // });
      }, 1000);
    }
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.location.getLocation(this.IPAddres).subscribe(data => {
    //     this.data = data;
    //   });
    // }, 2000);
  }

  ngAfterViewInit() {
    this.agregarUsuario();
  }

}
