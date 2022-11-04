import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCountry } from "../API/api";
import Card from "../components/Card/Card";
import Image from "../components/Image/Image";

const Country = () => {
  const [country, setCountry] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getCountry(id).then((res) => {
      setCountry(res);
    });
  }, []);
  return (
    <section
      className="detail"
      style={{ backgroundImage: `url(${country.bandera})` }}
    >
      <div>
        <Image source={country.bandera} alternative={country.name} size="8rem" />
        <Card item={country} />
      </div>
    </section>
  );
};

export default Country;

