function searchCity(city) {
  let apiKey = "748d5734be19te1af0e3a12aa9abaofd";
}

function citySearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-city-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", citySearchSubmit);
