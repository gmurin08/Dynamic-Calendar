/* eslint-disable react/prop-types */
import { services } from '../../services'
import AppointmentPicker from './AppointmentPicker'
import { useOutletContext } from 'react-router-dom'
export default function AppointmentPickerContainer() {
    const [servicesSelected, setServicesSelected,
      locationSelected, setLocationSelected,
      dateTimeSelected, setDateTimeSelected] = useOutletContext()
    
  return (<>
    <div className='landing-title-container'>
    <h3 className='booking-title'>Select One or More Services</h3>
    </div>
    <div className="booking-locations-booking">
    
      {services.map((svc,i)=>{
        return (<AppointmentPicker 
                    servicesSelected={servicesSelected}
                    setServicesSelected={setServicesSelected}
                    key={i} id={i} data={svc}/>)
      })}
    </div>
  </>)
}
