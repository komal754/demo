import React from 'react';

function ContactArea() {

  return (
	<section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-6">
              <div id="contact-map" />
            </div> */}
            <div className="col-lg-6 pl-45">
              <div className="section-title title-style-three mb-20">
                <h2>CONTACT <span>US</span></h2>
              </div>
              <div className="contact-info-list mb-40">
                <ul>
                  <li><i className="fas fa-map-marker-alt" />GopalPura, Jaipur, Rajasthan</li>
                  <li><i className="fas fa-envelope" />info@Mat49Circle.com</li>
                </ul>
              </div>
              <div className="contact-form">
                <form>
                  <textarea name="message" id="message" placeholder="Write Message..." defaultValue={""} />
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Mail" />
                    </div>
                  </div>
                  <button>SUBMIT MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactArea