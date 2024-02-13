import React from 'react';
import './MuralHero.scss';

// placeholder sections for the MuralHero component, subject to change in the future based on the client.
// placeholders at left box and right box, also with the banner text.
const MuralHero: React.FC = () => {
  return (
    <section className="mural-hero">
      <div className="mural-hero-banner">
        <img src="/path-to-your-banner-image.jpg" alt="Scenic view of the campaign" />
        <div className="banner-text">
          <h1>Protect Our Waters</h1>
          <p>Join the effort to save our precious aquatic life.</p>
        </div>
      </div>
      <div className="mural-sub-content">
        <div className="mural-left-box">
          <h2>Our Mission</h2>
          <p>To safeguard the biodiversity of McAleer Creek by promoting sustainable practices.</p>
          <button>Learn More</button>
        </div>
        <div className="mural-right-box">
          <h2>Get Involved</h2>
          <p>Discover how you can make a difference and help in our conservation efforts.</p>
          <button>Take Action</button>
        </div>
      </div>
    </section>
  );
};

export default MuralHero;
