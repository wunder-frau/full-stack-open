import Button from './Button.jsx';

const Persons = ({ filteredNames, deletePerson }) => {
  return (
    <div>
      <ul>
        {filteredNames.map((person, i) => (
          <li key={i} className="person">
            <span className="part-name">{person.name}</span>
            <span className="part-number">{person.number}</span>
            <Button type='delete' label='delete' onClick={()=> deletePerson(person)}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Persons;
