import React from "react";
import "./Education.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div className="education-page">
      {/* Hero Banner */}
      <div className="education-header" style={{ backgroundImage: `url('/images/educationb.webp')` }}>
        <div className="container text-center">
          <h1 data-aos="fade-down">Empowering Digital Learning & Collaboration</h1>
          <p data-aos="fade-up" className="mt-2">
            Transform education with innovative digital solutions for institutions & learners.
          </p>
          {/* <Link to="/shedule" className="btn btn-primary mt-3">Schedule a Demo</Link> */}
          <a href="shedule" className="btn btn-primary mt-3 btn-animate">Schedule a Demo</a>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="container education-services my-4 py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="image-container text-center">
              <img
                src="/images/modern-education.jpg"
                alt="Digital Classroom"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          
          <div className="col-lg-6 py-4">
            <div className="service-section" data-aos="fade-up">
              <h2 className="section-title mb-3 px-4">
                <i className="bi bi-mortarboard me-2 "></i>
                Enhance Learning Experiences
              </h2>
              {/* <p className="lead mb-3 px-4">
                Facilitate seamless learning with smart, connected educational tools.
              </p> */}
              <div className="features-list px-4">
                <div className="feature-item">
                  <i className="bi bi-cloud-fill"></i>
                  <span>Cloud-based Learning Management Systems</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-laptop-fill"></i>
                  <span>Virtual Classrooms & Interactive Tools</span>
                </div>
                <div className="feature-item">
                  <i className="bi bi-people-fill"></i>
                  <span>Collaborative Learning Platforms</span>
                </div>
                {/* <div className="feature-item">
                  <i className="bi bi-graph-up-arrow"></i>
                  <span>Data-driven Insights & Analytics</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section py-3 px-4">
  <div className="container">
    <div className="testimonial-content text-center">
      <h2 className="mb-3">How Institutions Embrace Digital Learning</h2>
      <p className="testimonial-text mb-2">
        "Integrating technology into our curriculum has completely transformed how students learn and engage."
      </p>
      <p className="testimonial-author mb-1">
        - Principal, Leading Educational Institution
      </p>
    </div>
  </div>
</section>





      
      {/* Solutions Section */}
      <section className="education-solutions py-4">
        <div className="container text-center">
          <h2 data-aos="fade-up" className="mb-2">Explore Education Solutions</h2>
          <p data-aos="fade-up" className="mb-4 solution-subtitle">
            Comprehensive solutions for modern learning environments.
          </p>
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0" data-aos="fade-up">
              <div className="solution-card h-100">
                <div className="card-img-wrapper" style={{ backgroundImage: `url('/images/education.jpg')` }}>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="mb-2">E-learning Platforms</h5>
                  <p className="mb-0">Enable remote and self-paced learning for students worldwide.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
              <div className="solution-card h-100">
                <div className="card-img-wrapper" style={{ backgroundImage: `url('/images/education5.jpg')` }}>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="mb-2">Smart Classrooms</h5>
                  <p className="mb-0">Enhance interactive learning with digital tools and AI integration.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="solution-card h-100">
                <div className="card-img-wrapper" style={{ backgroundImage: `url('/images/education4.jpg')` }}>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="mb-2">Education Analytics</h5>
                  <p className="mb-0">Leverage data insights to track progress and optimize learning strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section py-4">
        <div className="container text-center">
          <h3 data-aos="fade-up" className="mb-2">Ready to Transform Your Educational Institution?</h3>
          <p data-aos="fade-up" className="mb-3">
            Let us help you implement innovative digital solutions for your learning environment.
          </p>
          <a href="/contactus" className="btn btn-primary btn-lg">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}

export default Education;