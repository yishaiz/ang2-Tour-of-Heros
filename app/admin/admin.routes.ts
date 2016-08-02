import {RouterConfig} from '@angular/router';
import {  AdminComponent} from './admin.component';

import {AuthGuard} from '../auth-guard.service';


// @Component({
//     providers:[AuthGuard]
// })

export const adminRoutes:RouterConfig = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    }
];

