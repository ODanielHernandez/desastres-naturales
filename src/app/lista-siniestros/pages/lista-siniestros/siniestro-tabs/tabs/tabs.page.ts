import { Component, OnInit} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ListaSiniestrosService } from '../../lista-siniestros.service';
import { Siniestro } from '../../lista-siniestros.model';

import { GlobalService } from './global.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})

export class TabsPage implements OnInit {
  loadedSiniestro: Siniestro;

  constructor(
    private activatedRout: ActivatedRoute,
    private listaSiniestrosService: ListaSiniestrosService,
    private router: Router,
    private alertCtrl: AlertController,
    public global: GlobalService
    ) { }

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(paramMap => {
      if (!paramMap.has('siniestroId')) {
        this.router.navigate(['/lista-siniestros']);
        return;
      }
      const siniestroId = paramMap.get('siniestroId');
      this.global.globalSiniestroId = paramMap.get('siniestroId');
      this.loadedSiniestro = this.listaSiniestrosService.getSiniestro(siniestroId);
    });
  }
}
