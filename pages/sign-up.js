import Link from "next/link";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const SignUp = () => {
  return (
    <Layouts pageTitle="Sign Up">
      <section className="sign-in-section p-t-120 p-b-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="sign-in-up-wrapper">
                <form action="#">
                  <div className="form-groups">
                    <h4 className="form-title">Create Your Account</h4>
                    <div className="field-group">
                      <div className="icon">
                        <i className="far fa-user"></i>
                      </div>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="field-group">
                      <div className="icon">
                        <i className="far fa-envelope"></i>
                      </div>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="field-group">
                      <div className="icon">
                        <i className="far fa-lock"></i>
                      </div>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="field-group">
                      <div className="icon">
                        <i className="far fa-lock"></i>
                      </div>
                      <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="field-group">
                      <button type="submit">Create Account</button>
                    </div>
                  </div>
                  <div className="form-note">
                    <p>
                      Already have an account?{" "}
                      <Link href="/sign-in">
                        <a>Log In</a>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default SignUp;
