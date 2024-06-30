import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
import { store } from '../src/store'
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  // const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 300);
  // }, []);


  // console.log('use selector', useSelector(state => state.auditModel))
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
