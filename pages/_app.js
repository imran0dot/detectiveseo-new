import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import { store } from '../src/store'
import { Provider } from "react-redux";
// import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 300);
  // }, []);
  return (
    <Fragment>
      {/* {loader && <PreLoader />} */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
