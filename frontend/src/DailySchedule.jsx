/* eslint-disable react/prop-types */
import {times} from '../../times.js'
import { useState,useEffect } from 'react'
export default function DailySchedule(props) {
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [morningTimes, setMorningTimes] = useState([])
    const [afternoonTimes, setAfternoonTimes] = useState([])
    const [eveningTimes, setEveningTimes] = useState([])
    const [test,setTest] = useState([])
    const dtSelected = props.dtSelected
    useEffect(()=>{
        // Check for times here before setting to avoid undefined assignment
        setAfternoonTimes([]),setMorningTimes([]),setEveningTimes([])
        setTest(times.get(dtSelected.getTime()).times)
        if (test.length>0){
            test.forEach(time=>{
                if(time <12){
                    time = time.toString() + ":00a\n"
                    setMorningTimes(morningTimes=>[...morningTimes,time])
                }else if(time>11 && time<18){
                    if (time == 12){
                        time = "12:00p"
                    }else{
                        time = (time - 12).toString() + ":00p\n"
                    }
                    setAfternoonTimes(time)
                }else{
                    time = (time-12).toString() + ":00p\n"
                    setEveningTimes(time)
                }
            })
        }
    },[dtSelected,test])


  if(dtSelected){return (<>
    <div><b>Times Available on {mth[dtSelected.getMonth()] + ", " + props.dtSelected.getDate() + " " + dtSelected.getFullYear()}</b></div>
    <div>Morning</div>
        <div>{morningTimes}</div>
    <div>Afternoon</div>
        <div>{afternoonTimes}</div>
    <div>Evening</div>
        <div>{eveningTimes}</div>
  </>)}
}
