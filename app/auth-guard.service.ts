import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private  authService: AuthService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');

        if (this.authService.isLoggedIn) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUl = state.url;

        // Navigate to the login page
        this.router.navigate(['/login'])

        return false;
    }
}