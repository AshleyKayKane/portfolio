import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;


      return (
        <div key={id++} className="columns portfolio-item">
          
          <div className="item-wrap">
           
              <div className=" overlay"></div>
              <img alt={projects.title} src={projectImage}/>
              <div className="overlay-port">
                <h3 className="caption">{projects.category}  </h3> 
                <div className="row">
                <div className="column">
                    <a href={projects.url}  target="_blank">
                      <div className="button btn project-btn"><i className="fa fa-globe fa-lg"></i></div>
                    </a>
                  </div>
                  <div className="column">
                      <a href={projects.code}  target="_blank">
                        <div className="button btn github-btn"><i className="fa fa-github fa-lg"></i></div>
                      </a>
                  </div>
                </div>
              </div>
            <div className="title">{projects.title}</div>
            <div className="portfolio-description">
            <h3 className="caption">{projects.category}  </h3> 
                <div className="row">
                  <a href={projects.url}  target="_blank">
                    <div className="column button btn project-btn"><i className="fa fa-globe fa-lg"></i></div>
                  </a>
                  <a href={projects.code}  target="_blank">
                    <div className="column button btn github-btn"><i className="fa fa-github fa-lg"></i></div>
                  </a>
                </div>
            </div>
           
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-halves cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
