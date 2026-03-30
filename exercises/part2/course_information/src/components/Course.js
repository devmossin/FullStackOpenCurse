const Course = ({ course }) => {
    return (
        <div>
            <h1>Half Stack application development</h1>

            <ul>
                {course.parts.map(part => 
                <li key={part.id}>
                    {part.content}
                </li>
                )}
            </ul>
        </div>
    )
}

export default Course