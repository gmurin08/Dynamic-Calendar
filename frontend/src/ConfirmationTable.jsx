
export default function ConfirmationTable() {
  return (
    <div className="conf-tbl-container">
    <div className="conf-tbl-1">
        <div className="conf-tbl-country">
            <select className="conf-tbl-country-select" name="countries" id="country">
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
            </select>
        </div>
        <div className="conf-tbl-phone">
            <input className="conf-tbl-phone-input" type="text" placeholder={'(000) 000-0000'}/>
        </div>
    </div>
    <div className="conf-tbl-2">
        <div className="conf-tbl-email">
            <input className="conf-tbl-email-input" type="text" placeholder={"Email"} />
        </div>
    </div>
    <div className="conf-tbl-3">
        <div className="conf-tbl-fname">
            <input className="conf-tbl-fname-input" type="text" placeholder={"First Name"} />
        </div>
        <div className="conf-tbl-lname">
        <input className="conf-tbl-lname-input" type="text" placeholder={"Last Name"} />
        </div>
    </div>
    <div className="conf-tbl-4">
        <div className="conf-tbl-notes">
            <textarea className="conf-tbl-textarea" name="notes" id="notes" cols="30" rows="3" placeholder={"Appointment Notes (Optional)"}></textarea>
        </div>
    </div>
</div>
  )
}
