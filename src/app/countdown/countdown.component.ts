import { Component, OnInit } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer'

@Component({
  moduleId: module.id,
  selector: 'app-countdown',
  templateUrl: 'countdown.component.html',
  styleUrls: ['countdown.component.css'],
  directives: [
    PolymerElement('countdown-timer'),
  ]
})
export class CountdownComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
