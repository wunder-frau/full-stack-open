import InputField from './InputField.jsx'
import Button from './Button.jsx'
const PersonForm =({onSubmit, newName, handleNameInput, newNumber, handleNumberInput})=> {
    return (
    <form  onSubmit={onSubmit}>
        <InputField
            type="text"
            label='name'
            value={newName}
            onChange={handleNameInput}
            id='name'
            autoComplete="off"/>
        <InputField
            type="number"
            label="number"
            value={newNumber}
            onChange={handleNumberInput}
            id='number'
            autoComplete="off"/>
        <Button type='submit' label='add'/>
    </form>
    )
}
export default PersonForm