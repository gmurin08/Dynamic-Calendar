/* eslint-disable react/prop-types */
import { times } from "../../times"
export default function DateEntry(props) {
    const isActive = props.date.getMonth() == props.currDt.getMonth()
    const isAvailable = times?.get(props.date.getTime())?.times?.length > 0
    const activeStyle = {color:"black"}
    const inactiveStyle = {color:'gray'}
    const selStyle = {color:'red'}
    const isSelected = props.date == props.activeDt
    let style = {}
    if (isActive){
      style = activeStyle
    }
    if (isActive && isSelected){
      style = selStyle
    }
    if((!isActive)||(isActive && !isAvailable)){
      style = inactiveStyle
    }
    
  return (
    <div onClick={isActive && isAvailable ? ()=>props.setDtSelected(props.date):null}
     style={style}>
      {props.date.getDate()}
     </div>
  )
}
