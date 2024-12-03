const Persons =({filteredNames})=> {
    return (
        <div>
            <ul>
                {filteredNames.map((person, i) => (
                    <li key={i}>
                        <span className="person">{person.name}</span>
                        <span>{person.number}</span>
                    </li>))}
            </ul>
        </div>)
}
export default Persons