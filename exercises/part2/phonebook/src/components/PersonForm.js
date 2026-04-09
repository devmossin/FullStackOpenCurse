import { useState } from "react"

const PersonForm = ({persons, addPerson}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const nameExists = persons.some(person => person.name === newName)
        if (nameExists) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        
        const newObject = { name: newName, number: newNumber }
        addPerson(newObject)
        
        setNewName('')
        setNewNumber('')
      }

    return (
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
    )
}

export default PersonForm