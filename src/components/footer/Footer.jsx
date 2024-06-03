import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
	   <footer>
        <div className="footer-top footer-bg">
          {/* newsletter-area */}
          <div className="newsletter-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="newsletter-wrap">
                    <div className="section-title newsletter-title">
                      <h2>Our <span>Newsletter</span></h2>
                    </div>
                    <div className="newsletter-form">
                      <form>
                        <div className="newsletter-form-grp">
                          <i className="far fa-envelope" />
                          <input type="email" placeholder="Enter your email..." />
                        </div>
                        <button>SUBSCRIBE <i className="fas fa-paper-plane" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* newsletter-area-end */}
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="footer-logo mb-35">
                    <a href="/"><img width="90px" src="assets/img/brand/brand_trans2.png" alt="BrandImg" /></a>
                  </div>
                  <div className="footer-text">
                    <p>Mat49Circle is your one-stop app for multiple games, including the beloved classic, Ludo, Rummy, Call-Break, Teen Patti.</p>
                    <div className="footer-contact">
                      <ul>
                        <li><i className="fas fa-map-marker-alt" /> <span>Address : </span>GopalPura, Jaipur, Rajasthan</li>
                        {/* <li><i className="fas fa-headphones" /> <span>Phone : </span>+91 9762 654 235</li> */}
                        <li><i className="fas fa-envelope-open" /><span>Email : </span>info@Mat49Circle.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Pages</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                      <li><Link  to="/#">Home</Link></li>
                      <li><Link  to="/about-us">About Us</Link></li>
                      <li><Link  to="/ludo">Games</Link></li>
                      <li><Link  to="/blogs">Blog</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Other Links</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                   
                      <li><Link to="/#">Terms &amp; Conditions</Link></li>
                      <li><Link  to="/#">Privacy Policy</Link></li>
                      <li><Link  to="/#">Refund Policy</Link></li>
                      {/* <li><Link  to="/#">Affiliate</Link></li> */}
                      {/* <li><Link  to="/#">FAQUse Cases</Link></li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Follow us</h5>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li><a  href="/#"><i className="fab fa-facebook-f" /></a></li>
                      <li><a  href="/#"><i className="fab fa-twitter" /></a></li>
                      <li><a  href="/#"><i className="fab fa-instagram" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Newsletter Sign Up</h5>
                  </div>
                  <div className="footer-newsletter">
                    <form >
                      <input type="text" placeholder="Enter your email" />
                      <button><i className="fas fa-rocket" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-fire"><img src="assets/img/images/footer_fire.png" alt="BrandImg" /></div>
          <div className="footer-fire footer-fire-right"><img src="assets/img/images/footer_fire.png" alt="BrandImg" /></div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © 2023 <a  href="/#">Mat49Circle</a> All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-none d-md-block">
                <div className="payment-method-img text-right">
                  <img src="assets/img/images/card_img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer;
