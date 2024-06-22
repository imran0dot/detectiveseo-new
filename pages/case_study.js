import dynamic from "next/dynamic";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";
import Head from "next/head";
const PortfolioIsotop = dynamic(
  () => import("../src/components/PortfolioIsotop"),
  {
    ssr: false,
  }
);

const Portfolio = () => {
  return (
    <Layouts pageTitle="Case Study">

      <Head>
        <title>DetectiveSEO | Case Study</title>
      </Head>

      <section className="portfolio-section p-t-130 p-b-130">
        <div className="container">
          <PortfolioIsotop />
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default Portfolio;
