window.onload=function(){
    document.getElementById("theButton").addEventListener("click", function(){
        var input = document.getElementById('LInput').value;
        fetchLocation(input);
      });
}

async function fetchLocation(city){
    try{
        var locationFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7d2c7093f2814dbb6f630558dc52d5c5` ,{mode: 'cors'})
        var locationJson = await locationFetch.json()
        // console.log(locationJson)
        // console.log(locationJson.name , locationJson.weather[0].main)
        UpdateSite(locationJson);
    } catch(err){
        console.log(err)
    }
}


function UpdateSite(locationJson){
    document.getElementById('main_temp').innerText = locationJson.main.temp;;

    document.getElementById('LName').innerText = locationJson.name;
    document.getElementById('countryName').innerText = locationJson.sys.country;
    document.getElementById('feels').innerText = locationJson.main.feels_like;
    document.getElementById('humidity').innerText = locationJson.main.humidity;
    document.getElementById('temp').innerText = locationJson.main.temp;;
    document.getElementById('wind_speed').innerText = locationJson.wind.speed;
    document.getElementById('Weather').innerText = locationJson.weather[0].main;
}


