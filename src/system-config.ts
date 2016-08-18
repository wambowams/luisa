// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  // Vaading for Polymer in Angular 2
  '@vaadin': 'vendor/@vaadin',
  /* ngrx/router begin */
  '@ngrx': 'vendor/@ngrx',
  'path-to-regexp': 'vendor/path-to-regexp',
  'isarray': 'vendor/isarray',
  'query-string': 'vendor/query-string',
  'strict-uri-encode': 'vendor/strict-uri-encode',
  'object-assign': 'vendor/object-assign',
  /* ngrx/router end */
  // Google Maps
  'angular2-google-maps': 'vendor/angular2-google-maps'
};

/** User packages configuration. */
const packages: any = {
  // Vaading for Polymer in Angular 2
  '@vaadin/angular2-polymer': { main: 'index.js', defaultExtension: 'js' },
  /* ngrx/router begin */
  '@ngrx/core': { main: 'index' },
  '@ngrx/router': { main: 'index' },
  'path-to-regexp': { main: 'index' },
  'isarray': { main: 'index' },
  'query-string': { main: 'index' },
  'strict-uri-encode': { main: 'index' },
  'object-assign': { main: 'index' },
  /* ngrx/router end */
  // Google Maps
  'angular2-google-maps/core': {defaultExtension: 'js', main: 'index.js'}
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/menu',
  'app/list',
  'app/countdown',
  'app/login',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
