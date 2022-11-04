import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getCountries } from "../API/api.js";
import Image from "../components/Image/Image";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadingData();
  }, [filter]);

  const loadingData = () => {
    if (filter === "") {
      getCountries().then((data) => {
        setCountries(data);
      });
    } else {
      const filteredCountries = filtered("name", countries);
      setCountries(filteredCountries);
    }
  };

  const filtered = (name, list) => {
    return list.filter((item) =>
      item[name].toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <div className="finder">
        <input
          type="text"
          placeholder="Find country..."
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <section className="gallery">
        {countries.map((country) => (
          <Link to={`/countries/${country.id}`} key={country.id}>
            <Image
              source={country.bandera}
              alternative={country.title}
              size="10rem"
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Countries;