import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';


@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  directives: [
    PolymerElement('paper-card'),
    PolymerElement('paper-checkbox'),
    PolymerElement('paper-fab'),
    PolymerElement('google-map')
  ]

})
export class ListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
