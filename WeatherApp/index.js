const API_KEY = '2ccb63e2ef7259ef8e223015246134ad'
const CITY_NAME = 'Berkeley';
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;


window.addEventListener('load', () => {
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data)
      
        const { temp } = data.main;
        const x = ((9/5) * (temp - 273) + 32).toFixed(1)
        const { description } = data.weather[0];
        var iconCode = data.weather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

        desc.textContent = `${description}`;
        tempF.textContent = `${x} °F`;
        $(".icon").attr('src', iconUrl);

    })  
})