
const apiKey = "YOUR_API_KEY"; // API key

const searchBox = document.querySelector(".search-box input");

const searchBtn = document.querySelector(".search-box button");

const cityElem = document.querySelector(".weather-info h2");

const tempElem = document.querySelector(".weather-info h1");

const descElem = document.querySelector(".weather-info p");

const iconElem = document.querySelector(".weather-info img");




const humidityElem = document.querySelector(".weather-details .detail:nth-child(1) p");

const windElem = document.querySelector(".weather-details .detail:nth-child(2) p");

const pressureElem = document.querySelector(".weather-details .detail:nth-child(3) p");



searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if(city !== "") {
        getWeather(city);
    }
});


async function getWeather(city) {
    
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        const response = await fetch(url);
        
        if(!response.ok) 
            throw new Error("City not found");
        
        const data = await response.json();

    
        cityElem.textContent = `${data.name}, ${data.sys.country}`;
        
        tempElem.textContent = `${Math.round(data.main.temp)}°C`;
        
        descElem.textContent = data.weather[0].description;
        
        iconElem.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        humidityElem.textContent = `${data.main.humidity}%`;
        
        windElem.textContent = `${data.wind.speed} km/h`;
        
        pressureElem.textContent = `${data.main.pressure} hPa`;

    } catch (error) {
        alert(error.message);
    }





































}
