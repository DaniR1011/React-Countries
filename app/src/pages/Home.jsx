import React from "react";
import '../App.css'
import {useDebounce} from 'use-debounce'
import { useState, useEffect } from "react";
import { getCountry } from "../api/country";


export const CodeFetchingInput = () => {
  const [filter, setFilter] = useState("Afghanistan")
  // const [countryCollection, setCountryCollection] = useState([]);
  // const [country, setCountry] = useState({})
  const [debounceFilter] = useDebounce(filter, 500);
  const countriesArray = [];
  useEffect(() => {
    getCountry(filter).then((countries) => { 
    for (const index in countries) {
        const country = countries[index];
        countriesArray.push(country);
    }
    // setCountryCollection([countries])
    // setCountry(countries)
  })
  }, [debounceFilter]);
  for (let country of countriesArray) {
    console.log(country)
  }
  countriesArray.map((country) => {
    console.log(country)
  })
  return (
    <>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
     <ul>
  
       {/* {countriesArray.map((country) => { 
        console.log(country)
        return (
         <li key={country.name}>
           <h1>{country.name}</h1>
           <p>{country.flag}</p>
         </li>
       )})} */}
     </ul>
    </>
  );
}

  const Home = () => {
    return (
      <>
        <div className="App">
        <h2>🌎 Geoworld 🌎</h2>
        <p>Welcome to my website, here you can get some different information about the most visited countries in the world.
        We can saw information about the food, cities and the economy of each country.</p>
        </div>
        <CodeFetchingInput />
      </>
    )
  }

 export default Home