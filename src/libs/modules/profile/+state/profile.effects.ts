import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, take, filter } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProfileActions from './profile.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable()
export class ProfileEffects {

  loadProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.loadProfiles),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ProfileActions.loadProfilesSuccess({ data })),
          catchError(error => of(ProfileActions.loadProfilesFailure({ error }))))
      )
    );
  });

  getProfileFromDB$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.getProfileFromDB),
      switchMap(() => {
        return this.auth.user.pipe(
          take(1),
          switchMap((user) => {
            return this.firestore.doc(`profiles/${user.uid}`).valueChanges().pipe(
              filter(value => !!value),
              map(data => ProfileActions.getProfileFromDBLoaded({profileInfo: data}))
            )
          }),
          catchError(error => of(ProfileActions.loadProfilesFailure({ error })))
        )
      })
    );
  });



  constructor(private actions$: Actions, public auth: AngularFireAuth, private firestore: AngularFirestore, private snackBar: MatSnackBar) { }

}
