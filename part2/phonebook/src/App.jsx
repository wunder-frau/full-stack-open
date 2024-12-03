import { useState } from 'react'
import './App.css'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputFilter, setInputFilter] = useState('')

  const handleFilterInput =(e)=> {
    setInputFilter(e.target.value)
  }

  const handleNameInput =(e)=> {
    if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
      setNewName(e.target.value);
    } else {
      console.log('Invalid input, only alphabetical characters and spaces are allowed.');
    }
  }

  const handleNumberInput =(e)=> {
    setNewNumber(e.target.value)
  }

  const handleAddPerson =(e)=> {
    e.preventDefault();
    const newPerson = {name: newName, number: newNumber}
    if (persons.every(person => person.name !== newName))
      setPersons([...persons, newPerson])
    else
      alert(`${newName} is already added to phonebook`)
    setNewName("")
    setNewNumber("")
  }


    const filteredNames = persons.filter(person => person.name.toLowerCase().includes(inputFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
        filter shown with <input
          type="text"
          id="filter"
          name="filter"
          value={inputFilter}
          autoComplete="off"
          onChange={handleFilterInput}/>
        </div>
      </form>
      <h3>Add a new</h3>
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
          number: <input
          type="number"
          id="number"
          name="number"
          required
          value={newNumber}
          autoComplete="off"
          onChange={handleNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredNames.map((person, index) => (
          <li key={index}>{person.name}-{person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App