import React from "react";

function Trainers() {
  return (
    <section className="section" id="trainers">
      <div className="container">
        <div className="row">
          <div className="section-heading">
            <h2>Our Trainers</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="trainer-item">
              <div className="image-thumb">
                <img src="images/trainer1.jpg" alt="" />
              </div>
              <div className="down-content">
                <span>Strength Trainer</span>
                <h4>Danny Bowers</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="trainer-item">
              <div className="image-thumb">
                <img src="images/trainer2.jpg" alt="" />
              </div>
              <div className="down-content">
                <span>Muscle Trainer</span>
                <h4>Henry Lagard</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="trainer-item">
              <div className="image-thumb">
                <img src="images/trainer3.jpg" alt="" />
              </div>
              <div className="down-content">
                <span>Power Trainer</span>
                <h4>Serena Ryan</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainers;
