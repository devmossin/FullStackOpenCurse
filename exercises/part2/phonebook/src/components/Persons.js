const Persons = ({searchArray, newSearch, persons, deletePerson}) => {
    const deleteClick = (id, name) => {
        const confirm = window.confirm(`Delete ${name}?`)
        
        if (confirm) { deletePerson(id) }
    }
    
    return (
        <div>
            {newSearch === '' 
                ? persons.map(person => 
                <p>
                    {person.name} {person.number}
                    <button onClick={deleteClick(person.id, person.name)}></button>
                </p>)
                : searchArray.map(person => 
                <p>
                    {person.name} {person.number}
                    <button onClick={deleteClick(person.id, person.name)}></button>
                </p>)
                
            }
        </div>
    )
}

export default Persons