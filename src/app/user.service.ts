import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import firebase from 'firebase/compat/app';
import { empty, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Observable<any[]>;
  constructor(private _db: AngularFireDatabase) {
    this.users = _db.list('users').valueChanges();
   }


  save(user: firebase.User) {
    this._db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }


  getUser(uid:string){
    if(uid !== null){
      return this._db.object('users/' + uid).valueChanges()
    }
    else {
      return this._db.object('users').valueChanges()
    }
  }



}
