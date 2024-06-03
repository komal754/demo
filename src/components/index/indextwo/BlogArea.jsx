import React from "react";
import { Link } from "react-router-dom";

function BlogArea() {
  return (
    <section className="blog-area pt-115 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title title-style-three text-center mb-70">
              <h2>
                Latest News <span>Articles</span>
              </h2>
              <p>
                Compete with 100 players on a remote island for winner takes
                showdown known issue where certain skin strategic
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-post blog-style-two mb-50">
              <div className="blog-thumb mb-30">
                <Link to="/blog_2">
                  <img
                    style={{ height: "282px" }}
                    src="assets/img/Games/casino_man2.jpeg"
                    alt="BrandImg"
                  />
                </Link>
              </div>
              <div className="blog-post-content">
                <h4>
                  <Link to="/blog_2">How to Play Rummy</Link>
                </h4>
                <div className="blog-meta">
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      Nov 5, 2023
                    </li>
                    <li>
                      <i className="fas fa-tag" />
                      <Link to="/blogs">Mobile Gaming</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Rummy, a popular card game, combines strategy and skill.
                  Players aim to form sets or runs of cards while discarding
                  unwanted ones. It's a mentally stimulating game that
                  challenges [...]
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-post blog-style-two mb-50">
              <div className="blog-thumb mb-30">
                <Link to="/blog_3">
                  <img
                    style={{ height: "282px" }}
                    src="assets/img/Games/all2_spin.jpeg"
                    alt="BrandImg"
                  />
                </Link>
              </div>
              <div className="blog-post-content">
                <h4>
                  <Link to="/blog_3">How to Get Rewards by Daily Spins</Link>
                </h4>
                <div className="blog-meta">
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      Nov 12, 2023
                    </li>
                    <li>
                      <i className="fas fa-tag" />
                      <Link to="/blogs">Refer&Earn</Link>
                    </li>
                  </ul>
                </div>
                <p>
                  Join us daily for exciting opportunities to spin and win, and
                  take advantage of our special offers and deals. It's a chance
                  you won't want to miss! [...]
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-post blog-style-two mb-50">
              <div className="blog-thumb mb-30">
                <Link to="/blog_3">
                  <img
                    style={{ height: "282px" }}
                    src="assets/img/Games/all1.jpeg"
                    alt="BrandImg"
                  />
                </Link>
              </div>
              <div className="blog-post-content">
                <h4>
                  <Link to="/blog_3">How to Download Mat49Circle App</Link>
                </h4>
                <div className="blog-meta">
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      Nov 14, 2023
                    </li>
                    <li>
                      <i className="fas fa-tag" />
                      <Link to="/blogs">App Detail</Link>
                    </li>
                  </ul>
                </div>
                <p>
                This game is going to launch soon and you can download this game from this webiste [...]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogArea;
