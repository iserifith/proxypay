import Axios from 'axios';
import cookie from 'js-cookie';
import { coreApiErrorHandler } from './errorHandler';

const request = async (query, options = { noAuth: false }) => {
  const accessToken = cookie.get('_accessToken');
  const headers = {};

  // if (options && !options.noAuth) {
  //   if (accessToken) {
  //     headers.Authorization = `Bearer ${accessToken}`;
  //   }
  // }

  if (!options.noAuth) {
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  try {
    const { data } = await Axios({
      url: process.env.CORE_URL,
      method: 'POST',
      headers,
      data: {
        query,
      },
    });
    if (data && data.data) {
      return data.data;
    }
  } catch (error) {
    if (error.response) {
      coreApiErrorHandler(error);
    } else {
      throw error;
    }
  }
  return null;
};

export { request };
