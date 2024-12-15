import { useState } from 'react';
import Button from "./Button.jsx";
import CountriesExtended from "./CountriesExtended.jsx";
import forcastService from './forcastService.jsx';

const Countries = ({ countries }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleClick = (country) => {
    if (country) {
      if (country.capitalInfo?.latlng) {
        const [lat, lng] = country.capitalInfo.latlng;
        forcastService
          .getCurrent(lat, lng)
          .then((response) => {
            country.forcast = response;
            setSelectedCountries((prevSelected) => {
              const isAlreadySelected = prevSelected.find(
                (c) => c.name.common === country.name.common
              );
              return isAlreadySelected ? prevSelected : [...prevSelected, country];
            });
          })
          .catch((error) => console.log("Error fetching forecast:", error));
      }
    } else {
      setSelectedCountries([]);
    }
  };

  return (
    <div>
      {selectedCountries.length > 0 ? (
        <div>
          <CountriesExtended countries={selectedCountries} />
          <Button label="back" type="back" onClick={() => handleClick()} />
        </div>
      ) : (
        <ul>
          {countries.map((c, i) => (
            <li key={i} className="country-item">
              <h1 className="country-name">{c.name.common}</h1>
              <Button label="more" type="more" onClick={() => handleClick(c)} />
              {c.forcast && (
                <div>
                  <h3>Weather Forecast</h3>
                  <p>Temperature: {c.forcast.main?.temp || 'N/A'}°C</p>
                  <p>Weather: {c.forcast.weather?.[0]?.description || 'N/A'}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;
