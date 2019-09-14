import React from 'react';
import ReactDOM from 'react-dom';

import aboutimg from './images/about_image.jpg'

class About extends React.Component {
  render() {
    return (
      <img src={aboutimg} />
    );
  } 
}

export default About;
