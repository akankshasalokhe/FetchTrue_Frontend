import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GrowthPartner.css';

const GrowthPartner = () => {
  const [gpItems, setGpItems] = useState([]);
  const [sgpItems, setSgpItems] = useState([]);
  const [pgpItems, setPgpItems] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    fetch('https://landing-page-backend-alpha.vercel.app/api/item/get')
      .then((res) => res.json())
      .then((data) => {
        const items = data.data || [];
        setGpItems(items.filter(item => item.category === 'fetchtrue-growth-partner'));
        setSgpItems(items.filter(item => item.category === 'super-growth-partner'));
        setPgpItems(items.filter(item => item.category === 'premium-growth-partner'));
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const renderSection = (title, items, isPremium = false) => (
    <div className="partner-section mb-5">
      {items.map((item, index) => (
        <div className="partner-card d-md-flex align-items-center mb-5" key={index}>
          <div
            className="partner-text col-md-6 p-4"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
          >
            <h3 className="partner-heading mb-3">{item.heading}</h3>
            <p className="fs-5"><strong>Earning Potential:</strong> {item.earning}/month</p>
            <p className="fs-5"><strong>Requirements:</strong> {item.requirements}</p>

            <div className="animated-list">
              <strong className="fs-5 d-block mb-2">Key Benefits:</strong>
              <ul className="list-unstyled">
                {item.feature1 && (
                  <li className="animated-item">
                    <FaCheckCircle className="feature-icon" /> {item.feature1}
                  </li>
                )}
                {item.features?.map((feature, i) => (
                  <li key={i} className="animated-item">
                    <FaCheckCircle className="feature-icon" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {isPremium && item.feature2 && (
              <div className="animated-list mt-4">
                <strong className="fs-5 d-block mb-2 text-premium">Exclusive Advantage:</strong>
                <ul className="list-unstyled">
                  <li className="animated-item">
                    <FaCheckCircle className="feature-icon" /> {item.feature2}
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className="partner-image col-md-6 p-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={item.image}
              alt={item.heading}
              className="img-fluid rounded shadow"
              style={{ height: '420px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-5 growth-partner-page">
      <div className="text-center mb-5" data-aos="fade-up">
        <h1 className="main-title">Join Our Growth Partner Program</h1>
        <p className="text-muted fs-4">
          Choose a level that fits your ambition and unlock exciting income opportunities.
        </p>
      </div>

      {renderSection('FetchTrue Growth Partner (GP)', gpItems)}
      {renderSection('Super Growth Partner (SGP)', sgpItems)}
      {renderSection('Premium Growth Partner (PGP)', pgpItems, true)}
    </div>
  );
};

export default GrowthPartner;
