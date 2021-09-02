const apiKey = `46ad7457603b9b0104e633e78cd60e16`;
const inputField = document.getElementById("input-field");
const cityName = document.getElementById("city");
const temparature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const weatherIcon = document.getElementById("weather-icon");

const fetchData = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${apiKey}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => analyzingData(data));
};
const analyzingData = (x) => {
  console.log(x);
  cityName.innerText = x.name;
  try {
    temparature.innerText = x.main.temp;
    condition.innerText = x.weather[0].main;
    const url = `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", url);
    inputField.value = "";
  } catch (error) {
    alert("Please Enter A Valid Name");
    inputField.value = "";
  }
};
