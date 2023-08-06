/* eslint-disable react/prop-types */
import { times } from "../../times"
export default function DateEntry(props) {
    const isActive = props.date.getMonth() === props.currDt.getMonth()
    const isAvailable = times?.get(props.date.getTime())?.times?.length > 0
    //const activeStyle = {color:"blue"}
    const inactiveStyle = {color:'gray', tranform:'none'}
    const selStyle = {    
      border: 'solid rgb(87, 76, 206) 1px',
      borderRadius:'50%',
      color:'white',
      backgroundColor:'rgb(87, 76, 206)'
    }

    const activeStyle = {    
      border: 'solid rgb(87, 76, 206) 1px',
      borderRadius:' 50%',
      color:'rgb(87, 76, 206)',
      backgroundColor:'white'
    }
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
    <div className='dates' onClick={isActive && isAvailable ? ()=>props.setDtSelected(props.date):null}
     style={style}>
      {props.date.getDate()}
     </div>
  )
}
