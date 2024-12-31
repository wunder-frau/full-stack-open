// import CountryDetales from "./CountryDetails";

const CountriesExtended = ({ countries, forcast }) => {
    return (
      <div>
        <ul>
          {countries.map((c, i) => (
            // <li key={i}>
            //   <CountryDetales country={c}/>
            // </li>
            <li key={i}>
              <h1>{c.name.common}</h1>
              <h2>Capital: {c.capital}</h2>
              <div>Area: {c.area}</div>
              <h2>Languages:</h2>
              <ul style={{ listStyleType: 'disc' }}>
                {c.languages &&
                  Object.values(c.languages).map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
              </ul>
              <p>
                <img src={c.flags.png} alt={c.flags.alt} />
              </p>
              {forcast && (
              <div>
                <h3>Weather Forecast</h3>
                <p>Temperature: {forcast.main?.temp || 'N/A'}°C</p>
                <p>Weather: {forcast.weather?.[0]?.description || 'N/A'}</p>
                <p><img src={`https://openweathermap.org/img/wn/${forcast.weather?.[0]?.icon}@2x.png`} alt="icn"/></p>
                <p>Wind: {forcast.wind.speed || 'N/A'} m/s</p>
              </div>
            )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CountriesExtended;
  