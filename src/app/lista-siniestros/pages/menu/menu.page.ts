import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


  pages = [
    {
      title: 'Lista Desastres',
      url: '/menu/lista-siniestros'
    },
    {
      title: 'Mapa',
      url: '/menu/map'
    },
    {
      title: 'Materiales',
      url: '/menu/materiales'
    },
    {
      title: 'Contactos',
      url: '/menu/contactos'
    }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
   }

  ngOnInit() {
  }

}
