import React from 'react'
import './ServicesProvider.css'
import ContactForm from '../pages/ContactForm'

function ServicesProvider() {
  return (
   <>
    <div className="background-container">

      {/* Centered Services Provider */}
      <div className="center-text">
        <h1>Services Provider</h1>
      </div>
    </div>
          <ContactForm/>
   </>

  )
}

export default ServicesProvider