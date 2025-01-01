import CountryDetales from "./CountryDetails";

const CountriesExtended = ({ countries }) => {
    return (
      <div>
        <ul>
          {
            countries.map((c, i) => (
            <li key={i}>
              <CountryDetales country={c}/>
            </li>
            ))
          }
        </ul>
      </div>
    );
  };
  
  export default CountriesExtended;
  