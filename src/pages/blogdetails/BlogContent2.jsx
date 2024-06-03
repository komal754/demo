import React from 'react'
import { Link } from 'react-router-dom'

function BlogContent2() {
  return (
	 <section className="blog-area primary-bg pt-120 pb-175">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-list-post blog-details-wrap">
                <div className="blog-list-post-content">
                  <div className="blog-list-post-tag mb-25">
                    <a href="/#">Card game</a>
                  </div>
                  <h2>HOW TO PLAY RUMMY</h2>
                  <div className="blog-meta">
                    <ul>
                      <li>bY <a href="/#">Mat49Circle</a> OCTOBER 29, 2023</li>
                    </ul>
                  </div>
                  <p>Rummy is a beloved card game known for its unique blend of strategy and skill. If you're new to the game or just need a refresher, let's take a step-by-step look at how to play Rummy. The game typically involves two to four players and uses a standard 52-card deck. The primary goal of Rummy is to form sets (groups of cards of the same rank but different suits) and runs (sequences of cards in the same suit). To start, each player is dealt a specific number of cards, and the remaining cards form the draw and discard piles. Players take turns drawing cards from either of these piles and discarding a card on their turn.</p>
                  <h4>Game Of King?</h4>
                  <p>To win, a player must form valid sets and runs and declare their hand. A valid declaration usually includes at least two sequences, with one of them being a pure sequence (a sequence without the use of wild cards or jokers). It's essential to understand the concept of pure and impure sequences for a successful declaration.</p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="blog-details-img">
                        <img src="assets/img/Games/casino3.jpeg" height="260px" alt="BrandImg" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="blog-details-img">
                        <img src="assets/img/Games/casino10.jpeg" height="260px" alt="BrandImg" />
                      </div>
                    </div>
                  </div>
                  <p>Rummy also involves strategic thinking and careful observation. Players aim to collect cards to create sets and runs while paying attention to their opponents' moves. Additionally, the game's scoring is based on the value of unmelded cards left in a player's hand, which adds another layer of strategy to the game.</p>
                  <blockquote>
                    “ The Timeless Charm of Rummy: A Game for All Ages ”
                  </blockquote>
                  <p>Rummy comes in various popular variations, such as Indian Rummy, Gin Rummy, and Canasta, each with its unique set of rules and strategies. In the digital age, you can enjoy Rummy online, where players from all over the world compete in virtual matches through dedicated apps and websites.</p>
                  <ul className="blog-details-list">
                    <li>Use a standard 52-card deck..</li>
                    <li>Deal ten cards to each player if there are four players; seven cards for three players, and for two players, ten cards each.</li>
                    <li>Place the remaining cards face down to create the draw pile and flip the top card to start the discard pile.</li>
                  </ul>
                  <p>Whether you're playing Rummy with friends and family or competing in online tournaments, the game offers an engaging and rewarding experience. It's a classic card game that continues to captivate players of all ages, making it an ideal choice for a fun and intellectually stimulating pastime. So, gather your deck, practice your skills, and delve into the exciting world of Rummy!</p>
                  <div className="blog-list-post-bottom">
                    <ul>
                      <li>
                        <i className="fas fa-tag" />
                        <span>tags :</span>
                        <a href="/#">Rummy</a>
                        <a href="/#">Mat49Circle</a>
                        <a href="/#">cardGames</a>
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

export default BlogContent2