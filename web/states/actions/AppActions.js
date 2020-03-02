import { request } from 'utils/request';
import cookie from 'js-cookie';
export const AppActionTypes = {
  INITIALIZE: 'INITIALIZE',
  CLEAR_STORE: 'CLEAR_STORE',
  REGISTER_WITH_EMAIL_AND_PASSWORD: 'REGISTER_WITH_EMAIL_AND_PASSWORD',
  REGISTER_WITH_FACEBOOK: 'REGISTER_WITH_FACEBOOK',
  LINK_TO_FACEBOOK: 'LINK_TO_FACEBOOK',
  LOGIN_WITH_FACEBOOK: 'LOGIN_WITH_FACEBOOK',
  LOGIN_WITH_EMAIL_AND_PASSWORD: 'LOGIN_WITH_EMAIL_AND_PASSWORD',
  LOGIN_SUCCEED: 'LOGIN_SUCCEED',
};

export const AppActions = {
  loginWithFacebook: platformId => {
    return async dispatch => {
      dispatch({ type: AppActionTypes.LOGIN_WITH_FACEBOOK });
      const query1 = `
        {
          login(platformId: 1) {
            id,
            accessToken,
            accessTokenExpiration
          }
        }
        `;

      const response1 = await request(query1, { noAuth: true });
      cookie.set('_accessToken', response1.login.accessToken);
      cookie.set(
        '_accessTokenExpiration',
        response1.login.accessTokenExpiration,
      );

      const query2 = `
        {
          me(id: "${response1.login.id}") {
            id,
            displayName,
            displayPicture,
            email
          }
        }
      `;

      const response2 = await request(query2);
      dispatch({
        type: AppActionTypes.LOGIN_SUCCEED,
        payload: {
          user: {
            authenticated: true,
            displayName: response2.me.displayName,
            displayPicture: response2.me.displayPicture,
            email: response2.me.email,
          },
        },
      });
    };
  },
  loginWithEmailAndPassword: (email, password) => {
    return async dispatch => {
      const query1 = `
       query {
          loginWithEmailAndPassword (email: ${email}, password: ${password}) {
            id
            accessToken,
            accessTokenExpiration
          }
        }
      `;

      const response1 = await request(query1, { noAuth: true });
      cookie.set('_accessToken', response1.login.accessToken);
      cookie.set(
        '_accessTokenExpiration',
        response1.login.accessTokenExpiration,
      );
    };
  },
};
