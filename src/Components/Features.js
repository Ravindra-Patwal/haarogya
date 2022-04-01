import React from "react";

function Features() {
  return (
    <section className="features-area" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Best Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do{" "}
          </p>
        </div>
        <div className="row">
          <div className="features-content">
            <div className="col-md-4 col-sm-6 col-xs-12 text-right">
              <div className="features-list">
                <div className="features-item">
                  <div className="icon">
                    <i className="fa fa-file-image-o"></i>
                  </div>
                  <h4>.Unlimited Features</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
                <div className="features-item">
                  <div className="icon">
                    <i className="fa fa-cloud"></i>
                  </div>
                  <h4>.Cloud Storage</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
                <div className="features-item">
                  <div className="icon">
                    <i className="fa fa-cube"></i>
                  </div>
                  <h4>.Modern Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 hidden-xs hidden-sm">
              <div className="features-mscreen">
                <img src="images/appscreen.png" alt="mobile screen" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="features-list features-list-right">
                <div className="features-item">
                  <div className="icon">
                    <i className="fa fa-android"></i>
                  </div>
                  <h4>Android Platform.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
                <div className="features-item">
                  <div className="icon">
                    <i className="fa fa-headphones"></i>
                  </div>
                  <h4>Strategy Solutions.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
                <div className="features-item">
                  <div className="icon">
                    <i className="fa fa-desktop"></i>
                  </div>
                  <h4>Fully Responsive Design.</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
