setInterval (function () {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = document.querySelector (".dateLA");
let losAngelesTimeElement = document.querySelector (".timeLA");
let losAngelesTime= moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = losAngelesTime. format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = 
`${losAngelesTime. format("h:mm:ss")}
<small>${losAngelesTime.format("A")}</small>`;

}, 1000);


setInterval (function () {
//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = document.querySelector (".dateFR");
let parisTimeElement = document.querySelector (".timeFR");
let parisTime= moment().tz("Europe/Paris");
parisDateElement.innerHTML = parisTime. format("MMMM Do YYYY");
parisTimeElement.innerHTML = 
`${parisTime. format("h:mm:ss")}
<small>${parisTime.format("A")}</small>`;
}, 1000);

function updateCity (event){
    let cityTimeZone = event.time.value;
    let cityTime = moment(). tz(cityTimeZone);
    let citiesElement =document.querySelector ("#cities");
    citiesElement.innerHTML=cityTimeZone;
    citiesElement=`
    `
}

let citiesSelectElement = document.querySelector ("#city");
citiesSelectElement.addEventListener("change", updateCity);