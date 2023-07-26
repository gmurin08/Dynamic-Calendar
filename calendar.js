
const wkd = ['Su','Mo','Tu','We','Th','Fr','Sa']
const mth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
dt = new Date()
//month = mth[dt.getMonth()+offset]
var offset = 0
function populateDays(){
    pivot = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`).getDay()
    left = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`)
    right = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`)
    rows[0][pivot] = new Date(`${mth[dt.getMonth()+offset]} 1, 2023`)
    var cpy = pivot
    while(cpy>0){
        cpy -= 1
        rows[0][cpy] = new Date(left.setDate(left.getDate()-1))
    }
    cpy = pivot
    while(cpy<6){
        cpy += 1
        rows[0][cpy] = new Date(right.setDate(right.getDate()+1))
    }
    for(let i = 1; i < 6; i++){
        for(let j = 0; j < 7; j ++)
        rows[i][j] = new Date(right.setDate(right.getDate()+1))
    }
}

var rows = Array(6).fill().map(() => Array(7).fill(0));
populateDays()
//console.log(rows)

function writeMonthYear(){
    console.log(mth[dt.getMonth()+offset], dt.getFullYear())
}
function writeWeekdays(){
    wkd.forEach((day)=>{
    process.stdout.write(" " + day + " ");
    })
}
function writeCalendar(){
    var dtout = ""
    for(let i = 0; i < 6; i++){
        if ( i > 0){console.log(dtout)}
        dtout = ""
        for(let j = 0; j < 7; j ++){
        dtout += " "
        dtout += rows[i][j].getDate().toString().padStart(2,'0')
        dtout += " "
        }
    }
}
function getAction(){
    console.log("\n\n---------------------------------")
    return prompt("1: Back \n2: Forward\n3: Done\n")
}


writeMonthYear()
writeWeekdays()
console.log(" ")
writeCalendar()
//var action = ""

while (true){
    if(action == '3'){ break }
    if(action == '2'){offset += 1}
    if(action == '1'){offset -= 1}
    console.clear()
    writeMonthYear()
    writeWeekdays()
    populateDays()
    writeCalendar()
    //action = user input *refactor to use state from a button
}

console.log('DONE!')