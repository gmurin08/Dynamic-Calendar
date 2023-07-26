/* eslint-disable react/prop-types */

export default function DateEntry(props) {
    const isActive = props.date.getMonth() == props.currDt.getMonth()
  return (
    <div style={isActive ? {color:"black"}:{color:"gray"}}>{props.date.getDate()}</div>
  )
}
