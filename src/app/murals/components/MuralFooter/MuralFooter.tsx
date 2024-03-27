import React, { useState } from 'react';
import './MuralFooter.module.scss'; // Make sure the SCSS file name matches

function MuralFooter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your subscription logic here
    console.log(`Subscribing email: ${email}`);
    setEmail(''); // Resetting the input field after subscribe
  };

  return (
    <footer className="mural-footer">
      <div className="social-media-links">
        {/* Placeholder for social media links */}
        <a href="#" className="social-link">Facebook</a>
        <a href="#" className="social-link">Twitter</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
      <form className="newsletter-subscription" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
      <div className="copyright">
        © 2024 SAVE OUR SALMON. All rights reserved.
      </div>
    </footer>
  );
}

export default MuralFooter;