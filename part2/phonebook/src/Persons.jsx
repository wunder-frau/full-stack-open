const Persons =({persons})=> {
    return (
        <div>
            <ul>
                {persons.map((person, i) => (
                    <li key={i}>
                        <span className="person">{person.name}</span>
                        <span>{person.number}</span>
                    </li>))}
            </ul>
        </div>)
}
export default Persons