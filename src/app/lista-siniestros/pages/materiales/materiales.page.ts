import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Platform, IonList, AlertController } from '@ionic/angular';

import { Siniestro } from '../lista-siniestros/lista-siniestros.model';


import { Material } from './material.model';
import { StorageService } from './storage-service/storage.service';
import { ModalPage } from './modal/modal.page';



@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
})

export class MaterialesPage implements OnInit {
  materials: Material[] = [];
  @ViewChild('myList')myList: IonList;

  loadedSiniestro: Siniestro;
  currentValue: string;
  currentTipo: string = 'basico';

  constructor(
    private storageService: StorageService,
    private plt: Platform,
    private nav: NavController,
    private modalController: ModalController,
    private alertCtrl: AlertController
    ) {
      this.plt.ready().then(() => {
        this.loadMaterials();
      });
     }

  ngOnInit() {
    this.loadMaterials();
  }

  ionViewWillEnter() {
    this.loadMaterials();
   }

  loadMaterials(){
    var tipo = this.currentTipo;
    this.storageService.getMaterials().then(materials => {
      this.materials = materials.filter(material => material.tipo === this.currentTipo);
      console.log(this.materials);
    });
  }

  updateMaterial(material: Material){
    this.storageService.updateMaterial(material).then(material => {
      this.myList.closeSlidingItems();
      this.loadMaterials();
    })
  }

  deleteMaterial(material: Material){
    this.alertCtrl.create({
        header: 'Borrar elemento',
        message: '¿Estás seguro de eliminar el elemento?',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () =>{
            this.storageService.deleteMaterial(material.id).then(material => {
              this.loadMaterials();
            })
          }
        }
      ]
      }).then(alertEl => {
        alertEl.present();
      });
  }

  segmentButtonClicked(tipo: string): void {
    this.currentTipo = tipo;
    this.loadMaterials();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    });

    modal.onDidDismiss().then(() => {
        this.loadMaterials();
    });

    modal.present();
  }

  doRefresh(event) {
    this.loadMaterials();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
