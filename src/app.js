function updateTime () {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = document.querySelector (".dateLA");
let losAngelesTimeElement = document.querySelector (".timeLA");
let losAngelesTime= moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime. format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = 
losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}


  //Paris
let parisElement = document.querySelector("#paris");
if (parisElement) {
let parisDateElement = document.querySelector (".dateFR");
let parisTimeElement = document.querySelector (".timeFR");
let parisTime= moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime. format("MMMM Do YYYY");
parisTimeElement.innerHTML = 
parisTime.format(
  "h:mm:ss [<small>]A[</small>]"
);
}
}


function updateCity (event){
    let cityTimeZone = event.time.value;
    let cityName = cityTimeZone.replace('_',"").split("/");
    let cityTime = moment(). tz(cityTimeZone);
    let citiesElement =document.querySelector ("#cities");
    citiesElement=`
<div class="city">
  <div>
  <h2>${cityTimeZone}</h2>
  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
  <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>
<br />
    `
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector ("#city");
citiesSelectElement.addEventListener("change", updateCity);