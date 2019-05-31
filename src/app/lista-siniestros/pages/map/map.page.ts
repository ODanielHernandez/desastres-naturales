import { AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 25.785547, lng: -108.974116},
          zoom: 8
        });
  }

}
