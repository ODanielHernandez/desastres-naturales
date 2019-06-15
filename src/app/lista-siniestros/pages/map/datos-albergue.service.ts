import { Injectable } from '@angular/core';
import { Albergue } from './albergue.model';

@Injectable({
  providedIn: 'root'
})
export class DatosAlbergueService {

  albergues: [];
  albergue: Albergue;

  constructor() { }

  setAlbergues(data) {
    this.albergues = data;
  }

  getAlbergues() {
    return this.albergues;
  }

  setAlbergue(data) {
    this.albergue = data;
  }

  getAlbergue() {
    return this.albergue;
  }

}
