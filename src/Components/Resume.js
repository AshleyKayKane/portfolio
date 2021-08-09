import React, { Component } from "react";
import Slide from "react-reveal";


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
            <span>&bull;</span><span className="award">{education.description}</span>
          </p>
        </div>
      );
    });

    // const work = this.props.data.work.map(function (work) {
    //   return (
    //     <div key={work.company}>
    //       <h3>{work.company}</h3>
    //       <p className="info">
    //         {work.title}
    //         <span>&bull;</span> <em className="date">{work.years}</em>
    //       </p>
    //       <p>{work.description}</p>
    //     </div>
    //   );
    // });

    // const skills = this.props.data.skills.map((skills) => {
      
    //   return (
    //     <div key={skills.type} className="columns skill-item">
    //       <div className="item-wrap">
    //         <h3>{skills.type}</h3>
    //        <ul>
    //        <li>{skills.name}</li>
    //        </ul>
    //       </div>
    //     </div>
    //   );
    // });

    return (
      <section id="resume">

 
       <Slide left duration={1300} >
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div
                id="skill-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                
                <div className="columns skill-item">
                  <div className="item-wrap">
                    <h3>Frontend</h3>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SCSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Bootstrap</li>
                      <li>Familiar with jQuery</li>

                    </ul>
                  </div>
                </div>
                <div className="columns skill-item">
                  <div className="item-wrap">
                    <h3>Backend</h3>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </div>
                </div>
                <div className="columns skill-item">
                  <div className="item-wrap">
                    <h3>Tools</h3>
                    <ul>
                      <li>Adobe XD</li>
                      <li>Git</li>
                      <li>VS Code</li>
                      <li>WordPress</li>
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </Slide>

        {/* <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide> */}


        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
