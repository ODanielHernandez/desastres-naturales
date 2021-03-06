import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'lista-siniestros',
        loadChildren: '../lista-siniestros/lista-siniestros.module#ListaSiniestrosPageModule'
      },
      {
        path: 'map',
        loadChildren: '../map/map.module#MapPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/lista-siniestros'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
