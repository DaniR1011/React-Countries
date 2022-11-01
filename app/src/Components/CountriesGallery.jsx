import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CountriesGallery = ({countries}) => {
    return (
    <div className="countriesGallery">
    <h2>Favourites Countries ⭐️</h2>
    <div className="gallery">
    {countries.length ? (
        countries.map((country) => ( 
        <figure key={country.id}>
        <NavLink to={`/countries/${country.id}`}> 
            <h3>{country.name}</h3>
        </NavLink>
        </figure>
    )) 
    ) : (
        <p>No Countries</p>
        )}
    </div>
    </div>
    );
};
export default CountriesGallery