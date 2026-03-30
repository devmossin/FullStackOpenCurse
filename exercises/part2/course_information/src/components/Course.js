const Course = ({ course }) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            
            {course.map(item => (
                <div key={item.id}>
                    <h1> {item.name} </h1>
                    
                    <div>
                        {item.parts.map(part => (
                            <p key={part.id}> {part.name} {part.exercises} </p>
                        ))}
                    </div>

                    <p>
                        <strong>
                            total of {item.parts.reduce((soma, part) => soma + part.exercises, 0)} exercises
                        </strong>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Course