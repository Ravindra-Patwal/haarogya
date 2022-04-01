import React from "react";

function Subscription() {
  return (
    <section className="subscription-area" id="subscription">
      <div className="container">
        <div className="subscription-title">
          <h2>SUBSCRIPTION </h2>
          <p>CHOOSE YOUR PERFECT PLANS</p>
        </div>
        <div className="row">
          <div className="subscription-list">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="subscription-item text-center">
                <div className="prc-head bg-theme">
                  <span>1 Month</span>
                  <h4>Rs.500/m</h4>
                </div>
                <ul className="prc-list">
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>No time restriction</li>
                </ul>
                <div className="btn-area">
                  <a href="#">purchase</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="subscription-item text-center">
                <div className="prc-head bg-theme">
                  <span>6 Month</span>
                  <h4>Rs.2500/m</h4>
                </div>
                <ul className="prc-list">
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>No time restriction</li>
                </ul>
                <div className="btn-area">
                  <a href="#">purchase</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="subscription-item text-center">
                <div className="prc-head bg-theme">
                  <span>12 Month</span>
                  <h4>Rs.5000/m</h4>
                </div>
                <ul className="prc-list">
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>No time restriction</li>
                </ul>
                <div className="btn-area">
                  <a href="#">purchase</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscription;
