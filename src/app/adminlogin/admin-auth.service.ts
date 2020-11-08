import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AdminloginComponent } from './adminlogin.component';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  constructor(private router:Router, private adminComponent:AdminloginComponent) { }
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(this.adminComponent.isadminloggedin()){
      return true;
    }else{
      this.router.navigate(['admin-login']);
      return false;
    }

  }
}
