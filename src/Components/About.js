import React from "react";

function About() {
  return (
    <section className="about-area" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-5 hidden-sm hidden-xs">
            <div className="about-left-thumb">
              <img src="images/about-m-screen.png"
                alt="mobile screen" />
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
            <div className="about-content">
              <span>Meet Appson.</span>
              <h2>Work the way you live</h2>
              <p>
                Lorem ipsum dolor sit amet,consectetr adipisicing elit, sed do
                eiusmod tempor incididunt labore et dolore magna aliqua. enim ad
                minim veniam.
              </p>
              <div className="about-ft">
                <div className="ft-single">
                  <div className="icon">
                    <i className="fa fa-desktop"></i>
                  </div>
                  <div className="ft-info">
                    <h4>Fully Responsive Design.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do enim ad minim veniam,
                    </p>
                  </div>
                </div>
                <div className="ft-single">
                  <div className="icon">
                    <i className="fa fa-android" aria-hidden="true"></i>
                  </div>
                  <div className="ft-info">
                    <h4>Android Platform.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do enim ad minim veniam,
                    </p>
                  </div>
                </div>
                <div className="ft-single">
                  <div className="icon">
                    <i className="fa fa-headphones"></i>
                  </div>
                  <div className="ft-info">
                    <h4>Strategy Solutions.</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do enim ad minim veniam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
