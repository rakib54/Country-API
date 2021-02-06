
function Country() {
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => {
            CountryName(data)
        });
}
Country()

function CountryName(countries) {
    const CountriesDiv = document.getElementById('countries');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo = `
            <h1 id ="country-name">${country.name}</h1>
            <p>${country.capital}</p>
            <button onclick ="CountryDetails('${country.name}')">details</button>
        `
        countryDiv.innerHTML = countryInfo;
        CountriesDiv.appendChild(countryDiv);

    });
};

const CountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderCountry(data[0]);
        })
}
const renderCountry = country => {
    const CountryDiv = document.getElementById('Countrydetails');
    CountryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population:${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src ="${country.flag}">
    `
}
