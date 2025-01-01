import { useState } from 'react';
import Button from "./Button.jsx";
import CountryDetales from './CountryDetails.jsx';

const Countries = ({ countries }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleClick = (country) => {
    if (selectedCountries.some((c) => c.name.common === country.name.common)) {
      return;
    }
    setSelectedCountries((prev) => [...prev, country])
  }

  const handleBackClick =()=> {
    setSelectedCountries([]);
  }
  return (
    <div>
      {selectedCountries.length > 0 ? (
        <div>
          <ul>
            {selectedCountries.map((c, i) => (
              <li key={i}>
                <CountryDetales country={c} />
              </li>
            ))}
          </ul>
          <Button label="back" type="back" onClick={handleBackClick} />
        </div>
      ) : (
        <ul>
          {countries.map((c, i) => (
            <li key={i} className="country-item">
              <h1 className="country-name">{c.name.common}</h1>
              <Button label="more" type="more" onClick={() => handleClick(c)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;
