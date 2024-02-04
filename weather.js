// https://openweathermap.org/

const API_KEY = "3d17eecde5d1386087c9321dbcefe403";

function onSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} /${data.main.temp}`;
      city.style.color = 'white';
      weather .style.color = 'white';
    });
}

function onError() {
  console.log("error");
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
