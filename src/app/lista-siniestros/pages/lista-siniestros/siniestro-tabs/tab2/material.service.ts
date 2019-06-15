import { Injectable } from '@angular/core';
import { GlobalService } from '../tabs/global.service';
import { ListaSiniestrosService } from '../../lista-siniestros.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private currentItem: any;

  public materials = [
      { id: 'S1', val: 'Pepperoni', isChecked: false }
    ];

  constructor(public global: GlobalService, private listaSiniestrosService: ListaSiniestrosService) { }

  getCurrentItem(){
    this.currentItem = this.listaSiniestrosService.getSiniestro(this.global.globalSiniestroId);
  }

  getAllMaterials(){
    return [...this.materials];
  }

  deleteMaterial(materialId: string){
    this.materials = this.materials.filter(recipe => {
      return recipe.id !== materialId;
    });
  }

}
