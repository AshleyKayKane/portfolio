import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            {/* <div className="ten columns">
              <p className="lead">{message}</p>
            </div> */}
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={2000}>
            <div className="eight columns">
              <form action="sendEmail.php" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="name"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="10"
                      rows="5"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent. I will get back with you very soon!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={2000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact contact-info">
                <h4> Contact Information</h4>
                <br />
                <p className="address">
                  <h3> <i className="fa fa-user fa-lg"></i> &nbsp; {name}</h3>
                  <br />
                  <h3> <i className="fa fa-map-marker fa-lg"></i> &nbsp; {city}, {state} </h3>
                  <br />
                  <h3><i className="fa fa-envelope"></i> &nbsp; <a href="mailto:ashley@akaydesign.com">Ashley@akaydesign.com</a> </h3>
                </p>
              </div>

              
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
