import { useState } from 'react'
import './App.css'
import Name from './Name.jsx'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const handleNameInput =(e)=> {
    setNewName(e.target.value)
  }

  // const handleAddPerson =(e)=> {
  //   e.preventDefault();
  // }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Name persons={persons} />
    </div>
  )
}

export default App