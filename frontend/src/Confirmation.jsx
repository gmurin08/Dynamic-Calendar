import { useOutletContext } from "react-router-dom"
import ConfirmationTable from "./ConfirmationTable"
export default function Confirmation() {
    const [servicesSelected, setServicesSelected,
        locationSelected, setLocationSelected,
        dateTimeSelected, setDateTimeSelected] = useOutletContext()

        console.log(servicesSelected)
        console.log(locationSelected)
        console.log(dateTimeSelected)
  return (<>
    <h3>Almost Done. Enter Your Details Below</h3>
    <div>Appointment held for 10:00</div>
    <ConfirmationTable/>
    <div>Refunds and cancellations are subject to the cancellation policy of (customer)
    Please contact (customer) to learn more about their privacy practices.</div>

    <button>Book Appointment</button>

    <div>By creating this appointment, you acknoledge that you will receive automated transational messages (customer)</div>
  </>)
}
