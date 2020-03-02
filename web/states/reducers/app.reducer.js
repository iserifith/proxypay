import { createReducer } from 'utils/createReducer';
import { AppActionTypes } from '../actions/AppActions';

const INITIAL_STATE = {
  initialized: false,
  user: {
    authenticated: false,
    displayName: null,
    email: null,
    accessToken: null,
    expiresAt: null,
  },
};

const app = createReducer(INITIAL_STATE, {
  [AppActionTypes.CLEAR_STORE]: () => {
    return {
      initialized: false,
      user: {
        authenticated: false,
        displayName: null,
        email: null,
        accessToken: null,
        expiresAt: null,
      },
    };
  },
  [AppActionTypes.INITIALIZE]: (state, action) => {
    return {
      ...state,
      initialized: true,
    };
  },
  [AppActionTypes.LOGIN_SUCCEED]: (state, action) => {
    return {
      ...state,
      user: action.payload.user,
    };
  },
});

export { app };
