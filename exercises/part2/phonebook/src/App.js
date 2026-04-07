import { useState } from 'react'

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

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }

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
      <p>
        search: <input value={newSearch} onChange={handleSearchChange}/>
      </p>
      <form onSubmit={handleSubmit}>
        <h2>add a new</h2>
        <div>
          name: <input  value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {newSearch === '' ? persons.map(person => <p>{person.name} {person.number}</p>) : searchArray.map(person => <p>{person.name} {person.number}</p>)}
      
    </div>
  )
}

export default App