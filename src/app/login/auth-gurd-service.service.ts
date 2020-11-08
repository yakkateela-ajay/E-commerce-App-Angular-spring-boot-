import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdServiceService implements CanActivate {

  constructor(private router:Router, private loginComponent:LoginComponent) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.loginComponent.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }

  }
}
