

// Javascript for search country
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Key': 'e4b989b7dfmsh6da0a34dd89a017p196812jsn76ddc1b1632d',
      'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
  }
};

fetch('https://country-facts.p.rapidapi.com/all', options)
  .then(response => response.json())
  .then(countries => {
      const select = document.getElementById('select-country');

      // create dropdown of all countries
      const defaultOption = document.createElement('option');
      defaultOption.text = 'Select a country';
      select.add(defaultOption);
      for (const country of countries) {
          const option = document.createElement('option');
          option.text = country.name.common;
          option.value = country.name.common;
          select.add(option);
      }

      // add event listener to display country information
      const button = document.getElementById('search-button');
      button.addEventListener('click', () => {
          const selectedCountry = select.value;
          const country = countries.find(c => c.name.common === selectedCountry);
          if (country) {
              const name = country.name.common;
              const capital = country.capital[0];
              const population = country.population;
              const flagUrl = country.flag;

              const outputDiv = document.getElementById('output');
              outputDiv.innerHTML = `
              <h1>${name}</h1>
              <p>Capital City: ${capital}</p>
              <p>Population: ${population}</p>
              <img src="${flagUrl}" alt="${name} flag "style="width:120px; height:100px;">
          `;
          }
      });
  })
  .catch(err => console.error(err));

  // javascript for comparing cities
  const apiKey = '1cb913b3famsh592e3e71d0b539ep1953d5jsn2b57210c1c3d';

    function getPrices(cityInputId, countryInputId, chartContainerId, tableContainerId, cityInfoContainerId) {
      const city = document.getElementById(cityInputId).value;
      const country = document.getElementById(countryInputId).value;

      if (!city || !country) {
        alert('Please fill in both the city and country fields.');
        return;
      }

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
        }
      };

      fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`, options)
        .then(response => response.json())
        .then(response => {
          displayPrices(response, chartContainerId);
          displayTable(response, tableContainerId);
          displayCityInformation(city, country, cityInfoContainerId);
        })
        .catch(err => console.error(err));
    }

    function displayCityInformation(city, country, cityInfoContainerId) {
      const cityInfoContainer = document.getElementById(cityInfoContainerId);
      cityInfoContainer.innerHTML = `<h3 style=" color: rgb(0, 0, 0);">${city}, ${country}</h3>`;
    }

    function displayPrices(data, chartContainerId) {
  const prices = data.prices;


  const labels = prices.map(price => price.item_name);
  const minPrices = prices.map(price => price.min);
  const avgPrices = prices.map(price => price.avg);
  const maxPrices = prices.map(price => price.max);

  const canvas = document.getElementById(chartContainerId);

  if (canvas.chart) {
    canvas.chart.destroy();
  }

  const ctx = canvas.getContext('2d');
  const priceChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Minimum Price',
        data: minPrices,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }, {
        label: 'Average Price',
        data: avgPrices,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }, {
        label: 'Maximum Price',
        data: maxPrices,
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        title: {
          display: true,
          text: `Cost of Living in ${data.city_name}, ${data.country_name}`,
          font: {
            size: 18
          },
          padding: {
            top: 10,
            bottom: 10
          }
        }
      }
    }
  });

  canvas.chart = priceChart;
}


    function displayTable(data, tableContainerId) {
      const prices = data.prices;

      let tableHtml = `
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Minimum Price</th>
                            <th>Average Price</th>
                            <th>Maximum Price</th>
                        </tr>
                    </thead>
                    <tbody>`;

      prices.forEach(price => {
        tableHtml += `
                        <tr>
                            <td>${price.item_name}</td>
                            <td>${price.min}</td>
                            <td>${price.avg}</td>
                            <td>${price.max}</td>
                        </tr>
                    `;
      });

      tableHtml += `
                    </tbody>
                </table>
                `;

      // Add the table to the table container
      document.getElementById(tableContainerId).innerHTML = tableHtml;
    }



    
		

   
   