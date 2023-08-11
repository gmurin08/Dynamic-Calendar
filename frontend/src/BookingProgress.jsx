import './calendar.css' 
import { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
export default function BookingSidebar() {
  const [servicesSelected, setServicesSelected] = useState([])
  const [locationSelected, setLocationSelected] = useState({})
  //cosnt [dateTimeSelected, setDateTimeSelected] = useState()
  const location = useLocation()
  const linkMap = new Map([
    ['/booking/categories','/booking/location'],
    ['/booking/location', '/booking/times'],
    ['/booking/times', '/booking/details'],
    ['/booking/details', '/booking/confirmation']
  ])
  
  return (
  <>
    <div className="progress-container">
      <div className="left">
          <div className="progress-pane">
              <div className={`progress-item ${location.pathname == '/booking/categories' && 'progress-active'}  `}>Select Services</div>
              <div className={`progress-item ${location.pathname == '/booking/location' && 'progress-active'}`}>Select Location</div>
              <div className={`progress-item ${location.pathname == '/booking/times' && 'progress-active'}`}>Select Date and Time</div>
              <div className={`progress-item ${location.pathname == '/booking/details' && 'progress-active'}`}>Enter Your Details</div>
          </div>
      </div>
      <div className="right-booking">

        <Outlet context={[servicesSelected, setServicesSelected, locationSelected, setLocationSelected]}/>
      </div>
    </div>
    <div className="lower-nav">
      <Link 
        to={linkMap.get(location.pathname)}
        className='booking-continue-a'>
        <button className='booking-continue-btn'>Continue</button>
      </Link>
    </div>
  </>
  )
}
