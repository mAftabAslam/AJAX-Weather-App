function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '873be88ad18f968535fe04c477f9605a';
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  function displayWeather(weatherData) {
    const weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.innerHTML = '';
  
    const cityName = weatherData.name;
    const temperature = Math.round(weatherData.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
    const description = weatherData.weather[0].description;
  
    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
      <h2>Weather in ${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;
    weatherInfoContainer.appendChild(weatherInfo);
  }
  