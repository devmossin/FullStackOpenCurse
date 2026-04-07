const Persons = props => {
    return (
        <div>
            {props.newSearch === '' ? props.persons.map(person => <p>{person.name} {person.number}</p>) : props.searchArray.map(person => <p>{person.name} {person.number}</p>)}
        </div>
    )
}

export default Persons