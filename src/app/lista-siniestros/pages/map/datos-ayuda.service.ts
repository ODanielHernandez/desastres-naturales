import { Injectable } from '@angular/core';
import { Ayuda } from './ayuda.model';

@Injectable({
  providedIn: 'root'
})
export class DatosAyudaService {

  ayudas: [];
  ayuda: Ayuda;

  constructor() { }

  setAyudas(data) {
    this.ayudas = data;
  }

  getAyudas() {
    return this.ayudas;
  }

  setAyuda(data) {
    this.ayuda = data;
  }

  getAyuda() {
    return this.ayuda;
  }
}
