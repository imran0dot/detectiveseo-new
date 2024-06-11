const Subscribe = () => {
  return (
    <section
      className="newsletter-area bg-cover-center bg-soft-grey-color p-t-130 p-b-130"
      style={{ backgroundImage: "url(assets/img/particle/newsletter-bg.png)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cta-content wow fadeInUp">
              <div className="common-heading tagline-boxed m-b-50 text-center">
                <span className="tagline">Your Dedicated Health Care Marketing Team</span>
                <h2 className="title">
                  Leverage the power of digital marketing to grow your physiotherapy practice, attract new clients, and meet your goals.
                </h2>
              </div>

              <div className="cta-btn">
                <a href="#" className="py-2 px-5 rounded rounded-4 mr-5 bg-primary text-white fw-bold fs-1">
                  Get the Check List <i className="far fa-arrow-right ml-2"></i>
                </a>
                <a href="https://wa.me/8801841129353" className="text-dark border border-primary py-2 px-5 rounded rounded-4">
                  Live Chat <i className="far fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-particle-effect d-none d-md-block">
        <img
          className="particle-1 animate-float-bob-y"
          src="assets/img/particle/particle-2.png"
          alt="particle Two"
        />
        <img
          className="particle-2 animate-zoominout"
          src="assets/img/particle/particle-3.png"
          alt="particle Three"
        />
        <img
          className="particle-3 animate-zoominout"
          src="assets/img/particle/particle-4.png"
          alt="particle Four"
        />
        <img
          className="particle-4 animate-zoominout"
          src="assets/img/particle/particle-5.png"
          alt="particle Five"
        />
      </div>
    </section>
  );
};

export default Subscribe;
