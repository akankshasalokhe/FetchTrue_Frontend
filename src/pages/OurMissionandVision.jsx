import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './OurMission.css';

const OurMissionandVision = () => {
  const [mission, setMission] = useState(null);
  const [vision, setVision] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const fetchData = async () => {
      try {
        const res = await axios.get('https://landing-page-backend-alpha.vercel.app/api/item/get');
        const allItems = res.data.data;

        const missionItem = allItems.find(item => item.category?.toLowerCase() === 'our mission');
        const visionItem = allItems.find(item => item.category?.toLowerCase() === 'our vision');

        setMission(missionItem);
        setVision(visionItem);
      } catch (error) {
        console.error('Error fetching mission/vision:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="our-mission-page">
      <div className="fixed-background">
        <div className="overlay">
          <h1 className="page-title" data-aos="zoom-in">Our Mission & Vision</h1>

          {mission && (
            <div className="content-row" data-aos="fade-up">
              <div className="column image-col" data-aos="fade-right">
                <img src={mission.image} alt="Our Mission" />
              </div>
              <div className="column text-col" data-aos="fade-left">
                <h2>{mission.heading}</h2>
                <p>{mission.description}</p>
              </div>
            </div>
          )}

          {vision && (
            <div className="content-row row-reverse" data-aos="fade-up">
              <div className="column image-col" data-aos="fade-left">
                <img src={vision.image} alt="Our Vision" />
              </div>
              <div className="column text-col" data-aos="fade-right">
                <h2>{vision.heading}</h2>
                <p>{vision.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurMissionandVision;
