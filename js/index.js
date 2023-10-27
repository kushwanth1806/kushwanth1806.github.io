/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

const api = "7df79289573a3fdbbe9f6798c0c1fd0e";

//const apiKey = 'YOUR_OPENWEATHER_API_KEY';
//const city = 'Hyderabad'; // Replace with the desired city
//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

function fetchurl(){

    let city = document.getElementById("innu").value; // Replace with the desired city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {
    // Handle the weather data
    console.log(data);
    const weatherInfoDiv = document.getElementById("weather-info");
      weatherInfoDiv.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${data.main.temp} K</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
  })
  .catch(error => {
    console.error(error);
  });
}
