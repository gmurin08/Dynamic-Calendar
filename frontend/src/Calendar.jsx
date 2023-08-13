
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import DateEntry from "./DateEntry"
import './calendar.css'

//import { times } from "../../times"
import back from './assets/left-arrow.png'
import forward from './assets/right-arrow.png'
import DailySchedule from "./DailySchedule"
import { useOutletContext } from "react-router-dom"

export default function Calendar() {
    const wkd = ['Su','Mo','Tu','We','Th','Fr','Sa']
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [offset,setOffset] = useState(0)
    const [rows,setRows] = useState(Array(6).fill().map(() => Array(7).fill(0)))
    const [done, setDone] = useState(false)
    const [currDt, setCurrDt] = useState(new Date());
    const [dtSelected, setDtSelected] = useState(null);
    //TODO: handle logic for conditional dates based on locationSelected and servicesSelected context.
    const [dateTimeSelected, setDateTimeSelected] = useOutletContext()

    const handleMonthButtonClick = inc =>{
        setOffset(offsetAmt => offsetAmt + inc)
    }

    //TODO: Set default date to first available appointment on a given month at each rerender
    useEffect(()=>{
        var { updatedDt, updatedCalendar} = assignDates()
        setCurrDt(updatedDt)
        setRows(updatedCalendar)
        setDone(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[offset])

if(done){

    return (<>
    <div className="calendar">
        <div className="cal-ctr">
            <div className="front">
                <table>
                    <thead>
                        <tr className="head-container">
                            <th colSpan={100}><u><h1 className="date-h1">{mth[currDt.getMonth()] + " " + currDt.getFullYear()}</h1></u></th>
                        </tr>
                        <tr className="days">
                            {wkd.map((day, d)=>{
                                return(<th key={d}>{day}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row,i)=>{
                            return(<tr key={i}>{
                                row.map((col,j)=>{
                                return(
                                    <td key={j}>
                                        <DateEntry key={j} activeDt={dtSelected} dateTimeSelected={dateTimeSelected} setDateTimeSelected={setDateTimeSelected}
                                        setDtSelected={setDtSelected} currDt={currDt} date={col}/>
                                    </td>
                                        )
                            })
                            }
                                </tr>)
                        })}
                    </tbody>
                </table>
                <div className="btn-container">
                <button className='calendar-nav-btn' onClick={()=>handleMonthButtonClick(-1)}><img className='arrow'  src={back}/></button>
                <button className='calendar-nav-btn' onClick={()=>handleMonthButtonClick(1)}><img className='arrow' src={forward}/></button>

            </div>
            <div className="schedule-container">
            {dtSelected && 
                
                <DailySchedule setDateTimeSelected={setDateTimeSelected} dtSelected={dtSelected}/>
            }
            </div>
            </div>

        </div>
    </div>
  </>)
}

    function assignDates() {
        const dt = new Date()
        dt.setDate(1)
        dt.setMonth(dt.getMonth() + offset)
        dt.setHours(0)
        dt.setMinutes(0)
        dt.setSeconds(0)
        dt.setMilliseconds(0)
        const updatedDt = new Date(dt)
        const pivot = new Date(dt).getDay()
        const left = new Date(dt)
        const right = new Date(dt)
        let updatedCalendar = Array(6).fill().map(() => Array(7).fill(0))
        updatedCalendar[0][pivot] = new Date(dt)
        var cpy = pivot
        while (cpy > 0) {
            cpy -= 1
            updatedCalendar[0][cpy] = new Date(left.setDate(left.getDate() - 1))
        } 
        cpy = pivot
        while (cpy < 6) {
            cpy += 1
            updatedCalendar[0][cpy] = new Date(right.setDate(right.getDate() + 1))
        }
        for (let i = 1; i < 6; i++) {
            for (let j = 0; j < 7; j++)
                updatedCalendar[i][j] = new Date(right.setDate(right.getDate() + 1))
        }
        return { updatedDt, updatedCalendar}
    }
}
