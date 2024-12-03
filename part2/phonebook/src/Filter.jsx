const Filter =({persons}, newName)=> {
    return (
        <div>
            <span className="person ">filter shown with</span>
            <span>{persons.filter(name => name === 'Atro')}</span>
        </div>
    )
}
export default Filter;