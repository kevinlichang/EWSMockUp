import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <div className="col-12 col-sm-6">
      <h2>
        Welcome!
      </h2>
      <p>
        Hi! I'm Stephen Ko, or SKO for short. Thanks for stopping by! I am an award-winning content creator and I have produced many films around the world.  I'm currently based in NYC, but I'm always ready for the next adventure no matter where it may be.
      </p>
      <p>
        I specialize in creating travel, documentary, and lifestyle video content, and I am always eager to take on new projects. If you want to know the complete story on how I got started,
        <Link to="/who-is-sko"><u>click here</u></Link>. 
      </p>
      <p>
        I have a passion for visual storytelling, and I've been fortunate enough to be able to work with many brands that allow me to utilize my creative skill set. If you like my content, please don't hesitate to reach out to me. I'm sure we can create something awesome together. 
      </p>
    </div>
  </div>
)

export default About;