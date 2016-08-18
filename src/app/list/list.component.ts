import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';


@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [
    GOOGLE_MAPS_DIRECTIVES,
    PolymerElement('paper-card'),
    PolymerElement('paper-checkbox'),
    PolymerElement('paper-fab')
  ]

})
export class ListComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {}

  ngOnInit() {
  }

}
