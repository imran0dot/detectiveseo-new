import Link from "next/link";
import Subscribe from "../src/components/Subscribe";
import Layouts from "../src/layouts/Layouts";

const SignIn = () => {
  return (
    <Layouts pageTitle="Sign In">
      <section className="sign-in-section p-t-120 p-b-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="sign-in-up-wrapper">
                <form action="#">
                  <div className="form-groups">
                    <h4 className="form-title">Log In To Your Account</h4>
                    <div className="field-group">
                      <div className="icon">
                        <i className="far fa-user"></i>
                      </div>
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="field-group">
                      <div className="icon">
                        <i className="far fa-lock"></i>
                      </div>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="field-group">
                      <button type="submit">Log In</button>
                    </div>
                  </div>
                  <div className="form-note">
                    <p>
                      New to Landio?{" "}
                      <Link href="/sign-up">
                        <a>Sign Up</a>
                      </Link>
                    </p>
                  </div>
                </form>
                <a href="#" className="forgot-password">
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </Layouts>
  );
};

export default SignIn;
