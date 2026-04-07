import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { key: 'Arto Hellas', name: 'Arto Hellas', number: '040-1234567' },
    { key: 'Ada Lovelace', name: 'Ada Lovelace', number: '39-44-5323523'},
    { key: 'Dan Abramov', name: 'Dan Abramov', number: '12-43-234345'},
    { key: 'Mary Poppendieck', name: 'Mary Poppendieck', number: '39-23-6423122'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const searchArray = newSearch === '' ? persons : persons.filter(person => person.name.includes(newSearch))

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameObject = { key: newName, name: newName, number: newNumber }

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
        alert(`${newName} is already added to phonebook`)
        return
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch}/>
      
      <PersonForm handleSubmit={handleSubmit} setNewName={setNewName} setNewNumber={setNewNumber} newName={newName} newNumber={newNumber}/>

      <h2>Numbers</h2>
      <Persons newSearch={newSearch} persons={persons} searchArray={searchArray}/>
      
    </div>
  )
}

export default App