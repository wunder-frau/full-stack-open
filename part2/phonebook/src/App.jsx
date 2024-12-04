import { useState, useEffect } from 'react'
import './App.css'
import InputField from './InputField.jsx'
import PersonForm from './PersonForm.jsx'
import Persons from './Persons.jsx'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputFilter, setInputFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
    axios
      .post('http://localhost:3001/persons', newPerson)
      .then(response => {
        if (persons.every(person => person.name !== newName))
          setPersons([...response.data, newPerson])
        else
          alert(`${newName} is already added to phonebook`)
      })
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