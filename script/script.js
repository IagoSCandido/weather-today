const apiKey = "d3a7c990763bba64d7f7df3d7dc401cf";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const language = "pt_br";
const units = "metric";

function clientResponse(response) {
  document.querySelector(".text-city").innerHTML = `Tempo em: ${response.name}`;
  document.querySelector(".temp").innerHTML =
    "Temperatura: " + Math.floor(response.main.temp) + "°C";
  document.querySelector(".text-weather-condition").innerHTML =
    response.weather[0].description;
  document.querySelector(".humidity").innerHTML =
    "Umidade: " + response.main.humidity + "%";
  document.querySelector(
    ".img-weather-forecast"
  ).src = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
}

async function getCityByName(cityName) {
  const apiResponse = await fetch(
    `${url}${cityName}&appid=${apiKey}&lang=${language}&units=${units}`
  ).then((res) => res.json());

  clientResponse(apiResponse);
}

function onClickButton() {
  const city = document.querySelector(".input-city").value;
  getCityByName(city);
  console.log(city);
}
