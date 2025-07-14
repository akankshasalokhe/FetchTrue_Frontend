import React from 'react'
import './AboutUs.css'
import Testimonials from '../pages/Testimonial'
import ContentSectionPage from '../pages/ContentSection'
import OurMissionandVision from '../pages/OurMissionandVision'

function AboutUs() {
  return (
    <div>
         <div className="background-container">

      {/* Centered About Us */}
      <div className="center-text">
        <h1>About Us</h1>
      </div>
    </div>
    <ContentSectionPage/>
    <OurMissionandVision/>
    <Testimonials/>
    </div>
  )
}

export default AboutUs