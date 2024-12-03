import { useState } from 'react'
import './App.css'
import InputField from './InputField.jsx'
import PersonForm from './PersonForm.jsx'
import Persons from './Persons.jsx'

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
      <InputField
        type="text"
        label='filter shown with'
        value={inputFilter}
        onChange={handleFilterInput}
        autoComplete="off"/>
      <h3>Add a new</h3>
      <PersonForm
        handleAddPerson={handleAddPerson}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames}/>
    </div>
  )
}

export default App