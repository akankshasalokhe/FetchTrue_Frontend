import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import Header from './Header'
import Become from '../pages/Become'
import Behind from '../pages/Behind'
import Partners from '../pages/Partners'
import AboutServices from '../pages/AboutServices'
import Benefits from '../pages/Benefits'
import SmartEarning from '../pages/SmartEarning'
import Testimonials from '../pages/Testimonial'
import StepsEarning from '../pages/StepsEarning'

function Home() {
  return (
    <div>
        <BackgroundVideo/>
        {/* <Header/> */}
              <div style={{ height: '100vh' }}></div>
        <Become/>
        <Behind/>
        <Partners/>
        <AboutServices/>
        <Benefits/>
        <SmartEarning/>
        <StepsEarning/>
        <Testimonials/>
    </div>
  )
}

export default Home

