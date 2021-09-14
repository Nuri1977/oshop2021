import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _userService: UserService ,private _auth: AuthService, private _router: Router) {
    _auth.user$.subscribe(user => {
      if(user) {
        _userService.save(user)

        let returnUrl = localStorage.getItem('returnUrl')
        _router.navigate([returnUrl]);
      }
    })
  }
}
