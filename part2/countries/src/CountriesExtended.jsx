const CountriesExtended = ({countries}) => {
    return (
        <div>
            <ul>
                {countries.map((c, i) => (
                    <li key={i}>
                        {console.log(c)}
                        <h1>{c.name.common}</h1>
                        <h2>capital {c.capital}</h2>
                        <div>area {c.area}</div>
                        <h2>Languages:</h2>
                        <ul style={{ listStyleType: 'disc' }}>
                            {c.languages && Object.values(c.languages).map((l, i) => (
                                <li key={i}>
                                    {l}
                                </li>
                            ))}
                        </ul>
                        <p>
                            <img src={c.flags.png} alt={c.flags.alt} />
                        </p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default CountriesExtended;