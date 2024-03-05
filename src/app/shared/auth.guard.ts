import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private auth : AuthService , private router : Router){


}
  canActivate() {
if(this.auth.IsLoggedIn()){
    return true;
  }
  this.router.navigate(['login']);
  return false;
}
}