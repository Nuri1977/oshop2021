import { Injectable } from '@angular/core';
import { AngularFireObject } from '@angular/fire/compat/database';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private _userService: UserService) {
  }
  userUid: string = this._auth.authUid


  user: any = this._userService.getUser(this.userUid).subscribe(user => this.user = user)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.user.isAdmin === true){
          return true;
        }
        else {
          return false;
        }
      }
}
