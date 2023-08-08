import './calendar.css' 
import {services} from '../../services.js'
import AppointmentPicker from './AppointmentPicker'
import Navbar from './Navbar'

export default function BookingSidebar() {
  return (<>
    <Navbar/>
    <div className="landing-container">
    <div className="left">
        {/* <div className="logo-container">
            <img className='logo-img' src={profile} alt="Logo Image" />
        </div>
        <h2>ABC Photgraphy Co.</h2>
        <button className='book-btn'>Book an Appointment</button>
        <div className="landing-notes">
        Downtown Studio is in the William Penn Hotel. Headshot and Portrait Photography
        </div>
        <h4>Location & Hours</h4>
        <div className="map-container">
        <img src={map} alt="" />
        </div>
        <div className="address-container">
        <div className="location-icon-container">
            <img className='location-icon' src={location} alt="" />
        </div>
        <div className="address">
            <div className="street">
            417 North Ave
            </div>
            <div className="city">
            Pittsburgh, PA 15209
            </div>
        </div>
        </div>
        <div className="address-container">
        <div className="location-icon-container">
            <img src={hours} alt="Business Hours Icon" className="location-icon" />
        </div>
        <div className="todays-hours">Open Today</div>
        <div className="schedule-days"></div>
        </div> */}
        <div className="progress-pane">
            <div>Select Services</div>
            <div>Select Location</div>
            <div>Select Date and Time</div>
            <div>Enter Your Details</div>
        </div>
    </div>
    <div className="right-booking">
      <div className='landing-title-container'>
        <h3>Book an appointment</h3>
      </div>
      <div className="booking-locations-booking">
        {/* <button className='landing-location-btn'>Downtown</button>
        <button className='landing-location-btn'>On-Location</button> */}
        {services.map((svc,i)=>{
          return (<AppointmentPicker key={i} data={svc}/>)
        })}

      </div>
    </div>
</div>
  </>)
}
