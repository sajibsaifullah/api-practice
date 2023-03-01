
const loadData = (region) => {
    const URL = `https://restcountries.com/v3.1/region/${region}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (countries) => {
    const container = document.getElementById('countries-container');
    countries.forEach(country => {
        // const countryName = country.name.common;
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="border border-primary w-96 h-100">
                <h3>Country Name: ${country.name.common}</h3>
            </div>
        `;
        container.appendChild(div);
        console.log(country.name.common);
    });
    // console.log(countries);   
}