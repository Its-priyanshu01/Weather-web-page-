document.getElementById("weatherForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const cityInput = document.getElementById("cityInput").value;
    const apiKey = "e71cbf65cfdae417d0239ade2b42154a"; // Replace with your OpenWeatherMap API key

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weatherData = await response.json();

        const weatherInfoDiv = document.getElementById("weatherInfo");
        weatherInfoDiv.innerHTML = `
            <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
            <p>${weatherData.weather[0].description}</p>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Humidity: ${weatherData.main.humidity}%</p>
            <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
        `;
    } catch (error) {
        alert(error.message);
    }
});
