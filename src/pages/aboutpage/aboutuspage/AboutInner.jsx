import React,{ useEffect } from 'react'
import WOW from "wowjs";

function AboutInner() {
  useEffect(()=>{
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop:Infinity,
    }).init();
  
    },[])
  return (
	<section className="inner-about-area fix">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
              <div className="inner-about-img">
                <img src="assets/img/images/inner_about_01_1.png" className="wow fadeInRight" data-wow-delay=".3s" alt="BrandImg" />
                <img src="assets/img/images/inner_about_02_3.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="BrandImg" />
                <img src="assets/img/images/inner_about_01_3.png" className="wow fadeInUp" data-wow-delay=".6s" alt="BrandImg" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="section-title title-style-three mb-25">
                <h2>released <span>GAMES</span></h2>
              </div>
              <div className="inner-about-content">
                <h5>Mat49Circle One App Multiple Game</h5>
                <p>Mat49Circle is a multifaceted gaming app that caters to players of all levels, offering a variety of classic games such as Ludo, Rummy, Teen Patti, and Call Break.</p>
                <p> At Mat49Circle, we turn your gaming skills into real money, offering a unique blend of fun and rewards.</p>
                <a href="/#" className="btn btn-style-two">Download Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-about-shape"><img src="assets/img/images/medale_shape.png" alt="BrandImg" /></div>
      </section>
  )
}

export default AboutInner