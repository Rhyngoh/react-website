import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I love coding and everything <span className="highlight">JavaScript</span>.
            </p>
            <p>
              I constantly seek challenges and excited to learn emerging technologies.
            </p>
            <p>
              I am focused on the <span className="highlight">Front-end</span> with experience building applications using React, MongoDB, Express, and Node.js; Furthermore, I also have experience in cloud solutions such as AWS and Firebase.
            </p>
            <p>
              Outside of coding, I enjoy <span className="highlight">Board Games</span> and <span className="highlight">Baking</span> desserts! 
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
