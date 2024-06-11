import AccordionV1 from "../src/components/AccordionV1";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const ServiceDetails = () => {
  return (
    <Layouts pageTitle="Service Details">
      <section className="service-details-area p-t-130 p-b-130">
        <div className="container">
          <div className="service-details-content">
            <h2 className="service-title">Email Marketing</h2>

            <p className="m-b-30">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam
            </p>

            <div className="row">
              <div className="col-md-6">
                <div className="m-b-30">
                  <img
                    src="assets/img/services/service-details-thumbnail-1.jpg"
                    alt="Service One"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="m-b-30">
                  <img
                    src="assets/img/services/service-details-thumbnail-2.jpg"
                    alt="Service Two"
                  />
                </div>
              </div>
            </div>

            <h3 className="service-subtitle">
              Results For Email Marketing In Business
            </h3>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt porro quisquam{" "}
            </p>

            <div className="row iconic-boxes-v2">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="iconic-box m-t-50">
                  <div className="icon">
                    <img
                      src="assets/img/icon/business-analysis.png"
                      alt="Business"
                    />
                  </div>
                  <h5 className="title">
                    <a href="#">Business Analysis</a>
                  </h5>
                  <p>
                    Sed perspiciatis unde omnis este error voluptate accusant
                    doloremque systems.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="iconic-box m-t-50">
                  <div className="icon">
                    <img
                      src="assets/img/icon/consulting.png"
                      alt="Consulting"
                    />
                  </div>
                  <h5 className="title">
                    <a href="#">Fintech Consulting</a>
                  </h5>
                  <p>
                    Sed perspiciatis unde omnis este error voluptate accusant
                    doloremque systems.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="iconic-box m-t-50">
                  <div className="icon">
                    <img src="assets/img/icon/finance.png" alt="Finance" />
                  </div>
                  <h5 className="title">
                    <a href="#">Finance Platforms</a>
                  </h5>
                  <p>
                    Sed perspiciatis unde omnis este error voluptate accusant
                    doloremque systems.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="iconic-box m-t-50">
                  <div className="icon">
                    <img src="assets/img/icon/cog.png" alt="Quality" />
                  </div>
                  <h5 className="title">
                    <a href="#">Quality Assurance</a>
                  </h5>
                  <p>
                    Sed perspiciatis unde omnis este error voluptate accusant
                    doloremque systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-faq p-t-70 p-b-70">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-10 order-lg-last">
                  <div className="faq-content">
                    <h3 className="service-subtitle">
                      Frequently Asked Questions
                    </h3>

                    <div className="landio-accordion-v1 accordion-bordered">
                      <AccordionV1 />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-9 order-lg-first">
                  <div className="faq-image text-lg-left m-t-md-60">
                    <img
                      src="assets/img/services/service-details-thumbnail-3.jpg"
                      alt="faq image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p>
              {`On the other hand, we denounce with righteous indignation and dislike men who are beguiled demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure`}
            </p>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default ServiceDetails;
