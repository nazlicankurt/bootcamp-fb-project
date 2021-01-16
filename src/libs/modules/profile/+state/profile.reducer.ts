import { Action, createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export interface State {
  profileInfo?: any;
}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ProfileActions.loadProfiles, state => state),
  on(ProfileActions.loadProfilesSuccess, (state, action) => state),
  on(ProfileActions.loadProfilesFailure, (state, action) => state),

  on(ProfileActions.getProfileFromDBLoaded, (state, action) => {
    return {
      ...state,
      profileInfo: action.profileInfo
    }
  }),

);

