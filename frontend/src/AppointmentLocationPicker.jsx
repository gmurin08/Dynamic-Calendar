import { useOutletContext } from "react-router-dom"
import { locations } from "../../locations"
import LocationPicker from "./Location.Picker"

export default function AppoinmnetLocationPicker() {
  const [servicesSelected, setServicesSelected,
    locationSelected, setLocationSelected,
    dateTimeSelected, setDateTimeSelected] = useOutletContext()
  
  return (
    <div className='landing-title-container'>
      <h3 className="booking-title">Select a Location</h3>
      {locations.map((loc,i)=>{
          return <LocationPicker key={i} location={loc} locationSelected={locationSelected} setLocationSelected={setLocationSelected}/>
      })}
    </div>
  )
}
