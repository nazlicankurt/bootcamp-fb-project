import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as PostsActions from './posts.actions';



@Injectable()
export class PostsEffects {

  loadPostss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(PostsActions.loadPostss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => PostsActions.loadPostssSuccess({ data })),
          catchError(error => of(PostsActions.loadPostssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
