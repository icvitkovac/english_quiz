import {bootstrap}    from '@angular/platform-browser-dynamic'
import {HTTP_PROVIDERS} from '@angular/http';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import {AppComponent} from './app.component';
import {enableProdMode} from '@angular/core';

enableProdMode();

bootstrap(AppComponent, [HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);