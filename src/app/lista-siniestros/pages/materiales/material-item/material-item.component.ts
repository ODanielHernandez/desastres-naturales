import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Material } from '../material.model';
import { MaterialService } from '../../lista-siniestros/siniestro-tabs/tab2/material.service';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.scss'],
})

export class MaterialItemComponent implements OnInit {
  @Input() materialItem: Material;
  materials: Material[];
  currentValue: string;

  constructor(
    private materialService: MaterialService,
    private alertCtrl: AlertController) { }

  ngOnInit() {}

  onDeleteMaterial(value: string) {
    this.currentValue = value;

    this.alertCtrl.create({
        header: 'Eliminar elemento',
        message: '¿Seguro deseas eliminarlo?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () =>{
            this.materialService.deleteMaterial(this.currentValue);
          }
        }
      ]
      }).then(alertEl => {
        alertEl.present();
      });
  }
}
