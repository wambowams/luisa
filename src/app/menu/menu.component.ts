import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [
    PolymerElement('paper-menu'),
    PolymerElement('paper-item')
  ]
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
