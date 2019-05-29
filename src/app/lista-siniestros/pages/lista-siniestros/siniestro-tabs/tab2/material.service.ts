import { Injectable } from '@angular/core';
import { Material } from './material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private materials: Material[] = [
    {
      id : 'm1',
      nombre: 'agua',
      cantidad: 2,
      tipo: 'basico',
    }
  ];

  constructor() { }

  getAllMaterials(){
    return [...this.materials];
  }

  deleteMaterial(materialId: string){
    this.materials = this.materials.filter(recipe => {
      return recipe.id !== materialId;
    });
  }

}
