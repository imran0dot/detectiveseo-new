import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const PortfolioDetails = () => {
  return (
    <Layouts pageTitle="Portfolio Details">
      <section className="portfolio-section p-t-130 p-b-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 order-first">
              <div className="portfolio-thumb">
                <img
                  src="assets/img/portfolio/portfolio-details.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-11 order-lg-last">
              <div className="portfolio-info-box ml-xl-5 m-t-60 wow fadeInUp">
                <h4 className="box-title">Project Info</h4>
                <ul>
                  <li>
                    <span className="info-title">Clients</span>
                    <span className="info">Webtend Agency</span>
                  </li>
                  <li>
                    <span className="info-title">Project Category</span>
                    <span className="info">Digital Marketing Solutions</span>
                  </li>
                  <li>
                    <span className="info-title">Location</span>
                    <span className="info">55 Main Street, New York</span>
                  </li>
                  <li>
                    <span className="info-title">Project Date</span>
                    <span className="info">25 September 2021</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-11">
              <div className="portfolio-details-content m-t-60 wow fadeInUp">
                <h2 className="portfolio-title">
                  Digital Marketing Consultations
                </h2>
                <p className="m-b-30">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <p className="m-b-30">
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium doloremque laudantium ,totam rem aperiam eaque
                  ipsa quae aillo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit sed quia
                  consequuntur magni dolores eos ratione voluptatem sequi
                  nesciunt.Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img
                      src="assets/img/portfolio/portfolio-details-01.jpg"
                      alt="Image"
                      className="m-b-30"
                    />
                  </div>
                  <div className="col-sm-6">
                    <img
                      src="assets/img/portfolio/portfolio-details-02.jpg"
                      alt="Image"
                      className="m-b-30"
                    />
                  </div>
                </div>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur
                </p>
                <div className="row">
                  <div className="col-lg-9"></div>
                </div>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default PortfolioDetails;
