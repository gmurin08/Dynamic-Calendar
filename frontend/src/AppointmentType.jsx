/* eslint-disable react/prop-types */
import './calendar.css'
import { Link } from 'react-router-dom'

export default function AppointmentType({data}) {
 const {name,description,price,duration_mins} = data
  return (
    <Link style={{color:'inherit', textDecoration:'none'}} to={'../booking'}>
    <div className='appointment-type-container'>
        <div className="appointment-description">
            <h4 className='appointment-description-title'>{name}</h4>
            {
                <div className='appointment-description-body'>
                    {description}
                </div>
            }
            <div className="appointment-description-price-time">
                <div className="appointment-description-price">
                    ${price} - <span className='appointment-description-time'>{duration_mins} minutes</span>
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
