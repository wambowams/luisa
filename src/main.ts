import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { routes } from './app/routes'
import { provideRouter } from '@ngrx/router';




if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  provideRouter(routes)
]);
