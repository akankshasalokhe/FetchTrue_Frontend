import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ServicesPage.css';

// (no import change needed)
function ServicesPage() {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const res = await fetch('https://landing-page-backend-alpha.vercel.app/api/servicepage/get');
        const data = await res.json();
        const service = data.data.find((item) => item._id === id);
        if (!service) throw new Error('Service not found');
        setServiceData(service);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceData();
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!serviceData) return <div>No service data found.</div>;

  const categories = serviceData.categoryname || [];
  const items = serviceData.items || [];

  return (
    <div className="service-page">
      {/* Header Title & Description */}
      <section className="title-section py-5 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           <h1 className="section-title">{serviceData?.titleDescArray?.[0]?.title || 'Default Title'}</h1>
            <p className="section-subtitle">{serviceData?.titleDescArray?.[0]?.description || 'No description.'}</p>
          </motion.div>
        </Container>
      </section>

      {/* Category Section */}
      <section className="category-section py-5">
        <Container>
          <motion.h2
            className="section-heading-title text-center "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Type Of Category
          </motion.h2>
          <Row className="mt-4">
            {categories.map((category, index) => (
              <Col key={category._id} xs={12} md={6} lg={4} className="mb-4">
                <motion.div
                  className="category-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img src={category.image} alt={category.title} className="img-fluid" />
                  <h4 className=" fw-bold mt-2" style={{color:'#0782fd'}}>{category.title}</h4>
                  <p>{category.description}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Title-Description Sections */}
      {[1, 2, 3].map((index) => (
        <section
          key={index}
            className={`desc-section ${index % 2 === 0 ? 'bg-light' : 'custom-primary-bg text-white'}`}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-heading">
                {serviceData?.titleDescArray?.[index]?.title || 'Default Section Title'}
              </h2>
              <p>{serviceData?.titleDescArray?.[index]?.description || 'No description.'}</p>
            </motion.div>
          </Container>
        </section>
      ))}

      {/* Q&A Section */}
      {/* <section className="qa-section py-5">
        <Container>
          <motion.h2
            className="section-heading text-center text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            FAQs & Items
          </motion.h2>
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="qa-card my-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h5 className="fw-bold">Q{i + 1}: {item.title}</h5>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </Container>
      </section> */}
    </div>
  );
}

export default ServicesPage;
