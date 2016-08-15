import {Component, OnInit} from '@angular/core';
import {PolymerElement} from '@vaadin/angular2-polymer';


@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    PolymerElement('paper-input'),
    PolymerElement('paper-card'),
    PolymerElement('paper-button'),
    PolymerElement('iron-icon')
  ]
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
