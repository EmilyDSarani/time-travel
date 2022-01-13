import { useEffect, useState } from 'react'


export default function useTimeTravel() {
const [date, setDate] = useState([]);
const [index, setIndex] = useState(-1)
const [currentDate, setCurrentDate] = useState('')

    const handleSaveDate = (e) =>{
    //setting the name and value to the e.target
    //pulling off the value from event (which is a date as a string because it is coming from the input field)
   const {value} = e.target;
   //set the current date to the value of that target
   //this finished that controlled input loop, it is making the input works with state.
   setCurrentDate(value)
   //setDate to the prev of the name and value
   //we are taking that same value and popping into the end of this array. We are trying to track what index we are at because that index is how we nav. 

   setDate((prevState)=> {return[ ...prevState.slice(0, (index + 1)), value, ...prevState.slice((index + 1), date.length + 1)] })

   //keep this in mind when changing state based on saved state
   setIndex((prevState) => prevState + 1)


   //Forming idea
  //if condition, then setIndex to date.length
   // if index is less than the current length, then add 1 else setIndex
   //else set index to + 1

//Idea 1
   // setDate((prevState)=>{ return[ ...prevState.slice(0, (index + 1), date.length + 1), value]
   //})
  //setIndex(date.length + 1)

//Idea 2
  //  if(currentDate){
  //  setIndex(date.length)
  //  } else {
  //    setIndex(value.slice(...date.length),
  //    [index].join = value.join(''))
  //  }




   //not sure if this is needed, because it SHOULD be at 0 and it SHOULD incrimate to 1
  //  if (index === 0){
  //    setCurrentDate(date [index]);
  //  }
  }
  return [date, index, setIndex, currentDate, setCurrentDate, handleSaveDate]
}