import { useEffect, useState } from 'react'
import useTimeTravel from './hooks/timeTravel'

export default function App() {
  const [date, index, setIndex, currentDate, setCurrentDate, handleSaveDate] = useTimeTravel()


  //the first option could be to incriment or decrimate the index and then set the currentDate to that index date[index] (will have to do this for both)

  //a useEffect that takes then set the currentDate to that index date[index] (keeps track once)
// useEffect(() => {
//   //undo 
//   if (index - 1){
//     setUndo(index)
//     //redo
//   } else if (index + 1) {
//     setRedo(index)
//   }
//   return currentDate[index]
// })

const handleUndo = () =>{
 setIndex(index - 1) 
 setCurrentDate(date[index])

}

const handleRedo = () =>{
  setIndex(index + 1) 
  setCurrentDate(date[index])
 
 }

 
//ideally, I would like this to take in the name and set the date to the value and throw an error if nothing has been selected
//I know I will need to set the date to the value

//index/pointer where we are at. the index points at where we should be at depending on what is being displayed

//save the items in an array
//then add the pointer

  // const handleSelect =(e) => {
  //   const { name, value } = e.target;
  //   if (name){
  //     setDate(value)
  //   } else {
  //     throw new Error('Select a date')
  //   }
    
  // }




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
