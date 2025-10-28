import { useState } from 'react';
import './Country.css'
const Country = ({country}) =>{
    console.log(country.population.population)

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
    }

    return(
        // <div className={`country border-lg text-center ${visited? "country-visited" : "country-not-visited"}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />

            <h3> Name : {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
            country.area.area>3000?"Big country":"small country"}</p>
            <button onClick={handleVisited}>
                {visited? "Visited" : "Not Visited"}
                
            </button>
        </div>
    )
};
export default Country