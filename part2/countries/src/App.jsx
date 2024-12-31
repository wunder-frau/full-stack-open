import { useState, useEffect, useMemo } from 'react'
import './App.css'
import countryService from './countryService.jsx';
import Countries from './Countries.jsx';
import InputField from './InputField.jsx';
import CountriesExtended from './CountriesExtended.jsx';
import forcastService from './forcastService.jsx';

function App() {
  const [countries, setCountries] = useState([]);
  const [inputFilter, setInputFilter] = useState('');
  const [forcast, setForcast] = useState([]);

  const handleFilterInput = (e) => {
    setInputFilter(e.target.value);
  };

  useEffect(() => {
    countryService
      .getAll()
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => console.log("Error fetching countries:", error));
  }, []);

  const filteredCountries = useMemo(() => {
    return countries.filter((c) =>
      c.name.common.toLowerCase().includes(inputFilter.toLowerCase())
    );
  }, [countries, inputFilter]);

useEffect(() => {
  if (filteredCountries.length > 0) {
    const country = filteredCountries[0];
    if (country.capitalInfo?.latlng) {
      const [lat, lng] = country.capitalInfo.latlng;
      forcastService
        .getCurrent(lat, lng)
        .then((response) => {
          setForcast(response);
        })
        .catch((error) => console.log("Error fetching forecast:", error));
    }
  }
}, [filteredCountries]);


let cond;

  if (!inputFilter.trim()) {
    cond = 'noFilter';
  } else if (filteredCountries.length === 0) {
    cond = 'noMatches';
  } else if (filteredCountries.length > 10) {
    cond = 'tooMany';
  } else if (filteredCountries.length === 1) {
    cond = 'ifOne'
  } else {
    cond = 'someMatches';
  }

  let content;

  switch (cond) {
    case 'noFilter':
      content = <p>Please enter a filter to search for countries.</p>;
      break;
    case 'noMatches':
      content = <p className="notification error">Not found.</p>;
      break;
    case 'tooMany':
      content = <p>Too many matches, specify another filter.</p>;
      break;
    case 'someMatches':
      content = <Countries countries={filteredCountries}/>;
      break;
    case 'ifOne':
        content = <CountriesExtended countries={filteredCountries} forcast={forcast} />
        break;
    default:
      content = null;
  }

  return (
    <>
      <InputField
        type="text"
        label="find countries"
        value={inputFilter}
        onChange={handleFilterInput}
        id="filter"
      />
      <div className="card">
        {content}
      </div>
    </>
  )
}

export default App
