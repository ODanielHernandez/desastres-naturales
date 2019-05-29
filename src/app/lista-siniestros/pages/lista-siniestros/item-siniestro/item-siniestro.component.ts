import { Component, OnInit, Input } from '@angular/core';

import { Siniestro } from '../lista-siniestros.model';


@Component({
  selector: 'app-item-siniestro',
  templateUrl: './item-siniestro.component.html',
  styleUrls: ['./item-siniestro.component.scss'],
})

export class ItemSiniestroComponent implements OnInit {
  @Input() siniestroItem: Siniestro;

  constructor() { }

  ngOnInit() {}

}
