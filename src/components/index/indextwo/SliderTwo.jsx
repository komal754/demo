import React from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function SliderTwo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          sidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // useEffect(()=>{
  // new WOW.WOW({
  //   boxClass: 'wow',
  // 	animateClass: 'animated',
  // 	offset: 0,
  // 	mobile: false,
  // 	live: true,
  //   loop:Infinity,
  // }).init();

  // },[])

  return (
    <section className="slider-area">
      <Slider className="slider-active" {...settings}>
        <div className="single-slider slider-bg slider-style-two slider-style-two-1">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content ">
                  <Fade up delay={0.4}>
                    <h6>Mat49Circle</h6>
                  </Fade>

                  <Fade up delay={0.5}>
                    <h2>
                      Play <span>Rummy</span> Matches
                    </h2>
                  </Fade>
                  <Fade up delay={0.5}>
                    <p>
                      Mat49Circle, our versatile app, features Rummy among its
                      engaging offerings. Explore the world of gaming with us
                      and enjoy Rummy and a host of other exciting activities
                      for endless amusement.
                    </p>
                  </Fade>

                  <Fade up delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      Download Now
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* <Slide right delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="BrandImg" />
            </div>
          </Slide> */}
          {/* <Slide left delay={0.4}>
            <div className="slider-img slider-img2 wow slideInRightS">
              <img src="assets/img/slider/slider_img02.png" alt="BrandImg" />
            </div>
          </Slide> */}
          {/* <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt="BrandImg"
              className="rotateme"
            />
          </div> */}
        </div>
        <div className="single-slider slider-bg slider-style-two slider-style-two-2">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content ">
                  <Fade up delay={0.4}>
                    <h6>Mat49Circle</h6>
                  </Fade>

                  <Fade up delay={0.5}>
                    <h2>
                    Play <span>Ludo</span> Matches
                    </h2>
                  </Fade>
                  <Fade up delay={0.5}>
                    <p>
                      Mat49Circle, our versatile app, features Ludo among its
                      engaging offerings. Explore the world of gaming with us
                      and enjoy Ludo and a host of other exciting activities
                      for endless amusement.
                    </p>
                  </Fade>

                  <Fade up delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      Download Now
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* <Slide right delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="BrandImg" />
            </div>
          </Slide>
          <Slide left delay={0.4}>
            <div className="slider-img slider-img2 wow slideInRightS">
              <img src="assets/img/slider/slider_img02.png" alt="BrandImg" />
            </div>
          </Slide> */}
          {/* <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt="BrandImg"
              className="rotateme"
            />
          </div> */}
        </div>
        <div className="single-slider slider-bg slider-style-two slider-style-two-4">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content ">
                  <Fade up delay={0.4}>
                    <h6>Mat49Circle</h6>
                  </Fade>

                  <Fade up delay={0.5}>
                    <h2>
                    Play <span>Teen</span> Patti
                    </h2>
                  </Fade>
                  <Fade up delay={0.5}>
                    <p>
                    Mat49Circle, our versatile app, features Teen Patti among its
                      engaging offerings. Explore the world of gaming with us
                      and enjoy Teen Patti and a host of other exciting activities
                      for endless amusement.
                    </p>
                  </Fade>

                  <Fade up delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      Download Now
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* <Slide right delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="BrandImg" />
            </div>
          </Slide>
          <Slide left delay={0.4}>
            <div className="slider-img slider-img2 wow slideInRightS">
              <img src="assets/img/slider/slider_img02.png" alt="BrandImg" />
            </div>
          </Slide> */}
          {/* <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt="BrandImg"
              className="rotateme"
            />
          </div> */}
        </div>
        <div className="single-slider slider-bg slider-style-two slider-style-two-3">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content ">
                  <Fade up delay={0.4}>
                    <h6>Mat49Circle</h6>
                  </Fade>

                  <Fade up delay={0.5}>
                    <h2>
                    Play <span>Call</span> Break
                    </h2>
                  </Fade>
                  <Fade up delay={0.5}>
                    <p>
                    Mat49Circle, our versatile app, features Call-Break among its
                      engaging offerings. Explore the world of gaming with us
                      and enjoy Call-Break and a host of other exciting activities
                      for endless amusement.
                    </p>
                  </Fade>

                  <Fade up delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      Download Now
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* <Slide right delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="BrandImg" />
            </div>
          </Slide>
          <Slide left delay={0.4}>
            <div className="slider-img slider-img2 wow slideInRightS">
              <img src="assets/img/slider/slider_img02.png" alt="BrandImg" />
            </div>
          </Slide> */}
          {/* <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt="BrandImg"
              className="rotateme"
            />
          </div> */}
        </div>
        
        <div className="single-slider slider-bg slider-style-two slider-style-two-5">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content ">
                  <Fade up delay={0.4}>
                    <h6>Mat49Circle</h6>
                  </Fade>

                  <Fade up delay={0.5}>
                    <h2>
                    Mat49 <span>Circle</span> app
                    </h2>
                  </Fade>
                  <Fade up delay={0.5}>
                    <p>
                    Mat49Circle is your one-stop app for multiple games, including the beloved classic, Ludo, Rummy, Call-Break, Teen Patti. Enjoy endless fun and entertainment with our diverse gaming options.
                   
                    </p>
                  </Fade>

                  <Fade up delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      Download Now
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* <Slide right delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="BrandImg" />
            </div>
          </Slide>
          <Slide left delay={0.4}>
            <div className="slider-img slider-img2 wow slideInRightS">
              <img src="assets/img/slider/slider_img02.png" alt="BrandImg" />
            </div>
          </Slide> */}
          {/* <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt="BrandImg"
              className="rotateme"
            />
          </div> */}
        </div>
      </Slider>
    </section>
  );
}

export default SliderTwo;
