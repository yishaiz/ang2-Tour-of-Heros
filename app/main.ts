import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { AuthGuard } from './auth-guard.service';
import {  AuthService} from './auth.service';

bootstrap(AppComponent, [
    appRouterProviders,
    AuthGuard,
    AuthService
])
.catch(err => console.error(err));
