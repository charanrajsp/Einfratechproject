
// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Features.css';
function Features() {
    return (
        <div>
            <div>
                {/* backgroundImage: `url('/images/feature-image.jpeg')` */}
                <div className="page-title " id="febg" style={{ backgroundColor: "#697565", backgroundSize: 'cover', height: '20vh' }}>
                    <div className="container text-center">
                        <h1 data-aos="fade-down" className='text-white'>Our Features</h1>
                        <p data-aos="fade-up" className='text-white'>
                        Providing seamless and efficient solutions for every challenge.
                        </p>
                    </div>
                </div>

                <section id="features" className="features fsection  fcustom fcustom" >
                    <div className="container">
                        <div id="grid" className="row gx-5 gy-3 align-items-center px-5">


                            <div className="col-lg-7 col-md-6 d-flex align-items-center flex-column" style={{ minHeight: "400px" }}>
                                <ul className="nav nav-pills w-100" data-aos="fade-up" data-aos-delay="100">
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link active show p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-1"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-binoculars"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Cloud-Based Access</h4>
                                                <p>Manage workplace operations from anywhere with secure cloud solutions.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-2"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-box-seam"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Multi-Device Compatibility</h4>
                                                <p>Seamless access across desktops, tablets, and mobile devices.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-3"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-brightness-high"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Predictive Maintenance</h4>
                                                <p>AI-driven alerts to prevent equipment failures before they happen.</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="nav-item mb-3 w-100">
                                        <a className="nav-link p-3 shadow-sm d-flex gap-2" data-bs-toggle="tab" data-bs-target="#features-tab-4"
                                            style={{ borderRadius: "10px", transition: "0.3s ease-in-out" }}>
                                            <i className="bi bi-brightness-high"></i>
                                            <div>
                                                <h4 className="d-none d-lg-block">Custom Workflows</h4>
                                                <p>Tailor workplace processes to match specific business needs.</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <div className="col-lg-5 col-md-6">
                                <div className="tab-content img-hover-zoom ms-4" data-aos="fade-up" data-aos-delay="200">
                                    <div className="tab-pane fade active show" id="features-tab-1">
                                    <img src="/images/tabs-1.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                    <div className="tab-pane fade" id="features-tab-2">
                                    <img src="/images/tabs-2.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                    <div className="tab-pane fade" id="features-tab-3">
                                    <img src="/images/tabs-3.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                    <div className="tab-pane fade" id="features-tab-4">
                                    <img src="/images/tabs-1.jpg" alt="" className="img-fluid img-rounded" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="features-details" className="features-details fsection fcustom">
                    <div className="container px-5">

                        <div className="row align-items-center gy-3">

                            <div className="col-lg-6 col-md-12 text-center img-hover-zoom " data-aos="fade-up" data-aos-delay="100">
                            {<img 
  src="/images/features-2.jpg" 
 className="img-fluid rounded shadow-lg ms-2"
  alt="Feature 1" 
  style={{ width: '95%', height: '80%', marginLeft: '20px', marginRight: 'auto', display: 'block' }} 
/>}


                            </div>



                            <div className="col-lg-6 col-md-12 text-lg-start text-center " data-aos="fade-up" data-aos-delay="200">
                                <div className="content px-3" style={{ maxWidth: "100%" }}>
                                    <h3 className="">Enhancing Workplace Efficiency with Innovation</h3>
                                    <p style={{ fontSize: "16px", letterSpacing: "-1px", lineHeight: "1.5rem" }}>
                                        Optimize your workplace with cutting-edge  and a seamless integration.
                                        Our solutions help in businesses streamline operations, reduce costs,  improve productivity.
                                        Experience smarter way to manage your facilities with real-time insights and automation.
                                        The integration of technology, a creative problem-solving strategies, and a culture of continuous improvement
                                        leads to higher productivity, reduced costs, and enhanced employee satisfaction.
                                        Leveraging  a cutting-edge technology and seamless integration transforms business operations,
                                        making processes more streamlined, cost-effective, a productive.
                                        Experience smarter way to manage your facilities with real-time insights and automation. 
                                        Optimize your workplace with cutting-edge  and a seamless integration.
                                    </p>

                                    {/* <a
                                        href="#"
                                        className="btn btn-primary text-white px-4 py-2 fw-bold"
                                        style={{
                                            //    fontSize: "1.2rem",
                                            marginTop: "27px"
                                        }}
                                    >
                                        Discover More
                                    </a> */}
                                </div>

                            </div>
                        </div>


                        <div className="row gy-4 mt-5">

                            <div className="col-lg-6 col-md-12 text-lg-start text-center order-lg-1 order-2" data-aos="fade-up" data-aos-delay="100">
                                <div className="content px-3" style={{ maxWidth: "100%" }}>
                                    <h3 className="" >Smart Workplace Solutions for Enhanced Efficiency</h3>
                                    <p className="" style={{ fontSize: "16px", letterSpacing: "-1px", lineHeight: "1.5rem" }}>
                                        Leverage advanced technology to transform your workplace.
                                        Our innovative solutions provide real-time insights,and a enhance
                                        operational efficiency, also and reduce costs. Automate the processes,
                                        improve decision-making, and to create a moreproductive .Gain instant access to crucial data. The integration of
                                        the technology, creative and problem-solving strategies, and a culture
                                        of continuous improvement can lead to higher productivity,
                                        reduced, enhanced an employee satisfaction.
                                        Automate  processes,
                                        improve decision-making,  create a moreproductive.Gain instant access to crucial data. Automate the processes,
                                        improve decision-making, and to create a moreproductive  environment.Gain instant access to crucial data. 
                                    </p>
                                    {/* <a href="#" style={{ marginTop: "20px" }} className="btn btn-primary text-white px-4 py-2 ">
                                        Discover More
                                    </a> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 text-center order-lg-2 order-1 img-hover-zoom" data-aos="fade-up" data-aos-delay="200">
    { <img 
        src="/images/features-3.jpg" 
        className="img-fluid rounded shadow-lg center-image" 
        alt="Feature 2" 
        style={{ 
            width: "90%", 
            height: "80%", 
            marginTop: '20px', 
            marginBottom: '10px',  // Reduced bottom margin to balance the space
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' // Smaller bottom shadow with a reduced spread
        }} 
    />}
    
   
</div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Features