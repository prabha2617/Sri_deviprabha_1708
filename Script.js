const apiKey = 'YOUR_API_KEY'; // Get your API key from OpenWeatherMap (https://openweathermap.org/api)

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found.');
                return;
            }
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching weather data.');
        });
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp + '°C';
    const description = data.weather[0].description;
    const humidity = 'Humidity: ' + data.main.humidity + '%';
    const windSpeed = 'Wind Speed: ' + data.wind.speed + ' m/s';

    document.getElementById('city-name').innerText = cityName;
    document.getElementById('temperature').innerText = 'Temperature: ' + temperature;
    document.getElementById('description').innerText = 'Description: ' + description;
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('wind-speed').innerText = windSpeed;
}
