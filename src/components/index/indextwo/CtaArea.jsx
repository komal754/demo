import React from "react";
import { Link } from "react-router-dom";
import ads1 from "../../../assets/img/Games/ads1.jpeg";

function CtaArea() {
  return (
    <section className="cta-area cta-bg">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-5 col-lg-6">
            {/* <div className="cta-img">
                    <img src="assets/img/images/cta_img.png" alt="BrandImg" />
                  </div> */}
          </div>
          <div className="col-lg-6">
            <div className="cta-content">
              <div className="cta-icon mb-15">
                <img src="assets/img/icon/cta_icon.png" alt="BrandImg" />
              </div>
              <div className="section-title title-style-three white-title mb-50">
                <h2>
                  Come Daily, <span>Play and Win!</span>
                </h2>
                <p>
                  Join us daily for exciting opportunities to spin and win, and
                  take advantage of our special offers and deals. It's a chance
                  you won't want to miss!
                </p>
              </div>
              <div className="cta-btn">
                <Link to="/#" className="btn btn-style-two">
                  Download Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaArea;
