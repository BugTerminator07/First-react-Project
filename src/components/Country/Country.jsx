import React from 'react';
import './country.css'

const Country = ({ country ,handleVisitedCountries}) => {
    const [visited, setVisited] = React.useState(false);
    const handleVisited=()=>{
        //   window.alert(`You have visited ${country.name.common}`);
            // if(visited){
            //     setVisited(false);
            // } else{
            //     setVisited(true);
            // }
            setVisited(!visited); 
            //same thing as if-else
                handleVisitedCountries(country);
        }
    return (
        
        <div className={`country border-lg text-center ${visited &&'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <p>Name:{country.name.common}</p>
            <p>Official name:{country.name.official}</p>
            <p>Population:{country.population.population}</p>
            <p>Area:{country.area.area} {country.area.area > 300000 ? '(Large Country)' : '(Small Country)'}</p>
            <button onClick={handleVisited}>{visited?'Visited':'Not visited'}</button>
        </div>
    );
};

export default Country;
// four ways to add css in react
// 1. inline css(style object)
// 2. internal css
// 3. external css
// 4. css framework like bootstrap, tailwind, material ui etc.