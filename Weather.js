import {btn, getData} from "./script.js";
const map=document.getElementById('map')
const location=document.getElementById('location');
const latData=document.getElementById('lat')
const lonData=document.getElementById('log')

const lat=document.getElementById('data-lat')
const lon=document.getElementById('data-long')
const timezone=document.getElementById('timezone')
const wind_speed=document.getElementById('wind-speed')
const pressure=document.getElementById('pressure');
const humidity=document.getElementById('humidity');
const wind_direction=document.getElementById('wind-direction')
const uv_index=document.getElementById('uv-index')
const feels_like=document.getElementById('feels-like')

const getWeatherData=async(url)=>{
    const weatherData = await fetch(url);
    const weather= await weatherData.json();
    return weather
}

function showData()
{
    const data=getData('https://api.ipgeolocation.io/ipgeo?apiKey=9a05ff1bc40d43c895a370723e467af2')
    data.then((response)=>{

        const frame=document.createElement('div')
        frame.innerHTML=`<iframe src="https://maps.google.com/maps?q=${response.latitude}, ${response.longitude}&output=embed" width="460" height="310" frameborder="0" style="border:0"></iframe>`
        map.appendChild(frame)
        latData.innerText+=` ${response.latitude}`
        lonData.innerText+=` ${response.longitude}`

        const weatherData= getWeatherData(`https://api.openweathermap.org/data/2.5/weather?lat=${response.latitude}&lon=${response.longitude}&appid=0310cbf06f31b35fdf8859655339853c`)

        weatherData.then(response=>{
            location.innerText +=` ${response.name}`;
            lat.innerText +=` ${response.coord.lat}`;
            lon.innerText +=` ${response.coord.lon}`;
            timezone.innerText +=` ${response.timezone}`;
            wind_speed.innerText +=` ${response.wind.speed}`;
            pressure.innerText +=` ${response.main.pressure}`;
            humidity.innerText +=` ${response.main.humidity}`;
            wind_direction.innerText +=` ${response.wind.deg}`;
            uv_index.innerText +=` ${response.main.grnd_level}`;
            feels_like.innerText +=` ${response.main.feels_like}`;
        }).catch(error=>{console.log(error)})

    }).catch((error) =>{
        console.error(error)
    })


}
console.log(btn)
btn.onclick=showData()

