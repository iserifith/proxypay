import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import NoSsr, { ThemeProvider, Box } from '@material-ui/core';
import 'assets/styles/index.scss';
import theme from '../utils/createTheme';
import { AppBar } from 'components/AppBar';
import { configureStore } from 'states/store';
import withReduxStore from 'utils/withRedux';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    this.state = {
      route: props.router.route,
    };
  }

  async componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <Head>
          <title>ProxyPay</title>
        </Head>
        <Provider store={reduxStore}>
          <ThemeProvider theme={theme}>
            <Box
              minHeight="100vh"
              minWidth="100vw"
              margin="0"
              padding="0"
              bgcolor="#232728"
            >
              <AppBar />
              <Component {...pageProps} />
            </Box>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

export default withReduxStore(MyApp);

// export default withRedux(configureStore, { debug: true })(
//   class MyApp extends App {
//     constructor(props) {
//      super(props)
//      this.persistor = persistStore()
//     }

//     async componentDidMount() {
//       //   cookiesetter
//       // checktokenauth
//     }

//     render() {
//       const { Component, pageProps, store } = this.props;
//       return (
//         <>
//           <Head>
//             <title>PROXYPAY</title>
//           </Head>
//           {/* <NoSsr></NoSsr> */}
//           <Provider store={store}>
//             <PersistGate persistor={store._persistor}>
//               <ThemeProvider theme={createTheme}>
// <Box minHeight="100vh" minWidth="100vw" margin="0" padding="0">
//   <AppBar />
//   <Component {...pageProps} />
// </Box>
//               </ThemeProvider>
//             </PersistGate>
//           </Provider>
//         </>
//       );
//     }
//   },
// );

// export default withRedux(configureStore, { debug: true })(MyApp);
