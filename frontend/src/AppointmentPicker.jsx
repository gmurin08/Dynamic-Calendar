/* eslint-disable react/prop-types */
import { useState} from 'react'
import './calendar.css'

export default function AppointmentType({data, id}) {
 const {name,description,price,duration_mins} = data
 const [moreInfo, setMoreInfo] = useState(false)
 const handleSelectedChange = (event) =>{
    console.log(event.target.id)
 }
 const handleMoreInfoClick = () =>{
    setMoreInfo(!moreInfo)
 }
  return (
    <div className='appointment-picker-container'>
        <div className="appointment-description">
            <div className="appointment-picker-title-container">
                <h4 className='appointment-description-title'>{name}</h4>
                <input id={id} onChange={handleSelectedChange} className='appointment-picker-checkbox' type="checkbox" />
            </div>
            <div className="appointment-picker-description-price-time">
                <div className="appointment-description-price">
                    ${price} - <span className='appointment-description-time'>{duration_mins} minutes</span>
                    &nbsp; - <button className='more-info-btn' onClick={()=>handleMoreInfoClick()}>More Info</button>
                </div>
                { moreInfo === true &&
                <div className='appointment-picker-description-body'>
                    {description}
                </div>
            }
            </div>
            
        </div>
    </div>
  )
}
