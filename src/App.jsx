import { useState } from 'react'

import './App.css'

import Home from './components/Home'
import AboutUs from './components/AboutUs'
// import JoinUs from './components/JoinUs'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ServicesProvider from './components/ServicesProvider'
import BecomeOurPartner from './components/BecomeOurPartner'
import WhatsAppButton from './components/WhatsAppButton'
import OnBoarding from './components/OnBoarding'
import Business from './components/Business'
import BrandingAndMarketing from './components/BrandingAndMarketing'
import ServicePage from './pages/ServicesPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services/:id" element={<ServicePage />} />
        {/* <Route path='/services/onboarding' element={<OnBoarding/>} />
        <Route path='/services/business' element={<Business/>}/>
        <Route path='/services/branding' element={<BrandingAndMarketing/>}/> */}

        {/* <Route path="/join-us" element={<JoinUs />} /> */}
        <Route path="/join-us/services-provider" element={<ServicesProvider />} />
        <Route path="/join-us/become-our-partner" element={<BecomeOurPartner />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/services/:id" element={<ServiceDetail />} />      */}
      </Routes>

      <WhatsAppButton/>
      <Footer/>
    </BrowserRouter>

  
    </>
  )
}

export default App
