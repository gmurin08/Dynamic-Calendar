import { useOutletContext } from "react-router-dom"
import { locations } from "../../locations"
import LocationPicker from "./Location.Picker"

export default function AppoinmnetLocationPicker() {
  const [servicesSelected,locationsSelected,setLocationSelected] = useOutletContext()

  return (
    <div className='landing-title-container'>
      <h3 className="booking-title">Select a Location</h3>
      {locations.map((loc,i)=>{
          return <LocationPicker key={i} location={loc}/>
      })}
    </div>
  )
}
