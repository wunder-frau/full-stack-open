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

  const handleAddPerson =(e)=> {
    e.preventDefault();
    const newPerson = {name: newName}
    setPersons([...persons, newPerson])
    setNewName("")
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={handleAddPerson}>
        <div>
          name: <input
          type="text"
          id="name"
          name="name"
          required
          value={newName}
          autoComplete="off"
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