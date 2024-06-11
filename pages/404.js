import Link from "next/link";
import Layouts from "../src/layouts/Layouts";

const E404 = () => {
  return (
    <Layouts>
      <section className="error-page p-t-130 p-b-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-page-content-wrapper text-center">
                <div
                  className="error-image wow fadeInUp animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                >
                  <img src="assets/img/error-404.png" alt="error 404" />
                </div>
                <div
                  className="error-page-content p-t-80 wow fadeInUp"
                  data-wow-delay="0.2s"
                  data-wow-duration="1500ms"
                >
                  <h2>OPPS!</h2>
                  <p>This Page Are Can’t Be Found</p>
                  <Link href="/">
                    <a className="template-btn m-t-35">
                      Back To Home <i className="fas fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default E404;
