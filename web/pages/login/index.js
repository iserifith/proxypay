import React from 'react';

import dynamic from 'next/dynamic';
import { NoSsr } from '@material-ui/core';
import Head from 'next/head';

const LoginScreen = dynamic(() => import('screens/login').then(x => x));

const Login = () => {
  return (
    <>
      <Head>
        <title>Login to ProxyPay</title>
      </Head>
      <NoSsr>
        <LoginScreen />
      </NoSsr>
    </>
  );
};

export default Login;
