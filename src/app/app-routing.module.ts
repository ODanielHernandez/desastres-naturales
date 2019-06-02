import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './lista-siniestros/pages/menu/menu.module#MenuPageModule'},
  { path: 'modal', loadChildren: './lista-siniestros/pages/materiales/modal/modal.module#ModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
