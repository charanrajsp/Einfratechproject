import React from 'react';
import Hero from '../components/Hero';
import { FaBuilding, FaLock, FaRocket, FaUsers, FaServer, FaClipboardCheck, FaHeadset } from "react-icons/fa";
import './Dashboard.css';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    useEffect(() => {
        let timeoutId;
        
        if (inView) {
            const startTime = Date.now();
            
            const updateCount = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                
                if (elapsed < duration) {
                    const progress = elapsed / duration;
                    setCount(Math.floor(end * progress));
                    timeoutId = setTimeout(updateCount, 16); // roughly 60fps
                } else {
                    setCount(end);
                }
            };
            
            updateCount();
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [end, duration, inView]);

    return <span ref={ref}>{count}</span>;
};


const Dashboard = () => {
    return (
        <div>
            <Hero />
            <div className="dashboard-container">
                <div className="dashboard-card">
                    <FaBuilding className="dashboard-icon" />
                    <div className="dashboard-text">
                        <h3>Smart Workplace Solutions</h3>
                        <p className="dashboard-description">
                            Enhance efficiency with automated facility operations 
                            and seamless data sharing.
                        </p>
                    </div>
                </div>
                <div className="dashboard-card">
                    <FaLock className="dashboard-icon" />
                    <div className="dashboard-text">
                        <h3>Connected & Secure Systems</h3>
                        <p>Leverage integrated workplace management for real-time insights and better decision-making.</p>
                    </div>
                </div>
                <div className="dashboard-card">
                    <FaRocket className="dashboard-icon" />
                    <div className="dashboard-text">
                        <h3>Future-Ready Technology</h3>
                        <p>Ensure scalability, sustainability, and optimal performance across industries.</p>
                    </div>
                </div>
            </div>

                                    {/* Connected Workplace Section */}
            <div className="container my-5 p-5 rounded" style={{ backgroundColor: "#90caf9" }}>
                <div className="row d-flex align-items-stretch">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6 d-flex align-items-center"
                    >
                        <img
                            src="/images/cw.jpg"
                            alt="Connected Workplace"
                            className="img-fluid rounded shadow w-100 h-100"
                            style={{ 
                                objectFit: "cover",
                                minHeight: "90%"
                            }}
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6"
                    >
                        <div className="px-7">
                            <h2 className="fw-bold display-6 mb-4">Transforming Workplaces with Smart Connectivity</h2>
                            <div className="lead mb-4">
                                <strong>
                                    <h5 className="fw-bold">
                                        Unlock a new era of workplace efficiency with seamlessly integrated technology.
                                        Our connected solutions ensure real-time data access, enhanced security, and
                                        optimized workflows, creating an environment where innovation thrives.
                                    </h5>
                                </strong>
                            </div>
                            <div className="mt-4">
                                <ul className="list-unstyled mx-auto">
                                    <li className="h5 mb-2">✔ AI-driven automation for enhanced productivity</li>
                                    <li className="h5 mb-2">✔ End-to-end security with real-time monitoring</li>
                                    <li className="h5 mb-2">✔ Cloud-powered scalability for future-ready operations</li>
                                    <li className="h5 mb-2">✔ Seamless collaboration with intelligent connectivity</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* We've Got You Covered Section */}
            <div className="container my-5 p-4 rounded" style={{ backgroundColor: "rgba(211, 211, 211, 0.7)" }}>
                <div className="row align-items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6">
                        <h2 className="fw-bold text-center display-4 text-dark">We've Got You Covered</h2>
                        <p className="lead text-center fs-4">We've worked with clients across industries to make their workplace experience better.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6">
                                                <div className="row text-center">
                            <div className="col-6 mb-3">
                                <FaUsers className="icon-xl icon-animated" />
                                <div className="mt-2">
                                    <h3 className="mb-0"><strong><AnimatedNumber end={1650} />+</strong></h3>
                                    <p className="fs-6">Clients Served</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <FaServer className="icon-xxl icon-animated" />
                                <div className="mt-2">
                                    <h3 className="mb-0"><strong><AnimatedNumber end={15} />M+</strong></h3>
                                    <p className="fs-6">OT Assets Managed</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <FaClipboardCheck className="icon-xl icon-animated" />
                                <div className="mt-2">
                                    <h3 className="mb-0"><strong><AnimatedNumber end={30} />M+</strong></h3>
                                    <p className="fs-6">Work Orders per Month</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <FaHeadset className="icon-xl icon-animated" />
                                <div className="mt-2">
                                    <h3 className="mb-0"><strong>24x7</strong></h3>
                                    <p className="fs-6">Global Customer Care</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Additional Sections with Light Grey Background */}
            <div className="container my-5 py-5 bg-white rounded">
                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6">
                        <img src="/images/c.jpeg" alt="Facilities Maintenance" className="img-fluid rounded shadow" style={{ maxWidth: "55%", height: "auto" }} />
                    </div>
                    <div className="col-md-5">
                        <h2 className="fw-bold text-center pt-3 text-primary" style={{ font: 'times' }}>Comprehensive Facilities Maintenance</h2>
                        <p className='text-center px-4'>
                            Ensure the longevity and optimal performance of your assets with our proactive facilities maintenance services.
                            We utilize advanced Integrated Workplace Management Systems (IWMS) to monitor and manage your facilities efficiently, minimizing downtime and reducing operational costs.
                            Our team is dedicated to maintaining a safe and productive environment for your organization.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6 order-md-2">
                        <img src="/images/c2.jpeg" alt="Space Planning" className="img-fluid rounded shadow" style={{ maxWidth: "60%", height: "auto" }} />
                    </div>
                    <div className="col-md-6 order-md-1 text-center">
                        <h2 className="fw-bold pt-3 text-primary">Strategic Space Planning and Optimization</h2>
                        <p className='text-center px-4'>
                            Maximize your workspace potential with our strategic space planning solutions.
                            By analyzing your current utilization and future needs, we design layouts that enhance collaboration and efficiency.
                            Our approach ensures that your real estate investments align with your organizational goals, providing a flexible and adaptive work environment.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6">
                        <img src="/images/c3.jpeg" alt="OT Security" className="img-fluid rounded shadow" style={{ maxWidth: "60%", height: "auto" }} />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold text-primary text-center pt-3">Robust Operational Technology (OT) Security</h2>
                        <p className='text-center px-4'>
                            Protect your critical infrastructure with our comprehensive OT security services.
                            We implement advanced security measures, including next-generation firewalls and real-time monitoring, to safeguard your operational technology assets from cyber threats. 
                            Our solutions are designed to detect, prevent, and respond to potential vulnerabilities, ensuring the resilience of your industrial control systems.
                            FORTINET.COM
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6 order-md-2">
                        <img src="/images/c4.jpeg" alt="Energy Management" className="img-fluid rounded shadow" style={{ maxWidth: "60%", height: "auto" }} />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2 className="fw-bold text-primary text-center pt-3">Sustainable Energy Management Solutions</h2>
                        <p className='text-center px-4'>
                            Promote environmental responsibility with our sustainable energy management services.
                            We provide smart energy solutions that reduce consumption and operational costs, integrating eco-friendly practices into your daily operations. 
                            Our team assists in implementing renewable energy sources and optimizing energy usage, contributing to a greener and more sustainable future.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
