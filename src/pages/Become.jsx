import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Become() {
  return (
    <div style={{ background: '#f8f9fa', width: '100%', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center gy-5">
          {/* Left Column - Image */}
          <Col xs={12} md={6} className="text-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="https://img.freepik.com/premium-photo/happy-young-woman-standing-near-big-cellphone-with-empty-white-screen-showing-mobile-device-blue-background-mockup_116547-30958.jpg"
              alt="Become a Partner"
              className="img-fluid rounded shadow"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>

          {/* Right Column - Text */}
          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h1 className="fw-bold mb-4 fs-2 text-md-start text-center">
                Become a Growth Partner with FetchTrue
              </h1>
              <p className="fs-5 mb-3 text-md-start text-center">
                Join us to grow your business and access exclusive benefits:
              </p>
              <ul className="fs-6 ps-3">
                {[
                  "Expand your reach with our platform",
                  "Earn through onboarding fees, service commissions, and product sales",
                  "Operate across multiple industries through a single, all-in-one platform",
                  "Get complete training in operations, marketing, and client acquisition",
                  "Enjoy flexible work hours with a balanced, automated business model",
                  "Benefit from a proven system offering up to 5X ROI (T&C apply)",
                  "Act as a local brand ambassador, building trust and driving real growth",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-2"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <div className="text-md-start text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="btn btn-outline-primary mt-4"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Become;
