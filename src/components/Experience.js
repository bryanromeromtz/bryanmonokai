import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <div className="header__wrapper">
          <h1 className="header__header">
            Experience
          </h1>
        </div>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <p>
              After having learned the 3 most fundamental technologies of web development,
              I started to learn Python, which helped me a lot by developing my logic better
              and learning more about programming, I learned Git version control along with
              GitHub, Sass, nodeJS, React , mySQL, MongoDB and today I have the necessary knowledge
              to develop and maintain any full-stack application that concentrates on MERN technologies.
            </p>
          </div>
        </div>


        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-2020</h3>
            <p>
              I started my career as a full-stack developer at&nbsp;
              <a className="link-bottega" href="https://inmob.devcamp.com/" target="_blank" rel="noreferrer">
                bottega devcamp,
              </a>&nbsp;&nbsp;&nbsp;
              in the first year I learned all the architecture of html5, css3 and javascript.
              Realization of several projects, including UI / UX design,
              which plays a fundamental role in the success of any Digital Marketing strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
