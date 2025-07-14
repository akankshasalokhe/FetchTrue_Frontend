import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import './Behind.css';

function Behind() {
  const stats = [
    { count: 120, title: 'Growth Partners', color: 'blue' },
    { count: 85, title: 'Business Partners', color: 'rgb(98, 245, 19)' },
    { count: 10, title: 'Years of Trust', color: 'red' },
    { count: 200, title: 'Brands', color: 'orange' },
  ];

  return (
    <div className="behind-section">
      <div className="section-title-box">
        <h1 className="section-title">Behind FetchTrue</h1>
      </div>
      <div className="cards-container">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card-glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="count-text" style={{ color: item.color }}>
              <CountUp end={item.count} duration={2} />+
            </h2>
            <p className="title-text">{item.title}</p>
            <p className="description-text">Description for {item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Behind;
