import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import Rummy1 from "../../../assets/img/Games/Rummy1.png"
import Rummy1_1 from "../../../assets/img/Games/Rummy1_1.png"
import ludo1 from "../../../assets/img/Games/ludo3.jpeg"
import ludo1_1 from "../../../assets/img/Games/ludo1_1.png"
import teenPatti1 from "../../../assets/img/Games/teenPatti1.png"
import teenPatti1_1 from "../../../assets/img/Games/teenPatti1_1.png"
import callBreak1 from "../../../assets/img/Games/callBreak1.png"
import callBreak1_1 from "../../../assets/img/Games/callBreak1_1.png"

function NewGamesArea() {
 
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  let slider1,slider2;


  useEffect(function(){
    setNav1(slider1)
    setNav2(slider2)
  },[slider1,slider2])
   
  
  return (
  
	<section className="released-games-area gray-bg pt-115 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-20">
                    <h2>released <span>GAMES</span></h2>
                    <p>Compete with 100 players on a remote island for winner takes showdown
                      known issue where certain skin strategic</p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12">
                  <Slider className="released-game-active"
                  asNavFor={nav2}
                  ref={slider => (slider1 = slider)}
                  arrows={false}
                  >
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          {/* <img src="assets/img/images/released_game_img01.jpg" alt="BrandImg" /> */}
                          <img className='released_games_img'   src={Rummy1} alt="BrandImg" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Rummy <span>Multiplayer</span> </h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Mobile Gaming</li>
                              {/* <li><span>Model :</span>Compete 100 players</li> */}
                              <li><span>Controller :</span>Mobile Only</li>
                            </ul>
                          </div>
                          <p>Compete with your opponents and win Real Cash in your bank account directly</p>
                          <Link to="/#" className="btn btn-style-two">Launching Soon</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img  className='released_games_img' src={ludo1} alt="BrandImg" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Ludo <span>Online</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Mobile Gaming</li>
                              <li><span>Types :</span>Classic, Popular</li>
                              <li><span>Controller :</span>Mobile Only</li>
                            </ul>
                          </div>
                          <p>In the world of mobile gaming, Ludo stands as a classic and popular choice for players of all ages.</p>
                          <Link to="/#" className="btn btn-style-two">Launching Soon</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img  className='released_games_img' src={teenPatti1} alt="BrandImg" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Teen Patti <span>Online</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Mobile Gaming</li>
                              {/* <li><span>Model :</span>Compete 2 to 4 players</li> */}
                              <li><span>Controller :</span>Mobile Only</li>
                            </ul>
                          </div>
                          <p>Compete with multiplayer players online and win Real cash in your bank account</p>
                          <Link to="/#" className="btn btn-style-two">Launching Soon</Link>
                        </div>
                      </div>
                    </div>
                    <div className="released-game-carousel">
                      <div className="released-game-item">
                        <div className="released-game-item-bg" />
                        <div className="released-game-img">
                          <img  className='released_games_img'   src={callBreak1} alt="BrandImg" />
                        </div>
                        <div className="released-game-content">
                          <div className="released-game-rating">
                            <h5>Rating :</h5>
                            <div className="released-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <h4>Call <span>Break</span></h4>
                          <div className="released-game-list mb-15">
                            <ul>
                              <li><span>Category :</span>Mobile Gaming</li>
                              {/* <li><span>Model :</span>Compete 100 players</li> */}
                              <li><span>Controller :</span>Mobile Only</li>
                            </ul>
                          </div>
                          <p>Compete with multiplayer players online and win Real cash in your bank account</p>
                          <Link to="/#" className="btn btn-style-two">Launching Soon</Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div className="col-xl-4 col-lg-12">
                  <Slider className="released-game-nav" 
                  asNavFor={nav1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  ref={slider => (slider2 = slider)} slidesToShow={3} vertical={true} arrows={false} >
                    <div className="released-game-nav-item">
                      <img src={Rummy1_1} alt="BrandImg" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src={ludo1_1} alt="BrandImg" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src={teenPatti1_1} alt="BrandImg" />
                    </div>
                    <div className="released-game-nav-item">
                      <img src={callBreak1_1} alt="BrandImg" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
  )
}

export default NewGamesArea