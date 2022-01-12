import { useState } from 'react'

export default function App() {
  const [date, setDate] = useState('');
  const [undo, setUndo] = useState('');
  const [redo, setRedo] = useState(''); 
  const [didNumberChange, setDidNumberChange] = useState('')

 
//ideally, I would like this to take in the name and set the date to the value and throw an error if nothing has been selected
//I know I will need to set the date to the value

  const handleSelect =(e) => {
    const { name, value } = e.target;
    if (name){
      setDate(value)
    } else {
      throw new Error('Select a date')
    }
    
  }

  return (
    <div>
      <button> Undo </button>
      <button> Redo </button>
      <input 
      type="date"
      name="date"
      value= {date}
      onChange={(e) => handleSelect(e)}
      /> 
      <div> {date} </div>
    </div>
  )
}
