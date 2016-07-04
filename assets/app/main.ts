import {bootstrap}    from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {AppComponent} from './app.component';
import {enableProdMode} from '@angular/core';

enableProdMode();
// import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';


// var appPromise = bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, LocalStorageService]);
bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);



// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);
