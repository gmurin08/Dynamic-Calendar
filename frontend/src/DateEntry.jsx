/* eslint-disable react/prop-types */

export default function DateEntry(props) {
    const isActive = props.date.getMonth() == props.currDt.getMonth()
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
    if(!isActive){
      style = inactiveStyle
    }
  return (
    <div onClick={isActive ? ()=>props.setDtSelected(props.date):null}
     style={style}>
      {props.date.getDate()}
     </div>
  )
}
