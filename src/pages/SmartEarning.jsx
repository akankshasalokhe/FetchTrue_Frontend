import React from "react";
import "./SmartEarning.css";
import { FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

const SmartEarning = () => {
  return (
    <div className="smart-earning-section">
      <div className="overlay">
        <div className="content-container">
          <div className="left-column animated fadeInLeft">
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/841/016/original/india-map-outline-free-free-png.png"
              alt="Smart Earning"
            />
          </div>

          <div className="right-column animated fadeInRight">
            <h2>Every Step Towards Smart Earning</h2>
            <p>
              FetchTrue offers an online marketplace, as well as trained Growth
              Partners, in person, allowing you to use technology and trust together.
            </p>

            <div className="steps">
              <div className="step">
                <span className="step-icon"><FaRocket /></span>
                <div>
                  <h4>Step 1: Get Started</h4>
                  <p>Sign up and explore the marketplace opportunities.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-icon"><FaLightbulb /></span>
                <div>
                  <h4>Step 2: Learn & Connect</h4>
                  <p>Connect with Growth Partners and discover your potential.</p>
                </div>
              </div>
              <div className="step">
                <span className="step-icon"><FaHandshake /></span>
                <div>
                  <h4>Step 3: Earn Smart</h4>
                  <p>Use tech and trust to maximize your smart earnings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartEarning;
