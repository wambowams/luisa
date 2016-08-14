import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { MenuComponent } from './menu/menu.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PolymerElement('paper-toolbar'),
    PolymerElement('paper-header-panel'),
    PolymerElement('paper-drawer-panel'),
    PolymerElement('paper-icon-button'),
    MenuComponent
  ]
})
export class AppComponent {
  title = 'app works!';
}
