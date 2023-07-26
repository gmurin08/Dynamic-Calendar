import { useState, useEffect } from "react"
import DateEntry from "./DateEntry"
export default function Calendar() {
    const wkd = ['Su','Mo','Tu','We','Th','Fr','Sa']
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [offset,setOffset] = useState(0)
    const [rows,setRows] = useState(Array(6).fill().map(() => Array(7).fill(0)))
    const [done, setDone] = useState(false)
    //const [year,setYear] = useState(new Date().getFullYear())
    const date = new Date()
    const handleMonthButtonClick = inc =>{
        setOffset(offset+inc)
    }
    useEffect(()=>{
        const dt = new Date()
        const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const pivot = new Date(`${mth[dt.getMonth()+offset]} 1, ${new Date(dt.setMonth(dt.getMonth()+offset)).getFullYear()}`).getDay()
        const left = new Date(`${mth[dt.getMonth()+offset]} 1, ${new Date(dt.setMonth(dt.getMonth()+offset)).getFullYear()}`)
        const right = new Date(`${mth[dt.getMonth()+offset]} 1, ${new Date(dt.setMonth(dt.getMonth()+offset)).getFullYear()}`)
        let upd = Array(6).fill().map(()=>Array(7).fill(0))
        upd[0][pivot] = new Date(`${mth[dt.getMonth()+offset]} 1, ${new Date(dt.setMonth(dt.getMonth()+offset)).getFullYear()}`)
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
    <div>
    <tr>
    <th colSpan={100}>{mth[new Date().getMonth()+offset] + " " + new Date(date.setMonth(date.getMonth()+offset)).getFullYear()}</th>
    </tr>
    <tr>
        {wkd.map((day, d)=>{
            return(<th key={d}>{day}</th>)
        })}
    </tr>
    {rows.map((row,i)=>{
        return(<tr key={i}>{
            row.map((col,j)=>{
            return(<td key={j}><DateEntry key={j} date={col}/></td>)
        })
    }</tr>)
    })}
    <button onClick={()=>handleMonthButtonClick(-1)}>Prev</button>
    <button onClick={()=>handleMonthButtonClick(1)}>Next</button>
  </div></>)}
}
