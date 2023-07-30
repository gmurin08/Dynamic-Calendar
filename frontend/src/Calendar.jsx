import { useState, useEffect } from "react"
import DateEntry from "./DateEntry"
import './calendar.css'
import DailySchedule from "./DailySchedule"
export default function Calendar() {
    const wkd = ['Su','Mo','Tu','We','Th','Fr','Sa']
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [offset,setOffset] = useState(0)
    const [rows,setRows] = useState(Array(6).fill().map(() => Array(7).fill(0)))
    const [done, setDone] = useState(false)

    const dt = new Date()
    const currDt = new Date(dt.setMonth(dt.getMonth()+offset))
    const [dtSelected,setDtSelected] = useState(null)
    //const [year,setYear] = useState(new Date().getFullYear())
    const handleMonthButtonClick = inc =>{
        setOffset(offset+inc)
    }

    useEffect(()=>{
        const dt = new Date()
        const currDt = new Date(dt.setMonth(dt.getMonth()+offset))
        const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const pivot = new Date(`${mth[currDt.getMonth()]} 1, ${currDt.getFullYear()}`).getDay()
        const left = new Date(`${mth[currDt.getMonth()]} 1, ${currDt.getFullYear()}`)
        const right = new Date(`${mth[currDt.getMonth()]} 1, ${currDt.getFullYear()}`)
        let upd = Array(6).fill().map(()=>Array(7).fill(0))
        upd[0][pivot] = new Date(`${mth[currDt.getMonth()]} 1, ${currDt.getFullYear()}`)
        var cpy = pivot
        while(cpy>0){
            cpy -= 1
            upd[0][cpy] = new Date(left.setDate(left.getDate()-1))
        }
        cpy = pivot
        while(cpy<6){
            cpy += 1
            upd[0][cpy] = new Date(right.setDate(right.getDate()+1))
        }
        for(let i = 1; i < 6; i++){
            for(let j = 0; j < 7; j ++)
            upd[i][j] = new Date(right.setDate(right.getDate()+1))
        }
        setRows(upd)
        setDone(true)
    },[offset])
    if(done)
  {return (<>
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
            {/* <div className="card-back">
                <h1>{mth[currDt.getMonth()] + ", " + currDt.getDay() + " " + currDt.getFullYear()}</h1>
            </div> */}
            {dtSelected && 
                <DailySchedule dtSelected={dtSelected}/>
            }
            
        </div>
    </div>
  </>)}
}
