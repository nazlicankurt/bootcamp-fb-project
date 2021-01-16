import { createAction, props } from '@ngrx/store';

export const loadPostss = createAction(
  '[Posts] Load Postss'
);

export const loadPostssSuccess = createAction(
  '[Posts] Load Postss Success',
  props<{ data: any }>()
);

export const loadPostssFailure = createAction(
  '[Posts] Load Postss Failure',
  props<{ error: any }>()
);
