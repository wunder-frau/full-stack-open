import { useState, useEffect } from 'react'
import './App.css'
import countryService from './countryService.jsx';
import Countries from './Countries.jsx';
import InputField from './InputField.jsx';

function App() {
  const [countries, setCountries] = useState([]);
  const [inputFilter, setInputFilter] = useState('');


  const handleFilterInput = (e) => {
    setInputFilter(e.target.value);
  };

  useEffect(() => {
    countryService
      .getAll()
      .then((response) => {
        setCountries(response);
      })
      .catch(error =>
        console.log("err", error)
      )
  }, [])

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(inputFilter.toLowerCase())
  );

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <InputField
        type="text"
        label="find countries"
        value={inputFilter}
        onChange={handleFilterInput}
        id="filter"
      />
      <div className="card">
        {inputFilter
        ? (filteredCountries.length > 0
          ? (filteredCountries.length > 10
            ? <p>Too many matches, specify another filter.</p>
            : <Countries countries={filteredCountries}/>)
          : <p>Not found.</p>)
        : (<p>Please enter a filter to search for countries.</p>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
