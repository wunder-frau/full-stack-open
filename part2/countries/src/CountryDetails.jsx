const CountryDetales = ({ country }) => (
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
                {!country.forcast ? (
                    <p>Loading forecast...</p>
                ) : (
                    <div>
                    <h3>Weather Forecast</h3>
                    <p>Temperature: {country.forcast.main?.temp || 'N/A'}°C</p>
                    <p>Weather: {country.forcast.weather?.[0]?.description || 'N/A'}</p>
                    <p><img src={`https://openweathermap.org/img/wn/${country.forcast.weather?.[0]?.icon}@2x.png`} alt="icn"/></p>
                    <p>Wind: {country.forcast.wind.speed || 'N/A'} m/s</p>
                    </div>
                )}
        </ul>
    </div>
);

export default CountryDetales;