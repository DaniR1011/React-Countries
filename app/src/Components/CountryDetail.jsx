import React from 'react'
import '../App.css'

const CountryDetail = ({country}) => {
  return (
    <>
    <div className='Details'>
        <h1>{country.name}</h1>
        <img src={country.img} alt={country.img} />
        <p>{country.capital}</p>
        <p>{country.population}</p>
        <p>{country.currency}</p>
    </div>
    </>
  )
}

export default CountryDetail