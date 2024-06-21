import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css"


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
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
