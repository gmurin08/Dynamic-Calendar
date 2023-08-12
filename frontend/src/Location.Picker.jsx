import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
export default function LocationPicker({location, setLocationSelected}) {
    const {l_id,name,address_1,address_2,city,state,zip,img} = location

    const handleLocationClick = () =>{
        setLocationSelected(location)
     }

  return (
    <div className={`appointment-picker-container`}>
           <div className="appointment-img">
               <img src="https://reactjs.org/logo-og.png" alt="" />
           </div> 
           <div className="appointment-description">
               <div className="appointment-picker-title-container">
                   <h4 className='appointment-description-title'>{name}</h4>
                   <Link onClick={handleLocationClick} to={'/booking/times'} className="location-selected-btn">Select Location</Link>
               </div>
               <div className="appointment-picker-description-price-time">
                {address_1}
               </div>
               {address_2 && <div className="appointment-picker-description-price-time">
                {address_2}
               </div>}
               {city && <div className="appointment-picker-description-price-time">
                {`${city}, ${state} ${zip}`}
               </div>}
           </div>
       </div>
  )
}
