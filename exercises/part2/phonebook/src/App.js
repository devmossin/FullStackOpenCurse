import { useEffect, useState } from 'react'

import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import personsService from './services/PersonsService'
import personService from './services/PersonsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    personsService.getAll()
    .then(initialPersons => {setPersons(initialPersons)})
  }, [])

  const addPerson = newObject => {
    personService.create(newObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    })
  }

  const deletePerson = () => {
    
  }

  const searchArray = newSearch === '' ? persons : persons.filter(person => person.name.includes(newSearch))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch}/>
      
      <PersonForm persons={persons} addPerson={addPerson}/>

      <h2>Numbers</h2>
      <Persons newSearch={newSearch} persons={persons} searchArray={searchArray}/>
      
    </div>
  )
}

export default App