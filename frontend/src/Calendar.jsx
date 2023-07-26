import { useState, useEffect } from "react"
export default function Calendar() {
    const wkd = ['Su','Mo','Tu','We','Th','Fr','Sa']
    const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dt = new Date()
    const [offset,setOffset] = useState(0)
    const [rows,setRows] = useState(Array(6).fill().map(() => Array(7).fill(0)))


    useEffect(()=>{
        const dt = new Date()
        const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const pivot = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`).getDay()
        const left = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`)
        const right = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`)
        let upd = Array(6).fill().map(()=>Array(7).fill(0))
        upd[0][pivot] = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`)
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
    },[offset])
  return (
    <div>{rows.map((row)=>{
        return(<div>{
            row.map((col)=>{
            return(<div>{col}</div>)
        })
    }</div>)
    })}</div>
  )
}
