import { Injectable } from '@angular/core';
import { Inundacion } from './inundacion.model';

@Injectable({
  providedIn: 'root'
})
export class DatosInundacionesService {

  inundaciones: [];
  inundacion: Inundacion;

  constructor() { }

  setInundaciones(data) {
    this.inundaciones = data;
  }

  getInundaciones() {
    return this.inundaciones;
  }

  setInundacion(data) {
    this.inundacion = data;
  }

  getInundacion() {
    return this.inundacion;
  }
}
