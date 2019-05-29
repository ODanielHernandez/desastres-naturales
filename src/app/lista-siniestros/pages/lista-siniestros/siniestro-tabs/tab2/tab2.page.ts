import { Component, OnInit, ViewChild} from '@angular/core';

import { ListaSiniestrosService } from '../../lista-siniestros.service';
import { Siniestro } from '../../lista-siniestros.model';

import { MaterialService } from './material.service';
import { Material } from './material.model';
import { StorageService } from './storage-service/storage.service';
import { ModalController, NavController, Platform, IonList, AlertController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

import { GlobalService } from '../tabs/global.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  materials: Material[] = [];
  @ViewChild('myList')myList: IonList;

  loadedSiniestro: Siniestro;
  currentValue: string;
  currentTipo: string = 'basico';

  constructor(
    public global: GlobalService,
    private listaSiniestrosService: ListaSiniestrosService,
    private materialService: MaterialService,
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
    this.loadedSiniestro = this.listaSiniestrosService.getSiniestro(this.global.globalSiniestroId);
    this.loadMaterials();
  }

  ionViewWillEnter() {
    this.loadedSiniestro = this.listaSiniestrosService.getSiniestro(this.global.globalSiniestroId);
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
