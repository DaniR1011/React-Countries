import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../App.css'

const Country = () => {
  const [country, setCountry] = useState({});
  const params = useParams();
  const {id} = params;
  console.log(id);

  useEffect(() => {
    const getCharacter = async () => {
      const data = await fetch(`http://localhost:8080/countries/${id}`);
      const res = await data.json();
      setCountry(res);
    };
    getCharacter();
  }, [])


  return (
  <div className='country'>
 {country ? (
   <figure className='detailCountry'> 
   <h3>{country.name}</h3>
  <img src={country.bandera} alt={country.name} />
  <p>Capital: {country.capital}</p> 
  <p>Currency: {country.currency}</p> 
  <p>Population: {country.population}</p> 

  </figure>
  ) : <div>Not exists</div>}
  </div>
  )
  // const {id} = useParams()
  // const country = getCountry(id)

  // if(!country) return <p>Country not found</p>

  // return (
  //   <div>
  //     <CountryDetail country={country} />
  //   </div>
  // )
}

export default Country;