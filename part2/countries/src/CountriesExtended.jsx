const CountriesExtended = ({ countries }) => {
    return (
      <div>
        <ul>
          {countries.map((c, i) => (
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
      </div>
    );
  };
  
  export default CountriesExtended;
  