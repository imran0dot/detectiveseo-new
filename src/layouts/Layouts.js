import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  activeNavMenu,
  animation,
  aTagClick,
  index8Body,
  stickyNav,
} from "../utils";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";


const Layouts = ({ noHeader, noFooter, pageTitle, children }) => {
  useEffect(() => {
    animation();
    activeNavMenu();
    index8Body();
    aTagClick();
    window.addEventListener("scroll", stickyNav);
  });
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          href="assets/img/detectiveFav.png"
          type="img/png"
        />
        <title>DetectiveSEO</title>
        {/* <!--Start of Tawk.to Script--> */}
        <script type="text/javascript">{`
                var Tawk_API=Tawk_API||{ }, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66797a82eaf3bd8d4d13c4da/1i158d3uc';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
            })()`}
        </script>
        {/* <!--End of Tawk.to Script--> */}
      </Head>
      {!noHeader && <Header />}
      {pageTitle && <Banner pageName={pageTitle} />}
      {children}
      <ScrollTop />
      {!noFooter && <Footer />}
    </Fragment>

  );
};

export default Layouts;
