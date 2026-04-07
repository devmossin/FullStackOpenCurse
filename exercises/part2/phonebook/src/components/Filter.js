const Filter = props => {
    const handleSearchChange = (event) => {
        console.log(event.target.value)
        props.setNewSearch(event.target.value)
    }

    return (
        <p>search: <input value={props.newSearch} onChange={handleSearchChange}/></p>
    )
}

export default Filter