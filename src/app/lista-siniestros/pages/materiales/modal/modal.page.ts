import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { StorageService } from '../storage-service/storage.service';

import { Material } from '../material.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  materials: Material[] = [];
  newMaterial: Material = <Material>{};

  constructor(private navParams: NavParams, private modalController: ModalController, private storageService: StorageService) { }

  ngOnInit() {
  }

  /*radioGroupChange(event) {
   console.log("radioGroupChange",event.detail);
   this.selectedRadioGroup = event.detail;
  }*/

  closeModal(){
    this.modalController.dismiss();
  }

  addMaterial(){
    var today = Date.now();
    var stringForm = today.toString();

    this.newMaterial.id = stringForm;
    this.storageService.addMaterial(this.newMaterial).then(material => {
    this.newMaterial = <Material>{};
    this.modalController.dismiss();
    this.loadMaterials();
    });
  }

  loadMaterials(){
    this.storageService.getMaterials().then(materials => {
      this.materials = materials;
    });
  }
}
