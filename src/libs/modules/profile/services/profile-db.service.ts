import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileDbService {

  constructor(public auth: AngularFireAuth, private firestore: AngularFirestore, private snackBar: MatSnackBar) { }

  saveProfile(data) {
    this.auth.user.pipe(
      take(1),
      switchMap((user) => {
        return from(this.firestore.doc(`profiles/${user.uid}`).set({...data, userId: user.uid}));
      }),
      catchError((error) => {
        this.snackBar.open('Error');
        return error;
      })
    ).subscribe(() => {
      this.snackBar.open('Saved Profile')
    });
  }

  getProfile() {
    return this.auth.user.pipe(
      take(1),
      switchMap((user) => {
        return this.firestore.doc(`profiles/${user.uid}`).valueChanges()
      })
    )
  }
}
