/* eslint-disable react/prop-types */
import {times} from '../../times.js'
import { useState,useEffect } from 'react'
export default function DailySchedule(props) {
    // const [morningTimes, setMorningTimes] = useState([])
    // const [afternoonTimes, setAfternoonTimes] = useState([])
    // const [eveningTimes, setEveningTimes] = useState([])
    const [test,setTest] = useState()
    const dtSelected = props.dtSelected
    useEffect(()=>{
        setTest(times.get(dtSelected.getTime()))
        console.log(test)
    },[dtSelected,test])
  return (<>
    {/* <div>Morning</div>
        <div>{morningTimes}</div>
    <div>Afternoon</div>
        <div>{afternoonTimes}</div>
    <div>Evening</div>
        <div>{eveningTimes}</div> */}
  </>)
}
