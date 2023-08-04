
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import DateEntry from "./DateEntry"
//import './calendar.css'
import DailySchedule from "./DailySchedule"
export default function Calendar() {
    const wkd = ['Su','Mo','Tu','We','Th','Fr','Sa']
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [offset,setOffset] = useState(0)
    const [rows,setRows] = useState(Array(6).fill().map(() => Array(7).fill(0)))
    const [done, setDone] = useState(false)
    const [currDt, setCurrDt] = useState(new Date());
    const [dtSelected, setDtSelected] = useState(null);

    const handleMonthButtonClick = inc =>{
        setOffset(offsetAmt=>offsetAmt+inc)
    }

    useEffect(()=>{
        const dt = new Date()
        dt.setDate(1)
        dt.setMonth(dt.getMonth()+offset)
        dt.setHours(0)
        dt.setMinutes(0)
        dt.setSeconds(0)
        dt.setMilliseconds(0)
        const updatedDt = new Date(dt)
        const pivot = new Date(dt).getDay()
        const left = new Date(dt)
        const right = new Date(dt)
        let updatedCalendar = Array(6).fill().map(()=>Array(7).fill(0))
        updatedCalendar[0][pivot] = new Date(dt)
        var cpy = pivot
        while(cpy>0){
            cpy -= 1
            updatedCalendar[0][cpy] = new Date(left.setDate(left.getDate()-1))
        }
        cpy = pivot
        while(cpy<6){
            cpy += 1
            updatedCalendar[0][cpy] = new Date(right.setDate(right.getDate()+1))
        }
        for(let i = 1; i < 6; i++){
            for(let j = 0; j < 7; j ++)
            updatedCalendar[i][j] = new Date(right.setDate(right.getDate()+1))
        }
        setCurrDt(updatedDt)
        setRows(updatedCalendar)
        setDone(true)
    },[offset])


    if(done)
 
  {
    return (<>
    <div className="flip-card">
        <div className="card-front">
            <div className="front">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={100}><h1>{mth[currDt.getMonth()] + " " + currDt.getFullYear()}</h1></th>
                        </tr>
                        <tr >
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
                                        <DateEntry key={j} activeDt={dtSelected} 
                                        setDtSelected={setDtSelected} currDt={currDt} date={col}/>
                                    </td>
                                        )
                            })
                            }
                                </tr>)
                        })}
                    </tbody>
                </table>
                <button onClick={()=>handleMonthButtonClick(-1)}>Prev</button>
                <button onClick={()=>handleMonthButtonClick(1)}>Next</button>
            
            </div>

            {dtSelected && 
                <DailySchedule dtSelected={dtSelected}/>
            }
            
        </div>
    </div>
  </>)}
}
