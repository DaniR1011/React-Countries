import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { postCountry } from '../Api/api'
import Card from '../Components/Card/Card';
import Image from '../Components/Image/Image';


const Form = () => {
  const [country, setCountry] = useState({});
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();
    setCountry({...country, id: uuidv4()});
    postCountry(country).then((res)=> {
      if(res) {
        navigate('/countries');
      }
    });
  };

  return (
    <section className='create'>
    <form className='Form' onSubmit={(ev) => onSubmit(ev)}>
        <input
          required
          type="text"
          placeholder="Name"
          onChange={(e) => setCountry({ ...country, name: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Bandera"
          onChange={(e) => setCountry({ ...country, bandera: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Currency"
          onChange={(e) => setCountry({ ...country, currency: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Capital"
          onChange={(e) => setCountry({ ...country, capital: e.target.value })}
        />
        <input
          required
          type="text"
          placeholder="Population"
          onChange={(e) => setCountry({ ...country, population: e.target.value })}
        />
        <input className='Create' type="submit" value="Create" />
      </form>
      <div className="preview">
        <Card item={country} />
        <Image source={country.bandera} alternative={country.name} size="1rem" />
      </div>
    </section>
  );
};

export default Form