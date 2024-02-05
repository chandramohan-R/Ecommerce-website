import React from 'react';
import "./Footer.css"

const AmazonFooter = () => {
  return (
<footer className="ecommerce-footer">
  <div className="footer-section">
    <h4>Customer Service</h4>
    <ul>
      <li>Contact Us</li>
      <li>Shipping Information</li>
      <li>Returns & Exchanges</li>
      <li>FAQs</li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>Shop With Us</h4>
    <ul>
      <li>Search Products</li>
      <li>Latest Deals</li>
      <li>Gift Cards</li>
      <li>Customer Reviews</li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>Information</h4>
    <ul>
      <li>About Us</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
      <li>Blog</li>
    </ul>
  </div>
  <div className="footer-section">
    <h4>Connect With Us</h4>
    <ul>
      <li>Facebook</li>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>YouTube</li>
    </ul>
  </div>
</footer>


  );
};

export default AmazonFooter;
