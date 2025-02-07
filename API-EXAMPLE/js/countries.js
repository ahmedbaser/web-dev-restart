const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))


}

const displayCountries = countries => {
   const countriesContainer = document.getElementById('all-countries');
    // console.log(countries)
//    for(const country of countries) {
//       console.log(country)
//  

  countries.forEach(country =>{
     console.log(country.name.common)
     const countryDiv = document.createElement('div');
     countryDiv.classList.add('country');
     countryDiv.innerHTML = `
       <h3>Name: ${country.name.common}</h3>
       <p>Capital; ${country.capital ? country.capital[0] : 'No Capital'}</p>
       <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
     `;

     countriesContainer.appendChild(countryDiv);
  })
}

const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    
     fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]));
}

const showCountryDetails = country => {
    console.log(country)
    const detailsContainer = document.getElementById('country-details')
    detailsContainer.innerHTML = `
    <h3>Name: ${country.name.common} </h3>
    <img src="${country.flags.png}">
    
    `

}










loadCountries();