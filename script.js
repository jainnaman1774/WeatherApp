// http://api.weatherapi.com/v1/current.json?key=ed4dc7123910484f80c54701251305&q=Mumbai&aqi=no

// const temperatureField = document.querySelector(".temp");
// const locationField = document.querySelector(".time_location p");
// const dataField = document.querySelector(".time_location span");
// const weatherField = document.querySelector(".condition p");
// const searchField = document.querySelector(".search_area");
// const form = document.querySelector("form");

// form.addEventListener("submit", searchForLocation);

// let target = "mumbai";
// const fatchresult = async (targetLocation) => {
//   let url =
//     "http://api.weatherapi.com/v1/current.json?key=ed4dc7123910484f80c54701251305&q=${targetLocation}&aqi=no";
//   const res = await fetch(url);
//   const data = await res.json;
//   console.log(data);

//   let locationName = data.location.data;
//   // console.log(locationName)
//   let time = data.location.localtime;
//   let temp = data.current.temp_c;
//   let comdition = data.current.condition.text;
// };

// function searchForLocation(e) {
//   e.preventDefault();

//   target = searchField.value;

//   fatchresult(target);
// }
// fatchresult(target);

//http://api.weatherapi.com/v1/current.json?key=31013a5770ca4120b41140537251705&q=Agra&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const datetimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");

const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation);
let target = "Bhopal";
const fetchResults = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=31013a5770ca4120b41140537251705&q=${targetLocation}&aqi=no
`;

  const res = await fetch(url);

  const data = await res.json();
  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;

  let temp = data.current.temp_c;

  let condition = data.current.condition.text;

  updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, locationName, time, condition) {
  temperatureField.innerHTML = temp;
  locationField.innerHTML = locationName;
  datetimeField.innerHTML = time;
  conditionField.innerHTML = condition;
}
function searchForLocation(e) {
  e.preventDefault();

  target = searchField.value;
  fetchResults(target);
}
fetchResults(target);
