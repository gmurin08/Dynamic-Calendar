import './calendar.css' 
import { useState } from 'react'
import { services } from '../../services'
import { Outlet } from 'react-router-dom'
export default function BookingSidebar() {
  const [servicesSelected, setServicesSelected] = useState('test')

  return (
  <>
    <div className="progress-container">
      <div className="left">
          <div className="progress-pane">
              <div className={`progress-active `}>Select Services</div>
              <div className={'progress-item test'}>Select Location</div>
              <div className={'progress-item'}>Select Date and Time</div>
              <div className={'progress-item'}>Enter Your Details</div>
          </div>
      </div>
      <div className="right-booking">
        <div className='landing-title-container'>
          <h3>Book an appointment</h3>
        </div>
        <Outlet context={services}/>
      </div>
    </div>
    <div className="lower-nav">
      <button className='booking-continue-btn'>Continue</button>
    </div>
  </>
  )
}
