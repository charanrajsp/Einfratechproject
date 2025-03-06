import React from 'react';
import './AboutUs.css';
import Counter from '../components/Counter'; // Adjust the import path as needed

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-overlay">
        <div className="about-us-content-container">
          <header className="about-us-header">
            <h1>Who We Are</h1>
          </header>
          <main className="about-us-content">
            <p>
              We're a company built on a clear set of values. Our goal is to empower you to do your best work in the most efficient way possible. That shines through in everything we do, from innovation to delivery, we strive to deliver a solution that makes you proud of the work that you do.
            </p>
          </main>
        </div>
      </div>
      <div className="stats-bar">
        <Counter />
      </div>
      {/* Our Worldwide Offices Section */}
      <div className="offices-section " >
        <div className="offices-header-container " >
          <h2 className="offices-header">Our Worldwide Offices</h2>
        </div>
        {/* style={{marginLeft:"85px"}} */}
        <div className="offices-grid" >
          <div className="office-card" >
            <img
              src="./images/usa.jpg" // Your U.S. office image path
              alt="United States Office"
              className="office-image"
            />
            <div className="office-details">
              <div className="office-company">Elnfratech Systems India</div>
              <div className="office-country">United States</div>
            </div>
          </div>
          <div className="office-card">
            <img
              src="./images/uk.jpg" // Your U.K. office image path
              alt="United Kingdom Office"
              className="office-image"
            />
            <div className="office-details">
              <div className="office-company">Elnfratech Systems India</div>
              <div className="office-country">United Kingdom</div>
            </div>
          </div>
          <div className="office-card">
            <img
              src="./images/india.jpg" // Your India office image path
              alt="India Office"
              className="office-image"
            />
            <div className="office-details">
              <div className="office-company">Elnfratech Systems India</div>
              <div className="office-country">India</div>
            </div>
          </div>
          <div className="office-card">
            <img
              src="./images/canada1.jpg" // Your Canada office image path
              alt="Canada Office"
              className="office-image"
            />
            <div className="office-details">
              <div className="office-company">Elnfratech Systems India</div>
              <div className="office-country">Canada</div>
            </div>
          </div>
          <div className="office-card">
            <img
              src="./images/Aus.jpg" // Your Australia office image path
              alt="Australia Office"
              className="office-image"
            />
            <div className="office-details">
              <div className="office-company">Elnfratech Systems India</div>
              <div className="office-country">Australia</div>
            </div>
          </div>
          <div className="office-card">
            <img
              src="./images/germany.jpg" // Your Germany office image path
              alt="Germany Office"
              className="office-image"
            />
            <div className="office-details">
              <div className="office-company">Elnfratech Systems India</div>
              <div className="office-country">Germany</div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Investors Section */}
      <div className="investors-section">
        <h2 className="investors-header">Our Investors</h2>
        <div className="investors-grid">
          <img
            src="/images/insight.jpeg" // Replace with your actual Insight Partners logo path
            alt="Insight Partners"
            className="investor-logo"
          />
          <img
            src="/images/kaiser logo.png" // Replace with your actual Kaiser Permanente Ventures logo path
            alt="Kaiser Permanente Ventures"
            className="investor-logo"
          />
          <img
            src="/images/nea.png" // Replace with your actual NEA logo path
            alt="NEA"
            className="investor-logo"
          />
          <img
            src="/images/re.png" // Replace with your actual Revelation Partners logo path
            alt="Revelation Partners"
            className="investor-logo"
          />
          <img
            src="/images/service.png" // Replace with your actual ServiceNow logo path
            alt="ServiceNow"
            className="investor-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;