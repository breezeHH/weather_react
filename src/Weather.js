import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response.data.main.temp);
    alert(`The temperature in ${props.city} is ${response.data.main.temp} °`);
  }
  let apiKey = "83d4ec1e65679a00b9602279433dcdb9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
