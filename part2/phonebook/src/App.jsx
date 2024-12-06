import { useState, useEffect } from 'react'
import './App.css'
import InputField from './InputField.jsx'
import PersonForm from './PersonForm.jsx'
import Persons from './Persons.jsx'
import personsService from './personsService.jsx'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [inputFilter, setInputFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
      .catch(error => {
        console.error('Error fetching persons:', error);
      });
  }, [])

  const deletePerson =(person)=> {
    if (window.confirm(`Delete ${person.name}?`)) {
    personsService
      .remove(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
      .catch(error => {
        console.error('Error deleting person:', error);
      });
    }
  }

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

  const addPerson =(newPerson)=> {
    personsService
    .create(newPerson)
    .then(response => {
        setPersons([...persons, response])
        setNewName("")
        setNewNumber("")
    })
    .catch(error => {
      console.error('Error adding person:', error);
    });
  }

  const updatePerson =(person, newPerson)=> {
    personsService
      .update(person.id, newPerson)
      .then(response => {
        setPersons(persons.map(p => p.id === person.id ? response : p))
        setNewName("")
        setNewNumber("")
    })
    .catch(error => {
      console.error('Error updating person:', error);
    });
  }

  const onSubmit =(e)=> {
    e.preventDefault();
    const newPerson = {name: newName, number: newNumber}
    if (persons.some(person => person.name === newName)) {
      const person = persons.find(p =>  p.name === newName);
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        {
        updatePerson(person, newPerson);
      }
    }
    else
      addPerson(newPerson);
  }

  const filteredNames = persons.filter(person => person.name && person.name.toLowerCase().includes(inputFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <InputField
        type="text"
        label='filter shown with'
        value={inputFilter}
        onChange={handleFilterInput}
        id="filter"/>
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={onSubmit}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      <Persons filteredNames={filteredNames} deletePerson={deletePerson}/>
    </div>
  )
}

export default App