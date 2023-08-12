/* eslint-disable react/prop-types */
import {times} from '../../times.js'
import { useState,useEffect } from 'react'
export default function DailySchedule({setDateTimeSelected, ...props}) {
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [morningTimes, setMorningTimes] = useState([])
    const [afternoonTimes, setAfternoonTimes] = useState([])
    const [eveningTimes, setEveningTimes] = useState([])
    const [timesArr,setTimesArr] = useState([])
    const dtSelected = props.dtSelected

    useEffect(()=>{
        // Check for times here before setting to avoid undefined assignment
        setAfternoonTimes([]),setMorningTimes([]),setEveningTimes([])
        setTimesArr(times.get(dtSelected.getTime()).times)
        if (timesArr.length>0){
            timesArr.forEach(time=>{
                if(time <12){
                    time = time.toString() + ":00a\n"
                    setMorningTimes(morningTimes=>[...morningTimes,time])
                }else if(time>11 && time<18){
                    if (time == 12){
                        time = "12:00p"
                    }else{
                        time = (time - 12).toString() + ":00p \n"
                    }
                    setAfternoonTimes(afternoonTimes=>[...afternoonTimes,time])
                }else{
                    time = (time-12).toString() + ":00p \n"
                    setEveningTimes(eveningTimes=>[...eveningTimes,time])
                }
            })
        }
    },[dtSelected,timesArr])


  if(dtSelected){return (<>
    <div className="title-container">
    <h2>Availability on &nbsp;
         <span className='date-span'>{mth[dtSelected.getMonth()] + " " + 
        props.dtSelected.getDate() + ", " + dtSelected.getFullYear()}
        </span>
    </h2>
    
    <h3>Morning</h3>
    <div className="time-container">
        {morningTimes?.length > 0  ? morningTimes.map((time,i)=>{
            return <div className='time-box' key={i}>{time}</div>
        }):(<div className='booked-box'>Booked</div>)}
    </div>
    <h3>Afternoon</h3>
    <div className="time-container">
    {afternoonTimes?.length > 0  ? afternoonTimes.map((time,i)=>{
            return <div className='time-box' key={i}>{time}</div>
        }):(<div className='booked-box'>Booked</div>)}
    </div>
    <h3>Evening</h3>
    <div className="time-container">
    {eveningTimes?.length > 0 ? eveningTimes.map((time,i)=>{
            return <div className='time-box' key={i}>{time}</div>
        }):(<div className='booked-box'>Booked</div>)}
    </div>
    </div>
  </>)}
}
