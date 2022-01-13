import { useEffect, useState } from 'react'
import useTimeTravel from './hooks/timeTravel'

export default function App() {
  const {date, index, setIndex, currentDate,  setCurrentDate, handleSaveDate} = useTimeTravel()


const handleUndo = () =>{
  // prevState is the same as the current state of index
 setIndex((prevState) => {
  //returning the new index to get the new state of index
  //so the logic will need to be done when setting current date, or else one has older state than the other
  //its keeping it parallel 
  //changing the state of that index
  setCurrentDate(date[prevState - 1])
 
  //actually changing the state
  return prevState - 1}) 
}


const handleRedo = () =>{
  setIndex((prevState) =>
  {setCurrentDate(date[prevState + 1])
  return prevState + 1 }) 
 }

  return (
    <div>
      <button disabled={index <= 0}aria-label='undo' onClick={handleUndo}> Undo </button>
      <button disabled={index + 1 === date.length } aria-label='redo' onClick={handleRedo}> Redo </button>
      <input
      aria-label='currentDate' 
      type="date"
      name="date"
      value= {currentDate}
      onChange={(e) => handleSaveDate(e)}
      /> 
      <div> {currentDate} </div>
    </div>
  )
}
