import React from 'react'
import { Link } from 'react-router-dom'

function BlogContent1() {
  return (
	 <section className="blog-area primary-bg pt-120 pb-175">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-list-post blog-details-wrap">
                <div className="blog-list-post-content">
                  <div className="blog-list-post-tag mb-25">
                    <a href="/#">Cardboard Game</a>
                  </div>
                  <h2>WELCOME PLAY FOR LUDO GAME</h2>
                  <div className="blog-meta">
                    <ul>
                      <li>bY <a href="/#">Mat49Circle</a> OCTOBER 19, 2023</li>
                    </ul>
                  </div>
                  <p>Ludo, a game that has been enjoyed by people of all ages for generations, continues to capture our hearts with its simplicity, excitement, and ability to bring people together. In a world of ever-evolving technology and complex games, Ludo stands as a timeless classic that transcends age and culture.</p>
                  <h4>Game Of King?</h4>
                  <p>Ludo, often referred to as the "Game of Kings," traces its origins back to ancient India. Its simplicity is one of its greatest strengths. The game can be enjoyed by children and adults alike, making it a perfect choice for family gatherings, friendly get-togethers, and even casual social events.</p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="blog-details-img">
                        <img src="assets/img/Games/ludo.png" height="260px" alt="BrandImg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="blog-details-img">
                        <img src="assets/img/Games/casino13.jpeg" height="260px" alt="BrandImg" />
                      </div>
                    </div>
                  </div>
                  <p>The game is easy to learn, involving a simple race of tokens across the board based on the roll of the dice. But within that simplicity lies a world of strategy, anticipation, and social interaction. Players must make calculated moves, deciding when to advance their tokens and when to bide their time, all while trying to thwart their opponents. This blend of luck and strategy keeps players engaged and entertained.</p>
                  <blockquote>
                    “ The Timeless Charm of Ludo: A Game for All Ages ”
                  </blockquote>
                  <p>Ludo has also made a seamless transition into the digital age. In an era of smartphones and online gaming, Ludo apps have gained tremendous popularity. These apps allow players to enjoy the game with friends and family, no matter where they are. The virtual version of Ludo retains the same charm and excitement, offering a wonderful opportunity for social interaction.</p>
                  <ul className="blog-details-list">
                    <li>2-4 players, 4 tokens.</li>
                    <li>Mix of strategy and luck.</li>
                    <li>Competitive tournaments.</li>
                  </ul>
                  <p>In the digital age, Ludo has made a seamless transition to the online world. Many mobile apps and websites now offer Ludo games, allowing players to enjoy the game virtually with friends and strangers alike.</p>
                  <div className="blog-list-post-bottom">
                    <ul>
                      <li>
                        <i className="fas fa-tag" />
                        <span>tags :</span>
                        <a href="/#">ludo</a>
                        <a href="/#">Mat49Circle</a>
                        <a href="/#">carboard</a>
                      </li>
                      <li>
                        <span>SHARE :</span>
                        <div className="blog-post-share">
                        <a
                        href="https://api.whatsapp.com/send?text=https%3A%2F%2FMat49Circle.com%2Fblog_1"
                        target="_blank"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                      <a
                        href="https://www.facebook.com/sharer.php?u=https://Mat49Circle.com/blog_1"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="blog-comment mb-75">
                <div className="sidebar-widget-title blog-details-title mb-35">
                  <h4>COMMENTS <span>(3)</span></h4>
                </div>
                <ul>
                  <li>
                    <div className="comment-avatar-thumb">
                      <img src="assets/img/blog/comment_thumb01.jpg" alt="BrandImg" />
                    </div>
                    <div className="comment-text">
                      <div className="comment-avatar-info">
                        <h4><a href="/#">Andreson</a><span className="comment-time">Nov 20, 2023, 7:06 am</span></h4>
                        <div className="comment-reply">
                          <a href="/#"><i className="fas fa-reply" /></a>
                        </div>
                      </div>
                      <p>How to download this game and is it safe to play.</p>
                    </div>
                  </li>
                  <li className="comment-children">
                    <div className="comment-avatar-thumb">
                      <img src="assets/img/blog/comment_thumb02.jpg" alt="BrandImg" />
                    </div>
                    <div className="comment-text">
                      <div className="comment-avatar-info">
                        <h4><a href="/#">aretha wilson</a><span className="comment-time">Nov 21, 2023, 12:06 am</span></h4>
                        <div className="comment-reply">
                          <a href="/#"><i className="fas fa-reply" /></a>
                        </div>
                      </div>
                      <p>This game is going to launch soon and you can download this game from this webiste and Yes, it is totally safe</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="comment-reply-box">
                <div className="sidebar-widget-title blog-details-title mb-35">
                  <h4>LEAVE A <span>COMMENT</span></h4>
                </div>
                <form  className="comment-form">
                  <textarea name="message" id="comment-message" placeholder="Your Comment" defaultValue={""} />
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name*" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Email*" />
                    </div>
                  </div>
                  <div className="comment-check-box mb-25">
                    <input type="checkbox" id="comment-check" />
                    <label htmlFor="comment-check">Save my name and email in this browser for the next time I comment.</label>
                  </div>
                  <button className="btn btn-style-two">Submit</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
            <aside className="blog-sidebar">
              <div className="widget mb-45">
                <div className="sidebar-about">
                  <div className="sidebar-about-thumb">
                    <img src="assets/img/blog/sidebar_about_thumb.jpg" alt="BrandImg" />
                  </div>
                  <div className="sidebar-widget-title mb-15">
                    <h4>
                      ABOUT THE <span>AUTHOR</span>
                    </h4>
                  </div>
                  <div className="sidebar-about-content">
                    <p>Mat49Circle: One app Multiple Games</p>
                  </div>
                </div>
              </div>
              <div className="widget mb-45">
                <div className="sidebar-search">
                  <form action="/#">
                    <input type="text" placeholder="Type and hit enter..." />
                    <button>
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="widget mb-45">
                <div className="sidebar-widget-title mb-25">
                  <h4>
                    category <span>post</span>
                  </h4>
                </div>
                <div className="sidebar-cat">
                  <ul>
                    <li>
                      <Link to="/blogs">Card Game ( 01 )</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Cardboard ( 01 )</Link>
                    </li>
                    <li>
                      <Link to="/blogs">App Detail ( 01 )</Link>
                    </li>
                    {/* <li><a href="/#">zombieland ( 07 )</a></li>
                      <li><a href="/#">shooting ( 02 )</a></li> */}
                  </ul>
                </div>
              </div>
              <div className="widget mb-45">
                <div className="sidebar-widget-title mb-25">
                  <h4>
                    Recent <span>post</span>
                  </h4>
                </div>
                <div className="rc-post-list">
                  <ul>
                    <li>
                      <div className="rc-post-thumb">
                        <Link to="/bog_01">
                          <img
                            src="assets/img/Games/casino13.jpeg"
                            width="90px"
                            height="70px"
                            alt="BrandImg"
                          />
                        </Link>
                      </div>
                      <div className="rc-post-content">
                        <h5>
                          <Link to="/bog_01">Ludo Game</Link>
                        </h5>
                        <span>OCTOBER 19, 2023</span>
                      </div>
                    </li>
                    <li>
                      <div className="rc-post-thumb">
                        <Link to="/blog_02">
                          <img
                            src="assets/img/Games/casino9.jpeg"
                            width="90px"
                            height="70px"
                            alt="BrandImg"
                          />
                        </Link>
                      </div>
                      <div className="rc-post-content">
                        <h5>
                          <Link to="/blog_02">Rummy</Link>
                        </h5>
                        <span>OCTOBER 29, 2023</span>
                      </div>
                    </li>
                    <li>
                      <div className="rc-post-thumb">
                        <Link to="/blog_03">
                          <img
                            src="assets/img/Games/casino.webp"
                            width="90px"
                            height="70px"
                            alt="BrandImg"
                          />
                        </Link>
                      </div>
                      <div className="rc-post-content">
                        <h5>
                          <Link to="/blog_03">Mat49Circle App</Link>
                        </h5>
                        <span>December 19, 2023</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="widget mb-45">
                  <div className="sidebar-widget-title mb-25">
                    <h4>TRENDING <span>MATCHES</span></h4>
                  </div>
                  <div className="sidebar-trending-match">
                    <ul>
                      <li>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb01.png" alt="BrandImg" /></a>
                        </div>
                        <div className="sidebar-trend-match-action">
                          <span>0</span> <span>-</span> <span>3</span>
                        </div>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb02.png" alt="BrandImg" /></a>
                        </div>
                        <div className="sidebar-trend-match-date">
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb03.png" alt="BrandImg" /></a>
                        </div>
                        <div className="sidebar-trend-match-action">
                          <span>0</span> <span>-</span> <span>7</span>
                        </div>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb04.png" alt="BrandImg" /></a>
                        </div>
                        <div className="sidebar-trend-match-date">
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb05.png" alt="BrandImg" /></a>
                        </div>
                        <div className="sidebar-trend-match-action">
                          <span>0</span> <span>-</span> <span>3</span>
                        </div>
                        <div className="sidebar-trend-match-thumb">
                          <a href="/#"><img src="assets/img/blog/trend_match_thumb06.png" alt="BrandImg" /></a>
                        </div>
                        <div className="sidebar-trend-match-date">
                          <span>OCTOBER 19, 2022</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div> */}
              <div className="widget">
                <div className="sidebar-widget-title mb-25">
                  <h4>
                    TAGS <span>post</span>
                  </h4>
                </div>
                <div className="sidebar-tag-list">
                  <ul>
                    <li>
                      <a href="/#">ludo</a>
                    </li>
                    <li>
                      <a href="/#">rummy </a>
                    </li>
                    <li>
                      <a href="/#">cardboard</a>
                    </li>
                    <li>
                      <a href="/#">teenPatti</a>
                    </li>
                    <li>
                      <a href="/#">callBreak</a>
                    </li>
                    <li>
                      <a href="/#">Mat49Circle</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
          </div>
        </div>
      </section>
  )
}

export default BlogContent1