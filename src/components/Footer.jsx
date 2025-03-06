import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-column logo-column">
          <img
            src="/images/logop.png"
            alt="Elnfratech Systems India Logo"
            className="footer-logo"
          />
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon linkedin">in</span>
            </a>
            
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3 onClick={() => setShowLinks(!showLinks)} className="footer-heading text-start text-dark fw-bold">
            Useful Links
          </h3>
          <ul className={showLinks ? "footer-list show" : "footer-list"}>
            <li><a href="/dashboard" className="footer-link text-dark">Dashboard</a></li>
            <li><a href="/contactus" className="footer-link text-dark">Contact Us</a></li>
            <li><a href="/features" className="footer-link text-dark">Features</a></li>
            <li><a href="/services" className="footer-link text-dark">Services</a></li>
            <li><a href="/faq" className="footer-link text-dark">FAQs</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-column">
          <h3 onClick={() => setShowServices(!showServices)} className="footer-heading text-start text-dark fw-bold">
            Our Services
          </h3>
          <ul className={showServices ? "footer-list show" : "footer-list"}>
            <li><a href="/healthcare" className="footer-link text-dark ">Health Care</a></li>
            <li><a href="/retailpage" className="footer-link text-dark">Retail Industry</a></li>
            <li><a href="/publicsector" className="footer-link text-dark">Public Sector</a></li>
            <li><a href="/lifescience" className="footer-link text-dark">Life Science</a></li>
            <li><a href="/education" className="footer-link text-dark">Education</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright  d-flex flex-column align-items-center text-center">
    <p className="mt-4 mb-1 text-dark ">Privacy Policy</p>
    <p className="mt-2 mb-2 text-dark ">© Einfratech Systems India 2023. All rights reserved</p>
</div>

    </footer>
  );
};

export default Footer;