import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HealthCare.css'; // Fixed typo

function HealthCare() {
  useEffect(() => {
    const loadCSS = (href, integrity, crossOrigin) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      if (integrity) link.integrity = integrity;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
      return link;
    };

    const loadScript = (src, integrity, crossOrigin) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      if (integrity) script.integrity = integrity;
      if (crossOrigin) script.crossOrigin = crossOrigin;
      document.body.appendChild(script);
      return script;
    };

    const googleFontsPreconnect1 = loadCSS('https://fonts.googleapis.com');
    const googleFontsPreconnect2 = loadCSS('https://fonts.gstatic.com', null, 'anonymous');
    const googleFonts = loadCSS(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap'
    );
    const bootstrapCSS = loadCSS(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
      'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
      'anonymous'
    );
    const bootstrapIconsCSS = loadCSS(
      'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css'
    );
    const aosCSS = loadCSS('https://unpkg.com/aos@2.3.1/dist/aos.css');
    const bootstrapJS = loadScript(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
      'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
      'anonymous'
    );
    const aosJS = loadScript('https://unpkg.com/aos@2.3.1/dist/aos.js');
    
    aosJS.onload = () => {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    };

    return () => {
      [googleFontsPreconnect1, googleFontsPreconnect2, googleFonts, bootstrapCSS, 
       bootstrapIconsCSS, aosCSS, bootstrapJS, aosJS].forEach(resource => {
        if (resource.parentNode) resource.parentNode.removeChild(resource);
      });
    };
  }, []);

  // other 

  const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '5 Lakh' },
    { id: 2, name: 'Assets under holding', value: '$1 Million' },
    { id: 3, name: 'New users annually', value: '10 Million' },
  ]





  // Unique data for four different Unite Support Teams cards
  const supportTeamData = [
    {
      title: "Clinical Operations Support",
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?semt=ais_hybrid",
      description: "Streamline clinical workflows to enhance patient outcomes.",
      services: [
        "Clinical Equipment Maintenance",
        "Staff Training Programs",
        "Patient Flow Optimization",
        "Inventory Management"
      ],
      icons: ["bi-tools", "bi-person-gear", "bi-arrow-right-circle", "bi-boxes"]
    },
  
   
  ];



  // other 2


  const products = [
  {
    id: 1,
    name: 'India',
    href: '#',
    price: 'Mukesh',
    imageSrc: 'https://s39613.pcdn.co/wp-content/uploads/2018/01/student-backpack-id683911900-FF180119.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'UK',
    href: '#',
    price: 'Sam Altomas',
    imageSrc: 'https://www.shutterstock.com/image-photo/portrait-hispanic-guy-going-university-260nw-332985821.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'USA',
    href: '#',
    price: 'Jems conser',
    imageSrc: 'https://www.shutterstock.com/image-photo/freshmen-collegeuniversity-student-260nw-306115559.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Kenada',
    href: '#',
    price: 'Sukhbider ',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsle6GzfUOucEFBFf-kFSRfmq31Qb5OU5qCCDlml4w4b8pwuQ32iskGWLXRXbf2FBD5mE&usqp=CAU',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];
  return (
    <div className="service-details-page">
      {/* Page Title */}
      <section className="page-title text-center">
        <div className="container">
          <h1 data-aos="fade-down " style={{color:'white'}}>Connected Workplace for Healthcare</h1>
          <p data-aos="fade-up" className="lead" style={{color:'white'}}>
            Unite support teams and optimize operations for better patient care.
          </p>
          <a
            href="/contact"
            className="btn btn-primary mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule a Demo
          </a>
        </div>
      </section>



    {/* top doctors */}

      <section className="explore-solutions py-5">
        <div className="container text-center">
          <h2 className="h3 mb-3" data-aos="fade-up">
            Top Doctors
          </h2>
          <p className="mb-5" data-aos="fade-up">
            Discover our specialized solutions for healthcare  management.
          </p>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8ZHQEXFF5oSIzXifb0rWe70DxdMyW4nWvA&s"
                  alt="HTM Management"
                  className="card-img-top"
                />
                <div className="card-body">
                <h4 className="card-title">Pediatrician</h4>
                  <h5 className="card-title">Saveer Kumar</h5>
                  <p className="card-text">MD, DO, or MBBS/MBChB</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100">
                <img
                  src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                  alt="Facilities Maintenance"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className='card-title'>General Surgeon</h4>
                  <h5 className="card-title">Santosh Patel</h5>
                  <p className="card-text">MD, DO, or MBBS/MBChB</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauMR35oXJLMsukWoyEvoenvTPH2gLuFcZ9NSIlYMfIM8qFHnny5IlaAOaSRZBr5ZnBqA&usqp=CAU"
                  alt="OT Security"
                  className="card-img-top"
                />
                <div className="card-body">
                <h4 className='card-title'>Cardiologist</h4>
                  <h5 className="card-title">Sumit Goyal</h5>
                  <p className="card-text">MD, DO, or MBBS/MBChB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {supportTeamData.map((data, index) => (
                <div className="service-section" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3 className="h4 mb-4">
                    <i className="bi bi-hospital me-2"></i> {data.title}
                  </h3>
                  <div className="row justify-content-between align-items-center Card">
                    <div className="col-lg-5 image-container ">
                      <img
                        src={data.image}
                        alt={`${data.title} Support`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-5 text-container Services" id='Content'>
                      <p>{data.description}</p>
                      <ul className="info-list list-unstyled content">
                        {data.services.map((service, i) => (
                          <li key={i} >
                            <i className={`bi ${data.icons[i]} me-2`}></i> {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Healthcare Solutions */}
     

{/* other */}

      
<div className="container">
  <h1 className='Client'>Our Client</h1>
      <div className="products-wrapper">
        <h2 className="visually-hidden">Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="product-card">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

      <div className="stats-container">
      <div className="stats-wrapper">
        <dl className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <dt className="stat-name">{stat.name}</dt>
              <dd className="stat-value">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>


{/* other 2 */}


    
    </div>
  );
}

export default HealthCare;
