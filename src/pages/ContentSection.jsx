import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const ContentSectionPage = () => {
  const [mainData, setMainData] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/contentsection/get')
      .then(res => {
        setMainData(res.data[0]);
      })
      .catch(err => {
        console.error('Main content fetch error:', err);
        setMainData({ error: 'Failed to load main content.' });
      });

    // axios
    //   .get('http://localhost:5001/api/contentsection/getall')
    //   .then(res => setSections(res.data))
    //   .catch(err => console.error('Section fetch failed:', err));
  }, []);

  const scrollVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  if (mainData?.error) return <div>{mainData.error}</div>;
  if (!mainData || !mainData.content) return <div>Loading...</div>;

  return (
    <div className='my-5 py-lg-5'>
      <Container>
        <motion.h1
          className='fw-bold text-center double-underline'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(to right, #007bff, #00c6ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {mainData.Heading}
        </motion.h1>

        <motion.h5
          className='fw-bold text-center mt-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: '#007bff' }}
        >
          {mainData.Subheading}
        </motion.h5>

        <Row className='mt-5 py-5'>
          <Col lg={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {mainData.content.slice(0, 5).map((item, index) => (
                <motion.div
                  custom={index}
                  variants={scrollVariants}
                  key={item._id}
                  className='text py-3'
                >
                  <span className='fw-bold text-primary fs-5'>{item.title}:</span>{' '}
                  <span className='text-secondary fs-6'>{item.description}</span>
                </motion.div>
              ))}
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <img
                src={mainData.image}
                className='img-fluid my-5 my-lg-0 rounded shadow'
                alt='Main Visual'
              />
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {mainData.content.slice(5).map((item, index) => (
                <motion.div
                  custom={index}
                  variants={scrollVariants}
                  key={item._id}
                  className='text py-3'
                >
                  <span className='fw-bold text-primary fs-5'>{item.title}:</span>{' '}
                  <span className='text-secondary fs-6'>{item.description}</span>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Additional Sections */}
      <div className="bg-light py-5 px-4">
        <div className="space-y-16 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={section._id}
              className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:shadow-2xl transition duration-300"
              initial="hidden"
              whileInView="visible"
              variants={scrollVariants}
              custom={index}
              viewport={{ once: true }}
            >
              <div className="text-center md:text-left flex-1">
                <h2 className="text-4xl font-extrabold text-blue-600 tracking-wide">{section.Heading}</h2>
                <p className="text-xl text-gray-600 mt-2 font-medium">{section.Subheading}</p>
              </div>

              <motion.img
                src={section.image}
                alt={section.Heading}
                className="w-60 h-60 object-cover rounded-lg border-4 border-white shadow-md"
                whileHover={{ scale: 1.05 }}
              />

              <div className="md:w-1/3 text-center md:text-right">
                {Array.isArray(section.content) ? (
                  section.content.map((item, idx) => (
                    <div key={idx} className="mb-3">
                      <h4 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h4>
                      <p className="text-base text-gray-700">{item.description}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">Invalid content format</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSectionPage;
