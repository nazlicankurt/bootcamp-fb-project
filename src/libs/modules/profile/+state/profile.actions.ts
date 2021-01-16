import { createAction, props } from '@ngrx/store';

export const loadProfiles = createAction(
  '[Profile] Load Profiles'
);

export const loadProfilesSuccess = createAction(
  '[Profile] Load Profiles Success',
  props<{ data: any }>()
);

export const loadProfilesFailure = createAction(
  '[Profile] Load Profiles Failure',
  props<{ error: any }>()
);

export const getProfileFromDB = createAction(
  '[Profile] Get Profile From DB'
);

export const getProfileFromDBLoaded = createAction(
  '[Profile] Get Profile From DB Loaded',
  props<{ profileInfo: any }>()
);
