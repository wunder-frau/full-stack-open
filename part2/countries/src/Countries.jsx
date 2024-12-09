const Countries = ({countries}) => {
    return (
        <div>
            <ul>
                {countries.map((c, i) => (
                    <li key={i}>
                        <span>{c.name.common}</span>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Countries;