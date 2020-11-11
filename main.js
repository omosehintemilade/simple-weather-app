// alert('hello')

let locationTimezone = document.querySelector('.location-timezone')
let temperatureDegree = document.querySelector('.temperature-degree')
let temperatureDescription = document.querySelector('.temperature-description')
let degreeSection = document.querySelector('.degree-section')
let degreeUnit = document.querySelector('.degree-unit')
let skycons = document.querySelector('.sky-icons')
    // console.log(degreeUnit.textContent);
window.addEventListener('load', onWindowLoad)

function onWindowLoad() {
    let long
    let lat

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(async function(parameter) {

            long = parameter.coords.longitude
            lat = parameter.coords.latitude
                // console.log(parameter);
                //         const api = `
                //   https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}
                //             `

            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e1d1ecac71b5c9e36604148fabd3231f`)
                // let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/37.8267,-122.4233`)
            let result = await response.json()
                // console.log('result', result)
                // console.log('hello')
                // return
                // console.log(result.weather[0].description);
            console.log(result);
            temperatureDegree.textContent = result.main.temp
            temperatureDescription.textContent = result.weather[0].description
            skycons.textContent = result.weather[0].main
            locationTimezone.textContent = result.name
            degreeSection.addEventListener('click', () => {
                if (degreeUnit.textContent === 'F') {
                    // (32°F − 32) × 5/9
                    degreeUnit.textContent = 'C'
                    temperatureDegree.textContent = Math.floor((result.main.temp - 32) * 5 / 9)
                } else {
                    degreeUnit.textContent = 'F'
                    temperatureDegree.textContent = result.main.temp
                        // console.log(result);
                }
            })
        })
    }
}
// degreeSection.addEventListener('click', changeDegreeUnit)


function changeDegreeUnit(parameter) {
    // console.log('hello');

}
// async function start() {
//     // let response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=6.583589&lon=3.390675&appid=e1d1ecac71b5c9e36604148fabd3231f')
//     let response = await fetch(`https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/37.8267,-122.4233`, {
//         mode: 'no-cors',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     let result = await response.json()
//     console.log(result);
// }
// start()