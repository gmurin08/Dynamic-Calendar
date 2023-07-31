import { useState } from "react";
import Calendar from "./Calendar"
function App() {
  const [currDt, setCurrDt] = useState(new Date());
  const [dtSelected, setDtSelected] = useState(null);
  return (
    <>
      <Calendar currDt={currDt} setCurrDt={setCurrDt} dtSelected={dtSelected} setDtSelected={setDtSelected} />
    </>
  )
}

export default App
