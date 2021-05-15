//add javascript for typing city name in input field and fetching the data via api to throw result.

let input = document.querySelector(".input__container input");
let button = document.querySelector(".input__container button");
let cityName = document.querySelector(".city__name__text");
let cityTemp = document.querySelector(".city__temperature__text");
let forecastDesc = document.querySelector(".forecast__description");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let tempValue;
  let inputValue = input.value;
  let key = "d5b46d2bbe500860bf2bd3ad63f3c6fa";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      ",&appid=" +
      key
  )
    .then((response) => response.json())
    .then((data) =>
      data.name != inputValue
        ? alert("City Name Invalid!, Please Type Correct City Name.")
        : show(data)
    );

  const show = (data) => {
    tempValue = Math.floor(data.main.temp - 273.15);
    cityName.innerHTML = inputValue;
    cityTemp.innerHTML = tempValue + " Deg";
    forecastDesc.innerHTML = data.weather[0].description;
    input.value = "";
    bgColor();
  };

  // change background/All color
  const bgColor = () => {
    // Add random color generator
    let colorArray = ["#87ceeb", "#FFF9D6", "#afc3cc"];
    let colorRandom = colorArray[Math.floor(Math.random() * colorArray.length)];
    document.body.style.background = colorRandom;
    button.style.background = "transparent";
    button.style.borderColor = "#000000";
  };
});
