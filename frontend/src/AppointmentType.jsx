import './calendar.css'
import { Link } from 'react-router-dom'

export default function AppointmentType({name,description,price,duration_mins}) {
    const cost = "$" + price
  return (
    <Link style={{color:'inherit', textDecoration:'none'}} to={'schedule/'}>
    <div className='appointment-type-container'>
        <div className="appointment-description">
            <h4 className='appointment-description-title'>Classic Headshot, in Studio</h4>
            <div className='appointment-description-body'>
                Efficient sessions to get an amazing photo. Up to 15 minutes max. Immediate photo proofing.
                One finished image, retouched with licensing included. Additional images are $85 each.
                
            </div>
            <div className="appointment-description-price-time">
                <div className="appointment-description-price">
                    $175 - <span className='appointment-description-time'>15 minutes</span>
                </div>
            </div>
        </div>
        <div className="appointment-cta">
            Book Now
        </div>
    </div>
    </Link>
  )
}
