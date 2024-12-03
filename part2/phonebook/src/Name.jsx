const Name =({persons})=> {
    return (
        <div>
            <ul>
                {persons.map((person, i) => (<li key={i}>{person.name}</li>))}
            </ul>
        </div>)
}
export default Name