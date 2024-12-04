import InputField from './InputField.jsx'
import Button from './Button.jsx'
const PersonForm =({handleAddPerson, newName, handleNameInput, newNumber, handleNumberInput})=> {
    return (
    <form  onSubmit={handleAddPerson}>
        <InputField
            type="text"
            label='name'
            value={newName}
            onChange={handleNameInput}
            autoComplete="off"/>
        <InputField
            type="number"
            label="number"
            value={newNumber}
            onChange={handleNumberInput}
            autoComplete="off"/>
        <Button type='submit' label='add'/>
    </form>
    )
}
export default PersonForm