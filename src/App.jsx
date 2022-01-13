import { useEffect, useState } from 'react'
import useTimeTravel from './hooks/timeTravel'

export default function App() {
  const [date, index, setIndex, currentDate, setCurrentDate, handleSaveDate] = useTimeTravel()


const handleUndo = () =>{
 setIndex(index - 1) 
 setCurrentDate(date[index])

}

const handleRedo = () =>{
  setIndex(index + 1) 
  setCurrentDate(date[index])
 
 }

  return (
    <div>
      <button onClick={handleUndo}> Undo </button>
      <button onClick={handleRedo}> Redo </button>
      <input 
      type="date"
      name="date"
      value= {currentDate}
      onChange={(e) => handleSaveDate(e)}
      /> 
      <div> {currentDate} </div>
    </div>
  )
}
