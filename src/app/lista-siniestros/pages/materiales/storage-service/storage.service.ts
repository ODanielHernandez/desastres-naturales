import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Material {
  id: string;
  nombre: string;
  cantidad: number;
  tipo: string;
}

const MATERIAL_KEY = 'my-materials';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addMaterial(material: Material): Promise<any>{
    return this.storage.get(MATERIAL_KEY).then((materials: Material[]) => {
      if(materials){
        materials.push(material);
        return this.storage.set(MATERIAL_KEY, materials);
      }else{
        return this.storage.set(MATERIAL_KEY, [material]);
      }
    });
  }

  getMaterials(): Promise<Material[]>{
    return this.storage.get(MATERIAL_KEY);
  }

  updateMaterial(material: Material): Promise<any>{
    return this.storage.get(MATERIAL_KEY).then((materials: Material[]) => {
      if(!materials || materials.length === 0){
        return null;
      }

      let newMaterials: Material[] = [];

      for(let i of materials){
        if(i.id === material.id){
          newMaterials.push(material);
        }else{
          newMaterials.push(i);
        }
      }

      return this.storage.set(MATERIAL_KEY, newMaterials);

    });
  }

  deleteMaterial(id: string): Promise<Material>{
    return this.storage.get(MATERIAL_KEY).then((materials: Material[]) => {
      if(!materials || materials.length === 0){
        return null;
      }

      let toKeep: Material[] = [];

      for (let i of materials){
        if(i.id !== id){
          toKeep.push(i);
        }
      }

      return this.storage.set(MATERIAL_KEY, toKeep);

    });
  }
}
