import './calendar.css' 
import profile from './assets/google.png'
import map from './assets/map.png'
import location from './assets/location.png'
import hours from './assets/schedule.png'
import Calendar from './Calendar'
import Navbar from './Navbar'

export default function BookingSidebar() {
  return (<>
    <Navbar/>
    <div className="landing-container">
    <div className="left">
        <div className="logo-container">
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
        </div>
    </div>
</div>
  </>)
}
