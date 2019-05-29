import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaSiniestrosPage } from './lista-siniestros.page';
import { ItemSiniestroComponent } from './item-siniestro/item-siniestro.component';

const routes: Routes = [
  { path: '',
    component: ListaSiniestrosPage,
    children: [
      {
        path: 'tabs/:siniestroId',
        loadChildren: './siniestro-tabs/tabs/tabs.module#TabsPageModule'
      }
    ]}
];




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaSiniestrosPage, ItemSiniestroComponent]
})
export class ListaSiniestrosPageModule {}
