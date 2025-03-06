// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
// import './Footer.css';
// import ScrollToTop from "./ScrollToTop";
// import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

// function Footer() {
//   return (
//     <footer id="footer" className="footer position-relative py-5">
//       <div className="container">
//         <div className="row g-4">
//         <div className="col-lg-4 col-md-6 text-start">
//   <a href="index.html" className="d-flex align-items-start text-decoration-none mb-3">
//     <span className="h3 mb-0" style={{ color: "#3D4348" }}>Einfratech</span>
//   </a>
//   <div className="pt-3">
//     <p className="mb-1">Millennium Business Park</p>
//     <p className="mb-1">IT Park, MIDC Industrial Area, Navi Mumbai, Maharashtra 400710</p>
//     <p className="mt-3"><strong>Phone:</strong> <span>+91 892.904.2908</span></p>
//     <p><strong>Email:</strong> <a href="mailto:contact@einfratechsys.com">contact@einfratechsys.com</a></p>
//   </div>

//   <div className="d-flex gap-3 mt-4 social-links align-items-start">
//     <a href="#" className="social-icon">
//       <i className="bi bi-twitter-x"></i>
//     </a>
//     <a href="#" className="social-icon">
//       <i className="bi bi-facebook"></i>
//     </a>
//     <a href="#" className="social-icon">
//       <i className="bi bi-instagram"></i>
//     </a>
//     <a href="#" className="social-icon">
//       <i className="bi bi-linkedin"></i>
//     </a>
//   </div>
// </div>



//           <div className="col-lg-2 col-md-3">
//             <h4 className="mb-3" style={{ color: "#3D4348" }}>
//               Useful Links
//             </h4>
//             <ul className="list-unstyled footer-links">
//               <li>
//                 <Link to="/dashboard" className="text-decoration-none d-block mb-2" onClick={ScrollToTop} style={{ color: "#3D4348" }}>
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contactus" className="text-decoration-none d-block mb-2" onClick={ScrollToTop} style={{ color: "#3D4348" }}>
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/features" className="text-decoration-none d-block mb-2"onClick={ScrollToTop} style={{ color: "#3D4348" }}>
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-decoration-none d-block mb-2"onClick={ScrollToTop} style={{ color: "#3D4348" }}>
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faq" className="text-decoration-none d-block mb-2" onClick={ScrollToTop} style={{ color: "#3D4348" }}>
//                   FAQ'S
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="col-lg-2 col-md-3">
//             <h4 className="mb-3" style={{ color: "#3D4348" }}>
//               Our Services
//             </h4>
//             <ul className="list-unstyled footer-links">
//               <li>
//                 <a
//                   href="/services"
//                   className="text-decoration-none d-block mb-2"
//                   style={{ color: "#3D4348" }}
//                   onClick={scrollToTop}
//                 >
//                   Software Development
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="text-decoration-none d-block mb-2"
//                   style={{ color: "#3D4348" }}
//                   onClick={scrollToTop}
//                 >
//                   IT Consulting
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="text-decoration-none d-block mb-2"
//                   style={{ color: "#3D4348" }}
//                   onClick={scrollToTop}
//                 >
//                   Cloud Solutions
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   className="text-decoration-none d-block mb-2"
//                   style={{ color: "#3D4348" }}
//                   onClick={scrollToTop}
//                 >
//                   Cybersecurity
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   target="_blank"
//                   className="text-decoration-none d-block mb-2"
//                   style={{ color: "#3D4348" }}
//                   onClick={scrollToTop}

//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="col-lg-4 col-md-12">
//             <h4 className="mb-3" style={{ color: "#3D4348" }}>
//               Subscribe to Our Newsletter
//             </h4>
//             <p>
//               Stay updated with the latest tech trends, insights, and
//               EInfratech s innovations.
//             </p>
//             <form
//               action="forms/newsletter.php"
//               method="post"
//               className="d-flex gap-2"
//             >
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="form-control"
//                 required
//                 style={{
//                   borderColor: "#388da8"
//                 }}
//               />
//               <input
//                 type="submit"
//                 value="Subscribe"
//                 className="btn btn-primary"
//                 style={{
                  
//                   height: "50px",
//                   border: "none",
//                   borderRadius: "13px",
//                   textAlign: "center",
//                   fontSize: "1rem"
//                 }}
//               />
//             </form>
//             <div className="d-none loading">Loading</div>
//             <div className="d-none error-message"></div>
//             <div
//               className="d-none sent-message mt-2"
//               style={{ color: "#3D4348" }}
//             >
//               Your subscription request has been sent. Thank you!
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-4 pt-4 border-top">
//           <p className="mb-1" style={{ color: "#3D4348" }}>
//             © <span>Copyright</span>
//             <strong className="px-1">EInfratech Systems</strong>
//             <span>All Rights Reserved</span>
//           </p>
//           <div className="credits">
//             Designed by{" "}
//             <a href="https://einfratechsys.com/" style={{ color: "#3D4348" }}>
//               EInfratech Systems
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <footer className="footer">
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
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon youtube">▶</span>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h3 onClick={() => setShowLinks(!showLinks)} className="footer-heading text-start">
            Useful Links
          </h3>
          <ul className={showLinks ? "footer-list show" : "footer-list"}>
            <li><a href="/dashboard" className="footer-link">Dashboard</a></li>
            <li><a href="/contactus" className="footer-link">Contact Us</a></li>
            <li><a href="/features" className="footer-link">Features</a></li>
            <li><a href="/services" className="footer-link">Services</a></li>
            <li><a href="/faq" className="footer-link">FAQs</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="footer-column">
          <h3 onClick={() => setShowServices(!showServices)} className="footer-heading">
            Our Services
          </h3>
          <ul className={showServices ? "footer-list show" : "footer-list"}>
            <li><a href="/healthcare" className="footer-link ">Health Care</a></li>
            <li><a href="/retailpage" className="footer-link">Retail Industry</a></li>
            <li><a href="/publicsector" className="footer-link">Public Sector</a></li>
            <li><a href="/lifescience" className="footer-link">Life Science</a></li>
            <li><a href="/education" className="footer-link">Education</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>Privacy Policy</p>
        <p>© Elnfratech Systems India 2023. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
