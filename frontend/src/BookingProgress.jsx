import './calendar.css' 
import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
export default function BookingSidebar() {
  const [servicesSelected, setServicesSelected] = useState([])
  const [locationSelected, setLocationSelected] = useState({})
  const [dateTimeSelected, setDateTimeSelected] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
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

        <Outlet context={[servicesSelected, setServicesSelected,
                          locationSelected, setLocationSelected,
                          dateTimeSelected, setDateTimeSelected]}/>
      </div>
    </div>
    <div className="lower-nav">
    <div className="lower-nav-left">
        {location.pathname != '/booking/categories' && <Link 
          to={'..'}
          onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
          className='booking-back-a'>
          <button className='booking-back-btn'>Back</button>
        </Link>}
      </div>
      <div className="lower-nav-right">
        {(location.pathname == '/booking/categories' && servicesSelected.length > 0)&& <Link 
          to={linkMap.get(location.pathname)}
          className='booking-continue-a'>
          <button className='booking-continue-btn'>Continue</button>
        </Link>}
      </div>
    </div>
  </>
  )
}
