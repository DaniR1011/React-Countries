export const getCountry = async (filter) => {
    const countries = await fetch(`https://restcountries.com/v2/all?name=${filter}`)
    const countryToJson = await countries.json()
    return {
        ...countryToJson,
        name: countryToJson.name,
        flag: countryToJson.flag
    }
}