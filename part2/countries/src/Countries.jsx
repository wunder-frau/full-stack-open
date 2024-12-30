import { useState } from 'react';
import Button from "./Button.jsx";
import CountryDetales from './CountryDetails.jsx';
import forcastService from './forcastService.jsx';

const Countries = ({ countries }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const fetchWeather = async (country) => {
    console.log("Fetching weather for:", country);
      if (country.capitalInfo?.latlng) {
        const [lat, lng] = country.capitalInfo.latlng;
        try {
          const response = await forcastService.getCurrent(lat, lng);
          country.forcast = response;
          return country;
        } catch (error) {
          console.log("Error fetching forecast:", error)
        }
      }
      return country;
  };

  const handleClick = (country) => {
    if (selectedCountries.some((c) => c.name.common === country.name.common)) {
      return;
    }
    console.log(">>>>1<<<<<<", country);
    fetchWeather(country)
      .then((updCountry) => {
        console.log("->>>>>", updCountry);
        setSelectedCountries((prev) => [...prev, updCountry])
      })
      .catch((error) => {
        console.error("Error fetching forecast:", error);
      });
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
