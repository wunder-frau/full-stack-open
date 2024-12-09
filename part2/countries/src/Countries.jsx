const Countries = ({countries}) => {
    return (
        <div>
            <ul>
                {countries.map((c, i) => (
                    <li key={i}>
                        <h1>{c.name.common}</h1>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Countries;