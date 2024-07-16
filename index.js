const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const resultContainer = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const url = 'https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427';
    const options = {
        method: 'GET',
	    headers: {
            'x-rapidapi-key': 'da0082ab9emsh4ebd0c0d23da4a8p1c3c4bjsn4e9044178326',
		    'x-rapidapi-host': 'air-quality.p.rapidapi.com'
	    }
    };
    fetch(url,options)
        .then(response=>response.json())
        .then(result=>{
            let readings = result.data[0];
            console.log(readings);
            aqiResult.textContent=readings.aqi;
            coResult.textContent=readings.co;
            no2Result.textContent=readings.no2;
            pm2Result.textContent=readings.pm2;
            o3Result.textContent=readings.o3;
            pm10Result.textContent=readings.pm10;
            so2Result.textContent=readings.so2;
            resultContainer.style.display = 'flex';
        })
});