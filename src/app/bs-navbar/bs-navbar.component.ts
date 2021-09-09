import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {


  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
