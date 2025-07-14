import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import './StepsEarning.css'
// import playstore from "../../assets/Google Play (2).png";

const StepsEarning = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const steps = [
    { id: 1, title: "Download the App" },
    { id: 2, title: "Complete your KYC" },
    { id: 3, title: "Start your Earning" },
  ];

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch(
          "https://biz-booster-landingpage-backend.vercel.app/api/videos/get"
        );
        if (!response.ok) throw new Error("Failed to fetch video URL");
        const data = await response.json();
        if (!Array.isArray(data) || !data[0]?.video) {
          throw new Error("Video URL not found in the response");
        }
        setVideoUrl(data[0].video);
      } catch (error) {
        console.error("Error fetching video:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoUrl();
  }, []);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center text-danger py-5">Error: {error}</div>;

  return (
    <div className="bg-white py-5">
      <Container>
        <motion.h1
          className="text-center fw-bold text-primary mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Start your Step towards Earning
        </motion.h1>

        <Row className="gy-5">
          {/* Steps Column */}
          <Col xs={12} md={6}>
            <motion.div
              className="d-flex flex-column align-items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
       <div className="d-flex flex-column align-items-center">
  {steps.map((step, index) => (
    <motion.div
      key={step.id}
      className="step-wrapper mb-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {index !== 0 && (
        <div className="step-arrow">
          <FaArrowDown />
        </div>
      )}

      <div className="step-card">
        <div className="step-number">{step.id}</div>
        <h5 className="step-title">{step.title}</h5>

        {index === 2 && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Download on Play Store"
            className="img-fluid playstore-img"
          />
        )}
      </div>
    </motion.div>
  ))}
</div>


            </motion.div>
          </Col>

          {/* Video Column */}
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-100"
            >
              {videoUrl ? (
                <video
                  width="100%"
                  height="auto"
                  controls
                  muted
                  autoPlay
                  loop
                  className="rounded-4 border"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p className="text-muted text-center">Video not available.</p>
              )}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StepsEarning;
