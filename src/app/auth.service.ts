import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User | null>;
  authUid$: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth, private _route: ActivatedRoute) {
    this.user$ = afAuth.authState
    this.authUid$= afAuth.user
   }

  login(){
    let returnUrl = this._route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl', returnUrl)
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    this.afAuth.signOut()
  }


  authUid:any = this.afAuth.user.subscribe(user => {
    if (user) return user.uid
    return null
  } )
}
