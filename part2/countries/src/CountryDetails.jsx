import { useState, useEffect } from "react";
import forcastService from "./forcastService.jsx";

const CountryDetales = ({ country }) => {
    const [forcast, setForcast] = useState(null);

    useEffect(() => {
        if (country.capitalInfo?.latlng) {
          const [lat, lng] = country.capitalInfo.latlng;
          forcastService
            .getCurrent(lat, lng)
            .then((response) => {
              setForcast(response);
            })
            .catch((error) => console.log("Error fetching forecast:", error));
        }
      }, [country]);

    return (
        <div>
            <h1>{country.name.common}</h1>
            <h2>Capital : {country.capital}</h2>
            <div>Areaa : {country.area}</div>
            <h2>Languages : </h2>
            <ul style={{ listStyleType: 'disc' }}>
                {country.languages && 
                    Object.values(country.languages).map((l, i) => (
                        <li key={i}>{l}</li>
                    ))}
                    <p>
                        <img src={country.flags.png} alt={country.flags.alt} />
                    </p>
                    {console.log("CountryDetales", country)}
                    {!forcast ? (
                        <p>Loading forecast...</p>
                    ) : (
                        <div>
                        <h3>Weather Forecast</h3>
                        <p>Temperature: {forcast.main?.temp || 'N/A'}°C</p>
                        <p>Weather: {forcast.weather?.[0]?.description || 'N/A'}</p>
                        <p><img src={`https://openweathermap.org/img/wn/${forcast.weather?.[0]?.icon}@2x.png`} alt="icn"/></p>
                        <p>Wind: {forcast.wind.speed || 'N/A'} m/s</p>
                        </div>
                    )}
            </ul>
        </div>
    )
};
export default CountryDetales;