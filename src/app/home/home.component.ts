import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  constructor(private _auth: AuthService, private _userService: UserService) {

   }

  ngOnInit() {


  }

  curentUser: Array<AppUser> | undefined;



  currentUser(): Observable<boolean>{
    return this._auth.user$
      .pipe(switchMap(
        user => { return this._userService.getUser(user!.uid); }
      ),
      map(appUser => appUser.isAdmin))

  }

}
