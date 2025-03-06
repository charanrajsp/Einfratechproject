import React from "react";
import { motion } from "framer-motion";
import "./Customer.css";

const Customer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="customer-container"
    >
      <div id="cus" className="content-section ">
        <div className="content">
          <h2>Who We Are</h2>
          <p><strong style={{ fontSize: "18px", letterSpacing: "-0.1px", lineHeight: "1.5rem"}} >Innovating  Future of Workplace Management</strong></p>
          <p style={{ fontSize: "18px", letterSpacing: "-0.1px", lineHeight: "1.5rem"}}>
            At EInfratech Systems,we specialize in delivering  intelligent, scalable,  secure workplace management of solutions.
            Our mission  streamline operations, and  enhance the efficiency, digital   in transformation across industries. An drive digital transformation across industries
          </p>
          <ul>
            <li><strong>Seamless Integration</strong> – Unified platforms for optimized workflows.</li>
            <li><strong>Data-Driven Insights</strong> – Smart analytics for informed decision-making.</li>
            <li><strong>Advanced Technology</strong> – AI-powered solutions for modern enterprises.</li>
          </ul>
          {/* <a href="#" className="read-more bg-primary text-light">Read More</a> */}
        </div>


        <div className="grid-images">

          <div className="parent">
            <div className="div1"><motion.img src="/images/about-company-1.jpg" alt="Workplace 1" whileHover={{ scale: 1.1 }} /></div>
            <div className="div2"><motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} /></div>
            <div className="div3"><motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} /></div>
          </div>
        </div>
      </div>
      <hr className="border-4 border-black mt-5" />

      <div id="mid" className="col-12 text-center py-4 mt-5">
        <h1>Support For Your Connected Workplace</h1>
        {/* <p></p> */}

        <div className="row justify-content-center mt-5">
                    {/* First Column */}
                              {/* First Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <img 
              src="/images/cus3.jpg" 
              alt="All Day" 
              className="img-fluid uniform-img" 
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                mixBlendMode: 'multiply',
                backgroundColor: 'transparent',
                filter: 'brightness(1.1) contrast(1.2)'
                
              }}
            />
            <h2 className="uniform-title">All Day, Every Day</h2>
            <p className="uniform-text">Industry leading technical support when you need it.</p>
          </div>

          {/* Second Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <img 
              src="/images/cus1.jpg" 
              alt="Easy Portal" 
              className="img-fluid uniform-img" 
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                mixBlendMode: 'multiply',
                backgroundColor: 'transparent',
                filter: 'brightness(1.1) contrast(1.2)'
              }}
            />
            <h2 className="uniform-title">Easy-to-Use Portal</h2>
            <p className="uniform-text">Quickly request enhancements or report issues.</p>
          </div>

          {/* Third Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4">
            <img 
              src="/images/cus2.jpg" 
              alt="Customer Obsessed" 
              className="img-fluid uniform-img" 
              style={{ 
                width: '100px', 
                height: '100px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                mixBlendMode: 'multiply',
                backgroundColor: 'transparent',
                filter: 'brightness(1.1) contrast(1.2)'
              }}
            />
            <h2 className="uniform-title">Customer Obsessed</h2>
            <p className="uniform-text">Direct access to a dedicated CSM who knows your projects and objectives.</p>
          </div>
          </div>
          </div>
      <hr className="border-4 border-black mt-5" />
      <div className="partners-section">
        <h3 id="cuh3">Our Trusted Partners</h3>
        <motion.div
          className="partners-logos"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img src="images/client-1.png" alt="Partner 1" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-2.png" alt="Partner 2" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-3.png" alt="Partner 3" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-4.png" alt="Partner 4" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-5.png" alt="Partner 5" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-6.png" alt="Partner 5" whileHover={{ scale: 1.1 }} />

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Customer;
