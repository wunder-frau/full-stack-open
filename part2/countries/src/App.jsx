import { useState, useEffect } from 'react'
import './App.css'
import countryService from './countryService.jsx';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService
      .getAll()
      .then((response) => {
        console.log("loook! :", response[0].name)
        setCountries(response);
      })
      .catch(error =>
        console.log("err", error)
      )
  }, [])

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          {countries.map((c, i) => (
            <li key={i}>
              <span>{c.name.common}</span>
            </li>
          ))}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
