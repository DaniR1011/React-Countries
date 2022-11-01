import {Link, Outlet} from 'react-router-dom'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import React from 'react'
import { useState, useEffect } from 'react'
import CountryDetail from '../Components/CountryDetail'
import CountriesGallery from '../Components/CountriesGallery'
import '../App.css'

const Countries = () => {
  const [name, setName] = useState("");
  const [bandera, setBandera] = useState("");
  const [capital, setCapital] = useState("");
  const [currency, setCurrency] = useState("");
  const [population, setPopulation] = useState(0);
  const [countries, setCountries] = useState([]);
  // const [countries, setCountries] = useState(getCountries());

useEffect(() => {
  const getCountries = async() => {
    const data = await fetch ("http://localhost:8080/countries");
    const res = await data.json();
    setCountries(res);
  };
  getCountries();
}, []);

  const createCountry = (ev) => {
    ev.preventDefault()
    const country = {
      name: name,
      bandera: bandera,
      capital: capital,
      currency: currency,
      population: population, 
      id: uuidv4()
    }
    postCountry(country);
  };

const postCountry = async (item) => {
    axios({
      method: "post",
      url: "http://localhost:8080/countries",
      data: item,
    });
};
  
  return (
    <>
    <div>
      <form onSubmit={(ev) => createCountry(ev)}>
      <fieldset className='formCountries'>
        <legend>➕ Add your favourite Country ➕</legend>
        <div className='formContainer'>
          <label htmlFor='name'>Name ❞</label>
          <input type="text" name="name" id="name" onChange={(ev) => setName(ev.target.value)}/>
          <label htmlFor="bandera">Flag 🏳</label>
          <input type="text" name='bandera' id='bandera' onChange={(ev) => setBandera(ev.target.value)}/>
          <label htmlFor="capital">Capital 🏟</label>
          <input type="text" name='capital' id='capital' onChange={(ev) => setCapital(ev.target.value)}/>
          <label htmlFor="currency">Currency 💶</label>
          <input type="currency" name='currency' id='currency' onChange={(ev) => setCurrency(ev.target.value)}/>
          <label htmlFor='population'>Population in million 👥</label>
          <input type="text" name='population' id='population' onChange={(ev) => setPopulation(ev.target.value)}/>
        </div>
      </fieldset>
      <input className='createInput' type="submit" value="Create" />
      </form>
      <CountriesGallery countries={countries}/>
     </div>

    {/* <div className='CountriesHome'>
      <h1>Todos los Countries</h1>
      <ul className='Flags'>
        {
          countries.map((country) => (
            <li key={country.id}>
              <Link to={`/countries/${country.id}`}>
                <CountryDetail country={country} />
              </Link>
            </li>
          ))
        }
      </ul>
    </div> */}
    <Outlet />
    </>
  )
}
export default Countries