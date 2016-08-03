import {RouterConfig} from '@angular/router';

import {  AuthenticatedComponent} from './authenticated.component';
import {AuthGuard} from '../auth-guard.service';


export const authenticatedRoutes:RouterConfig = [
    {
        path: 'authenticated',
        component: AuthenticatedComponent,
        canActivate: [AuthGuard]
    }
];


