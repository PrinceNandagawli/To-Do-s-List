import React from "react";

export const Login = () => {
  return (
    <form className="bodylog">
      <div className="section">
        <div className="container1">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <spans>Log In </spans>
                  <spans>Sign Up</spans>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="frms-group">
                            <input
                              type="email"
                              name="logemail"
                              className="frms-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="frms-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="frms-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button href="#" className="btns mt-4">
                            submit
                          </button>

                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="frms-group">
                            <input
                              type="text"
                              name="logname"
                              className="frms-style"
                              placeholder="Your Full Name"
                              id="logname"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="frms-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="frms-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="frms-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="frms-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button href="#" className="btns mt-4">
                            submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
