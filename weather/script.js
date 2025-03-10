async function getCurrentWeatherByCity(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=0ae5b220fc774e42b1e130700252202&q=${city}&aqi=no`);
    const currentWeather = await data.json();
    return currentWeather;
}

async function getForecastByCity(city) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=0ae5b220fc774e42b1e130700252202&q=${city}&aqi=no`);
    const forecast = await data.json();
    console.log(forecast);
    return forecast;
}


const locationInput = document.querySelector('.location-input');
const locationButton = document.querySelector('.location-button');

locationButton.addEventListener('click', async () => {
    resetWeatherApp()
    const locationInputValue = locationInput.value;
    const currentWeather = await getCurrentWeatherByCity(locationInputValue);
    const forecast = await getForecastByCity(locationInputValue);

    const icon = 'http:' + currentWeather.current.condition.icon;
    const temperature = currentWeather.current.temp_c;
    const status = currentWeather.current.condition.text;

    renderCurrentWeather(icon, temperature, status);
    renderForecast(forecast.forecast.forecastday[0].hour, forecast.current.last_updated);
    renderLocation(forecast.location);
})

function renderCurrentWeather(iconSrc, temperature, status) {
    const currentWeatherIcon = document.createElement('img');
    currentWeatherIcon .setAttribute('class', 'current-weather-icon');
    currentWeatherIcon .setAttribute('src', iconSrc);

    const currentWeatherTemp = document.createElement('p');
    currentWeatherTemp.setAttribute('class', 'current-weather-temperature');
    currentWeatherTemp.innerHTML = temperature;

    const currentWeatherStatus = document.createElement('p');
    currentWeatherStatus.setAttribute('class', 'current-weather-status');
    currentWeatherStatus.innerHTML = status;

    const currentWeather = document.querySelector('.current-weather');
    currentWeather.appendChild(currentWeatherIcon)
    currentWeather.appendChild(currentWeatherTemp)
    currentWeather.appendChild(currentWeatherStatus)
}

function createForecastElement(iconSrc, time, temperature) {
    const forecast = document.createElement('div');
    forecast.setAttribute('class', "forecast-element")

    const forecastTime = document.createElement('p')
    forecastTime.setAttribute('class', "forecast-time")
    forecastTime.innerHTML = time.slice(11)
    

    const forecastIcon = document.createElement('img')
    forecastIcon.setAttribute('class', "forecast-icon")
    forecastIcon.setAttribute('src', `http:${iconSrc}`)

    const forecastTemp = document.createElement('p')
    forecastTemp.setAttribute('class', "forecast-temperature")
    forecastTemp.innerHTML = temperature

    forecast.appendChild(forecastTime)
    forecast.appendChild(forecastIcon)
    forecast.appendChild(forecastTemp)
    return forecast
}

function renderForecast(forecast) {
    const forecastContainer = document.querySelector('.forecast');

    forecast.forEach(forecastItem => {
        if (forecastItem.time >= curTime) {
            const forecastElement = createForecastElement(`http:${forecastItem.condition.icon}`, forecastItem.time, forecastItem.temp_c)
            forecastContainer.appendChild(forecastElement);
        }
    });
}

function resetWeatherApp() {
    const forecastContainer = document.querySelector('.forecast');
    const currentWeather = document.querySelector('.current-weather');
    forecastContainer.innerHTML = ''
    currentWeather.innerHTML = ''
}

function renderLocation(location) {
    const locationEl = document.querySelector('.cur-location');
    locationEl.innerHTML = '';
    locationEl.innerHTML = `${location.name}, ${location.country}`;
}