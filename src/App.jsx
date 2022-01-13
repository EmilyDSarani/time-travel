import { useEffect, useState } from 'react'

export default function App() {
  const [date, setDate] = useState([]);
  const [index, setIndex] = useState(-1)
  const [currentDate, setCurrentDate] = useState('')


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


  const handleSaveDate = (e) =>{
    //setting the name and value to the e.target
    //pulling off the value from event (which is a date as a string because it is coming from the input field)
   const {value} = e.target;
   //set the current date to the value of that target
   //this finished that controlled input loop, it is making the input works with state.
   setCurrentDate(value)
   //setDate to the prev of the name and value
   //we are taking that same value and popping into the end of this array. We are trying to track what index we are at because that index is how we nav. 
   setDate((prevState)=>{ return[ ...prevState, value]
   })
   //set the index to the length of that date
   //so we just incriminating the index because we want to be able to follow where it is at
   setIndex(date.length)

   //if condition, then setIndex to date.length
   // if index is less than the current length, then add 1 else setIndex
   //else set index to + 1



   //not sure if this is needed, because it SHOULD be at 0 and it SHOULD incrimate to 1
  //  if (index === 0){
  //    setCurrentDate(date [index]);
  //  }
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
