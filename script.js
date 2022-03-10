const btn = document.getElementById('btn');
const city = document.getElementById('weather');
btn.addEventListener('click',function(event)
{
     
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=e57f75d3c3701f55cc94771cef22827a`)
    .then((response) => response.json())
    .then((data) => weatherInfo(data))
    .catch((error) => errorCheck(error))
})
 let nameOfCity = document.getElementById('city-name');
 let tempValue = document.getElementById('temp');
function weatherInfo(data)
{
   let cityName = data.name;
   let temp = data.main.temp;
   temp = temp - 273.15;
   temp = temp.toFixed(2);
   nameOfCity.innerText = cityName;
   tempValue.innerText = temp+" C";

}
function errorCheck(error)
{
   nameOfCity.innerText = "404 (Incorrect your city name)";
   temp.innerText = "00.0 C"
}
