const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((soma, part) => {
        return soma + part.exercises;
    }, 0)

    return (
        <div>
            <h1>{course.name}</h1>

            <div>
                {course.parts.map(part => 
                <p key={part.id}>{part.name} {part.exercises}</p>
                )}
            </div>

            <p><strong>total of {totalExercises} exercises</strong></p>
        </div>
    )
}

export default Course