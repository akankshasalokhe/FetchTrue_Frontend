import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaRocket, FaUsers, FaChartLine, FaHandshake,
  FaLightbulb, FaLock, FaHeadset
} from 'react-icons/fa';
import './Benifits.css';

const benefits = [
  { icon: <FaRocket />, title: 'Boost Growth', desc: 'Accelerate your business performance and scalability.' },
  { icon: <FaUsers />, title: 'Wider Reach', desc: 'Gain access to a larger, more diverse client base.' },
  { icon: <FaChartLine />, title: 'Insights & Analytics', desc: 'Track your success with detailed insights.' },
  { icon: <FaHandshake />, title: 'Trusted Partner', desc: 'Collaborate with a reliable, industry-trusted brand.' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'Use cutting-edge tools to stay ahead of the curve.' },
  { icon: <FaLock />, title: 'Security', desc: 'Your data and transactions are always protected.' },
  { icon: <FaHeadset />, title: 'Support', desc: '24/7 priority assistance for all partners.' },
];

function Benefits() {
  return (
    <section className="benefits-section">
      <Container>
        <div className="text-center mb-5">
          <h4 className="benefits-subtitle">Benefits of</h4>
          <h2 className="benefits-title">Becoming a Profinity Partner</h2>
        </div>
        <Row>
          {benefits.map((item, idx) => (
                <Col key={idx} xs={12} md={6} className="mb-4">
                    <div
                    className="benefit-card-horizontal"
                    style={{ '--delay': `${idx * 0.1}s` }}
                    >
                    <div className="icon-column">{item.icon}</div>
                    <div className="text-column">
                        <h5 className="benefit-title">{item.title}</h5>
                        <p className="benefit-desc">{item.desc}</p>
                    </div>
                    </div>
                </Col>
                ))}

        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
