import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
// import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';


// var appPromise = bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, LocalStorageService]);
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);


// register LocalStorage, this registers our change-detection.
// LocalStorageSubscriber(appPromise);
