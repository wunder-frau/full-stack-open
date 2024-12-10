import { useState } from 'react';
import Button from "./Button.jsx"
import CountriesExtended from "./CountriesExtended.jsx"

const Countries = ({countries}) => {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const handleClick =(country)=> {
        country ? setSelectedCountries([country]) : setSelectedCountries([]);
    }
    return (
        <div>
          {selectedCountries.length > 0 ? (
            <div>
                <CountriesExtended countries={selectedCountries} />
                <Button label="back" type="back" onClick={() => handleClick()}/>
            </div>
          ) : (
            <ul>
              {countries.map((c, i) => (
                <li key={i}>
                  <span>
                    <h1>{c.name.common}</h1>
                    <Button label="more" type="more" onClick={() => handleClick(c)} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };

export default Countries;