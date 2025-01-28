

const input = document.querySelector("#city-input");
const Search = document.querySelector("#search-btn");

const citylocation = document.querySelector(".city-location")
const citylocaltime = document.querySelector(".city-localtime")
const citytemp = document.querySelector(".city-temp")
    

 async function GetaData(CityName){
    let promis =  await fetch(`http://api.weatherapi.com/v1/current.json?key=507727ec9b47488c8f435557242412&q=${CityName}&aqi=no`);

    return await promis.json();
 }

Search.addEventListener("click", async () => {
    const value = input.value;
    const result = await GetaData(value);

    citylocation.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    citylocaltime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
 
})

