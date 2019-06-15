import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatosAlbergueService } from './datos-albergue.service';
import { DatosInundacionesService } from './datos-inundaciones.service';
import { DatosAyudaService } from './datos-ayuda.service';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  @ViewChild('mapElement') mapContainer: ElementRef;
  map: any;

  inundacionData = [];
  markersInundaciones = [];
  inundacionBoolean: boolean;

  albergueData = [];
  markersAlbergues = [];
  albergueBoolean: boolean;

  ayudaData = [];
  markersAyudas = [];
  ayudaBoolean: boolean;

  icon = {
    url: '../../../../assets/img/marcador.png',
    scaledSize: new google.maps.Size(50,50)
  };

  iconPersona = {
    url: '../../../../assets/img/marcadorPersona.png',
    scaledSize: new google.maps.Size(50,50)
  };

  iconInundacion = {
    url: '../../../../assets/img/marcadorInundacion.png',
    scaledSize: new google.maps.Size(50,50)
  }

  iconAyuda = {
    url: '../../../../assets/img/marcadorAyuda.png',
    scaledSize: new google.maps.Size(50,50)
  }

  constructor
    (
    private geolocation: Geolocation, 
    private albergueService: DatosAlbergueService,
    private inundacionesService: DatosInundacionesService,
    private ayudaService: DatosAyudaService
    )
  {
    fetch('../../../../assets/data/marcadores.json').then(res => res.json())
    .then(data => {
      this.albergueData = data.albergues;
      this.albergueService.setAlbergues(this.albergueData);
      this.albergueData = this.albergueService.getAlbergues();
    });

    fetch('../../../../assets/data/inundaciones.json').then(res => res.json())
    .then(dataInundaciones => {
      this.inundacionData = dataInundaciones.inundaciones;
      this.inundacionesService.setInundaciones(this.inundacionData);
      this.inundacionData = this.inundacionesService.getInundaciones();
    });

    fetch('../../../../assets/data/ayuda.json').then(res => res.json())
    .then(dataAyuda => {
      this.ayudaData = dataAyuda.ayudas;
      this.ayudaService.setAyudas(this.ayudaData);
      this.ayudaData = this.ayudaService.getAyudas();
    });
  }

  ngOnInit() {
    this.displayGoogleMap();
  }

  mostrarInundaciones(evento: boolean){
    if(evento === false || this.inundacionBoolean === false){
      this.inundacionBoolean = true;
      this.clearMarkersInundaciones();
    }
    else{
      this.getMarkersInundaciones();
      this.inundacionBoolean = false;
      this.showMarkersInundaciones();
    }
  }

  mostrarAyudas(eventoAyudas: boolean){
    if(eventoAyudas === false || this.ayudaBoolean === false){
      this.ayudaBoolean = true;
      console.log('entrando');
      this.clearMarkersAyudas();
    }
    else{
      this.getMarkersAyudas();
      this.ayudaBoolean = false;
      console.log('saliendo');
      this.showMarkersAyudas();
    }
  }

  mostrarAlbergues(ev: boolean){
    if(ev === false || this.albergueBoolean === false){
      this.albergueBoolean = true;
      this.clearMarkersAlbergues();
    }
    else{
      this.getMarkersAlbergues();
      this.albergueBoolean = false;
      this.showMarkersAlbergues();
    }
  }

  displayGoogleMap() {

    this.geolocation.getCurrentPosition().then((resp) => {
    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    const marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: 'Aquí te encuentras',
      icon: this.iconPersona,
    });


  }).catch((error) => {
    console.log('Error getting location', error);
  });
  }

  // Sets the map on all markers in the array.
  setMapOnAllAlbergues(map) {
    console.log(this.markersAlbergues.length);
    for (let i = 0; i < this.markersAlbergues.length; i++) {
      this.markersAlbergues[i].setMap(map);
    }
  }

    // Sets the map on all markers in the array.
    setMapOnAllAyudas(map) {
      console.log(this.markersAyudas.length);
      for (let i = 0; i < this.markersAyudas.length; i++) {
        this.markersAyudas[i].setMap(map);
      }
    }

    // Sets the map on all markers in the array.
    setMapOnAllInundaciones(map) {
      console.log(this.markersInundaciones.length);
      for (let i = 0; i < this.markersInundaciones.length; i++) {
        this.markersInundaciones[i].setMap(map);
      }
    }

    // Removes the markers from the map, but keeps them in the array.
    clearMarkersAlbergues() {
      this.setMapOnAllAlbergues(null);
      this.markersAlbergues = [];
    }

    // Removes the markers from the map, but keeps them in the array.
    clearMarkersAyudas() {
      this.setMapOnAllAyudas(null);
      this.markersAyudas = [];
    }

    // Removes the markers from the map, but keeps them in the array.
    clearMarkersInundaciones() {
      this.setMapOnAllInundaciones(null);
      this.markersInundaciones = [];
    }

    showMarkersInundaciones() {
      this.setMapOnAllInundaciones(this.map);
    }

    showMarkersAyudas() {
      this.setMapOnAllAyudas(this.map);
    }

    showMarkersAlbergues() {
      this.setMapOnAllAlbergues(this.map);
    }

  getMarkersAlbergues() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.albergueData.length; _i++) {
      if (_i >= 0) {
          this.addMarkerstoMapAlbergue(this.albergueData[_i]);
      }
    }
  }

  getMarkersAyudas() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.ayudaData.length; _i++) {
      if (_i >= 0) {
          this.addMarkerstoMapAyuda(this.ayudaData[_i]);
      }
    }
  }

  getMarkersInundaciones() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.inundacionData.length; _i++) {
      if (_i >= 0) {
          this.addMarkerstoMapInundaciones(this.inundacionData[_i]);
      }
    }
  }


  addMarkerstoMapAlbergue(albergue) {
    const position = new google.maps.LatLng(albergue.latitude, albergue.longitude);
    const albergueMarker = new google.maps.Marker({ position, title: albergue.name, icon: this.icon });
    this.markersAlbergues.push(albergueMarker);
  }

  addMarkerstoMapAyuda(ayuda) {
    const position = new google.maps.LatLng(ayuda.latitude, ayuda.longitude);
    const ayudaMarker = new google.maps.Marker({ position, title: ayuda.name, icon: this.iconAyuda });
    this.markersAyudas.push(ayudaMarker);
  }

  addMarkerstoMapInundaciones(inundacion) {
    const position = new google.maps.LatLng(inundacion.latitude, inundacion.longitude);
    const inundacionMarker = new google.maps.Marker({ position, title: inundacion.name, icon: this.iconInundacion });
    this.markersInundaciones.push(inundacionMarker);
  }


}
