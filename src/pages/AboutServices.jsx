import React, { useEffect, useState } from 'react';
import './AboutServices.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AboutServices() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/servicepage/get`);
        const pages = res.data?.data || [];
        if (pages.length > 0) {
          setServices(pages[0].categoryname || []);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (title) => {
    const slug = title.toLowerCase().replace(/\s+/g, '-'); // Convert to URL-friendly string
    // navigate(`/services/${slug}`);
  };

  return (
    <div className="about-services-container">
      <h2 className="section-title">About Our Services</h2>
      <div className="underline" />

      <div className="about-services-content">
        {/* Left Column - Cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              onClick={() => handleCardClick(service.title)}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon">
                <img
                  src={Array.isArray(service.image) ? service.image[0] : service.image}
                  alt={service.title}
                  style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                />
              </div>
              <p className="service-name">{service.title}</p>
            </div>
          ))}
        </div>

        {/* Right Column - Image with scroll animation */}
        <div className="image-column" data-aos="zoom-in-left">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.XGKRkwQi5uFVviyMzwGbFgHaE8?pid=Api&P=0&h=180"
            alt="Our Services"
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutServices;
