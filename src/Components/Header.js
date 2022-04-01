import React from "react";

function Header() {
  return (
    <section class="header-area background-image bg-gradiant" id="header">
      <div class="container">
        <div class="header-content d-flex flex-center">
          <div class="col-md-8 col-sm-9 col-xs-12 d-flex flex-center">
            <div class="header-inner">
              <h2>Don't Excuse for your health!</h2>
              <p>
                Welcome to Haarogya! One platform dedicated for your health
                &amp; fitness. Download our App and check our Services and
                Trainers!
              </p>
              <div class="btn-area">
                <a href="#">Download Now </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 hidden-sm hidden-xs">
            <div class="header-m-img">
              <img src="images/slider screen.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
