import { Injectable } from '@angular/core';

import { TabsPage } from './tabs.page';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public globalSiniestroId: string;
  public globalMaterialTipo: string;

  constructor() { }
}
