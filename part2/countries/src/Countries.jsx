import { useState } from 'react';
import Button from "./Button.jsx";
import CountryDetales from './CountryDetails.jsx';
import forcastService from './forcastService.jsx';

const Countries = ({ countries, con }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

const fetchBorders = (country) => {
  console.log("Fetching borders for:", country);

  if (country?.borders) {
    const [b1, b2] = country.borders || [];
    console.log("b1, b2 :", b1, b2);

    const filteredBord = con.filter((c) => {
      console.log("______??????:", c.fifa);
      if (c.fifa) {
        console.log("Checking match for b1:", b1, "with fifa code:", c.fifa);
        return c.fifa.toLowerCase().includes(b1.toLowerCase());
      }
      return false;
    });

    console.log("Filtered borders based on fifa:", filteredBord[0].name.common.toUpperCase());

    if (b1 && country?.fifa) {
      const countryName = filteredBord[0].name.common.toUpperCase();
      const borderAbbreviation = b1.toUpperCase();

      console.log("Match attempt:", countryName, borderAbbreviation);
      if (countryName.includes(borderAbbreviation)) {
        console.log("\\\\\\\\\\ Match Found:", countryName);
      } else {
        console.log("No match found");
      }
    }
    const borderCountry = filteredBord[0];
    console.log("Filtered borders based on fifa:", borderCountry.name.common.toUpperCase());

    if (borderCountry.capitalInfo?.latlng) {
      const [lat, lng] = borderCountry.capitalInfo.latlng;
      console.log("Coordinates found:", lat, lng);

      // Fetch weather data for the border country
      return forcastService
        .getCurrent(lat, lng)
        .then((response) => {
          console.log("API response received:", response);
          console.log(`Weather for ${borderCountry.name.common}:`);
          console.log(`Temperature: ${response.main.temp}°C`);
          console.log(`Feels like: ${response.main.feels_like}`);
          console.log(`Wind Speed: ${response.wind.speed} km/h`);

          borderCountry.forecast = response; // Save forecast data in the border country object
          return borderCountry;
        })
        .catch((error) => {
          console.error("Error fetching forecast:", error);
          return borderCountry; // Return border country without forecast
        });
    } else {
      console.warn("No coordinates available for this border country:", borderCountry);
    }
  }
  return Promise.resolve(country);
};



  const fetchWeather = (country) => {
    console.log("Fetching weather for:", country);
    if (country.capitalInfo?.latlng) {
      const [lat, lng] = country.capitalInfo.latlng;
      console.log("Coordinates found:", lat, lng);
      console.log("Calling forcastService.getCurrent with lat, lng:", lat, lng);
  
      return forcastService
        .getCurrent(lat, lng)
        .then((response) => {
          console.log("API response received:", response);
          country.forcast = response;
          return country;
        })
        .catch((error) => {
          console.error("Error fetching forecast:", error);
          return country;
        });
    }
    console.warn("No coordinates available for this country:", country);
    return Promise.resolve(country);
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
    fetchBorders(country)
      .then((updCountry) => {
        console.log("---------boord---", updCountry);
      })
      .catch((error) => {
        console.error("Error fetching borders:", error);
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
