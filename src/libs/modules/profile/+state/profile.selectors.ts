import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProfile from './profile.reducer';

export const selectProfileState = createFeatureSelector<fromProfile.State>(
  fromProfile.profileFeatureKey
);

export const selectProfileInfo = createSelector(
  selectProfileState,
  (profileState) => {
    console.log(profileState);
    return profileState.profileInfo;
  }
);
