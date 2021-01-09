import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersDbService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore) { }

  getAllUsers() {
    return this.firestore.collection("profiles").valueChanges();
  }
}
