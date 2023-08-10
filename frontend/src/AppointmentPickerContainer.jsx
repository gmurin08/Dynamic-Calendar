/* eslint-disable react/prop-types */
import { services } from '../../services'
import AppointmentPicker from './AppointmentPicker'
export default function AppointmentPickerContainer({servicess}) {
    console.log(servicess)
  return (
    <div className="booking-locations-booking">
    
    {services.map((svc,i)=>{
      return (<AppointmentPicker key={i} id={i} data={svc}/>)
    })}
</div>
  )
}
