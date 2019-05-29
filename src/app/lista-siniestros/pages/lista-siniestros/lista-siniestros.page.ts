import { Component, OnInit } from '@angular/core';

import { ListaSiniestrosService } from './lista-siniestros.service';
import { Siniestro } from './lista-siniestros.model';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-lista-siniestros',
  templateUrl: './lista-siniestros.page.html',
  styleUrls: ['./lista-siniestros.page.scss'],
})
export class ListaSiniestrosPage implements OnInit {
  siniestros: Siniestro[];

  constructor(private listaSiniestrosService: ListaSiniestrosService, private menu: MenuController) { }

  ngOnInit() {
    this.siniestros = this.listaSiniestrosService.getAllSiniestros();
  }

  ionViewWillEnter() { this.siniestros = this.listaSiniestrosService.getAllSiniestros(); }

}
