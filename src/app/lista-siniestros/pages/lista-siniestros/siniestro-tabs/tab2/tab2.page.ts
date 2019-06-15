import { Component, OnInit, ViewChild} from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

import { GlobalService } from '../tabs/global.service';

import { ListaSiniestrosService } from '../../lista-siniestros.service';
import { Siniestro } from '../../lista-siniestros.model';
import { MaterialService } from './material.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})

export class Tab2Page implements OnInit {
  loadedSiniestro: Siniestro;

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(
     public global: GlobalService,
     private listaSiniestrosService: ListaSiniestrosService,
     private materialService: MaterialService
  )
{

}

 ngOnInit(){
  this.loadedSiniestro = this.listaSiniestrosService.getSiniestro(this.global.globalSiniestroId);
 }

 ionViewWillEnter() {
  this.loadedSiniestro = this.listaSiniestrosService.getSiniestro(this.global.globalSiniestroId);
 }




doReorder(ev: any) {
  let draggedItem = this.loadedSiniestro.mochila.splice(ev.detail.from,1)[0];
  this.loadedSiniestro.mochila.splice(ev.detail.to,0,draggedItem)
  ev.detail.complete();
}

toggleReorderGroup() {
  this.reorderGroup.disabled = !this.reorderGroup.disabled;
}

}
