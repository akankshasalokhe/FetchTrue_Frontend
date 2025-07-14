import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    // Replace with your actual backend API URL
    fetch("/api/modules")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch modules");
        return response.json();
      })
      .then((data) => setModules(data))
      .catch((err) => console.error("Error fetching modules:", err));
  }, []);

  return (
    <div className="container-contact-form">
        <div className="contact-page py-5">
      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-title">Connect with our Service Team</h2>
        <p className="contact-description">
          Have a question or need support? Our expert service team is ready to assist you. 
          Whether it’s troubleshooting, guidance, or general inquiries, we’re here to provide prompt 
          and reliable solutions. Reach out to us today—we’re happy to help!
        </p>
      </motion.div>

      <motion.form 
        className="row g-4 contact-form" 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="col-md-4">
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="first name" />
        </div>
        <div className="col-md-4">
          <label>Middle Name</label>
          <input type="text" className="form-control" placeholder="middle name" />
        </div>
        <div className="col-md-4">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="last name" />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
        <div className="col-md-6">
          <label>Phone Number</label>
          <input type="tel" className="form-control" placeholder="phone number" />
        </div>
        <div className="col-md-6">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="address" />
        </div>
        <div className="col-md-6">
          <label>Module</label>
          <select className="form-select" defaultValue="">
            <option disabled value="">Select Module</option>
            {modules.map((module) => (
              <option key={module._id} value={module._id}>
                {module.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <label>Message</label>
          <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
        </div>
        <div className="col-12 text-center">
          <motion.button 
            type="submit" 
            className="btn btn-primary px-5 py-2 contact-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      </motion.form>
    </div>
    </div>
    
  );
};

export default ContactForm;
