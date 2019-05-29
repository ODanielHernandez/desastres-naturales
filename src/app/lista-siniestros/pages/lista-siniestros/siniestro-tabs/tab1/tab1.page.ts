import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { IonContent } from '@ionic/angular';

import { ListaSiniestrosService } from '../../lista-siniestros.service';
import { Siniestro } from '../../lista-siniestros.model';

import { GlobalService } from '../tabs/global.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  loadedSiniestro: Siniestro;
  currentValue: string;

  constructor(
    public global: GlobalService,
    private listaSiniestrosService: ListaSiniestrosService
    ) { }

  ngOnInit() {
    this.loadedSiniestro = this.listaSiniestrosService.getSiniestro(this.global.globalSiniestroId);
    this.currentValue= 'antes';
  }

  segmentButtonClicked(value: string) {
    this.currentValue = value;
  }
}