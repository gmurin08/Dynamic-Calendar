/* eslint-disable react/prop-types */
import { useState} from 'react'
import './calendar.css'

export default function AppointmentType({servicesSelected, setServicesSelected, data}) {
 const {eid,name,description,price,duration_mins} = data
 const [moreInfo, setMoreInfo] = useState(false)
 
 const handleSelectedChange = () =>{
    if ((servicesSelected?.some(element => element.eid === eid))){
        setServicesSelected((current)=> current.filter(data=>data['eid'] !== eid))
    }else{
        setServicesSelected(rest=>[...rest,data])
    }
 }

 const handleMoreInfoClick = () =>{
    setMoreInfo(!moreInfo)
 }


  return (
    <div className={`appointment-picker-container ${servicesSelected?.some(element => element.eid === eid) &&
     'appointment-picker-container-selected'}`}>
        <div className="appointment-description">
            <div className="appointment-picker-title-container">
                <h4 className='appointment-description-title'>{name}</h4>
                <input key={eid} onChange={handleSelectedChange} className='appointment-picker-checkbox'
                 type="checkbox" defaultChecked={(servicesSelected?.some(element => element.eid === eid))}/>
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
