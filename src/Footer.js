import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Contact Us</h3>
        <p>Email: amz@gmail.com</p>
        <p>Phone: +91 9876543211</p>
        <p>Address: 123 Main St, Covai City, India</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
      <div>
        <p>
            @Copyright2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
