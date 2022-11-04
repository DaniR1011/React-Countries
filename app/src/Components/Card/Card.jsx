const Card = ({ item }) => {
    return (
        <figure className='Card'>
            <h2>{item.name}</h2>
            <p> Currency: {item.currency}</p>
            <p>Capital: {item.capital}</p>
            <p>Population: {item.population}</p>
        </figure>
    )
}

export default Card