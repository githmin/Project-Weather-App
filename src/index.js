var input = "boralesgamuwa";



fetchLocation(input);

async function fetchLocation(city){
    try{
        var locationFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d2c7093f2814dbb6f630558dc52d5c5` ,{mode: 'cors'})
        var locationJson = await locationFetch.json()
        console.log(locationJson)
        console.log(locationJson.name , locationJson.weather[0].main)
    } catch(err){
        console.log(err)
    }
}