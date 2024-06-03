import React from 'react'

function AboutArea() {
  return (
	<section className="third-about-area third-about-bg pt-120 pb-90">
            <div className="container custom-container">
              <div className="row align-items-center">
                <div className="col-lg-6 order-0 order-lg-2">
                  <div className="third-about-img text-right position-relative">
                    {/* <img src="assets/img/images/third_about_img.png" className="main-img" alt="BrandImg" /> */}
                    <img height="443px" src="assets/img/Games/all7.jpeg" className="main-img" alt="BrandImg" />
                    {/* <img src="assets/img/images/third_about_img_shadow.png" className="shadow" alt="BrandImg" /> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="third-about-content">
                    <div className="third-title-style">
                      <h2>sr<span>club</span></h2>
                      <div className="inner">
                        <h2>One App multiple games</h2>
                        <h6 className="vertical-title">Mat49Circle app</h6>
                        <p>Mat49Circle is your one-stop app for multiple games, including the beloved classic, Ludo, Rummy, Call-Break, Teen Patti. Enjoy endless fun and entertainment with our diverse gaming options.</p>
                      </div>
                      <a href="/#" className="btn rotated-btn">Download Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-my-info-wrap pt-110">
                <div className="row">
                  <div className="col-12">
                    <div className="third-section-title text-center mb-75">
                      <h2>see <span>my</span> information</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6 col-sm-8">
                    <div className="my-info-box mb-30">
                      <div className="my-info-box-top">
                        <h6>Our certificates</h6>
                        <img src="assets/img/bg/my_info_box_hover.png" alt="BrandImg" className="info-box-top-hover" />
                      </div>
                      <div className="my-info-box-content">
                        <div className="mt-award">
                          <img src="assets/img/images/about_award.png" alt="BrandImg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-8">
                    <div className="my-info-box mb-30">
                      <div className="my-info-box-top">
                        <h6>join our team</h6>
                        <img src="assets/img/bg/my_info_box_hover.png" alt="BrandImg" className="info-box-top-hover" />
                      </div>
                      <div className="my-info-box-content">
                        <div className="my-info-social">
                          <ul>
                            <li><a href="/#"><i className="fab fa-facebook-square" /> Facebook</a></li>
                            <li><a href="/#"><i className="fab fa-twitter" /> Twitter</a></li>
                            <li><a href="/#"><i className="fab fa-instagram" /> Instagram</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-8">
                    <div className="my-info-box mb-30">
                      <div className="my-info-box-top">
                        <h6>Total downloads</h6>
                        <img src="assets/img/bg/my_info_box_hover.png" alt="BrandImg" className="info-box-top-hover" />
                      </div>
                      <div className="my-info-box-content">
                        <div className="my-clan-wrap">
                          <div className="clan-logo">
                            <img src="assets/img/images/clan_logo.png" alt="BrandImg" />
                          </div>
                          <div className="my-clan-info">
                            <h4><span>No</span> Downloads</h4>
                            <span>Launching Soon</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default AboutArea