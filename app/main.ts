import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { AuthGuard } from './auth-guard.service';

bootstrap(AppComponent, [
    appRouterProviders,
    AuthGuard
])
.catch(err => console.error(err));
