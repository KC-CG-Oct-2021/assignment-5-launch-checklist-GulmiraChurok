// Write your helper functions here!
try{require('isomorphic-fetch');}catch(error){};

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById("missionTarget");
    div.innerHTML = ` 
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= ${imageUrl}>
   `;
}

function validateInput(testInput) {
    let result = "";
    //let numberInput = Number(testInput);
    //console.log(numberInput);
    if (testInput === ""){
        result = "Empty";
    }
   else if(isNaN(testInput)){
       result = "Not a Number";
   } else{
       result = "Is a Number"; 
   }
   return result; 
}
//validateInput(pilotName);
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotData = validateInput(pilot);
  let copilotData = validateInput(copilot);
  let fuelData = validateInput(fuelLevel);
  let massData = validateInput(cargoLevel);
  let status = document.getElementById("launchStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  fuelStatus.innerHTML = "";
  cargoStatus.innerHTML = "";
  pilotStatus.innerHTML = "invalid data";
  copilotStatus.innerHTML = "invalid data";
list.style.visibility = "hidden";
if(pilotData === "Empty" || copilot==="Empty" || fuelData ==="Empty" || massData ==="Empty"){
    status.innerHTML = "Shuttle Not Ready for Launch";  
    status.style.color = "rgb(199, 37, 78)";
    try{alert("All fields are required!")}catch(error){};
    //return;
}
if(pilotData==="Is a Number" || copilotData==="Is a Number" || fuelData==="Not a Number" || massData==="Not a Number"){
    status.innerHTML = "Shuttle Not Ready for Launch"; 
    status.style.color = "rgb(199, 37, 78)"; 
    try{alert("Make sure to enter valid information for each field!")}catch(error){};
    //return; 
}
if (pilotData === "Not a Number"){
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
}
if (copilotData === "Not a Number"){
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
}
if(fuelLevel < 10000){
    status.innerHTML = "Shuttle Not Ready for Launch";  
    status.style.color = "rgb(199, 37, 78)";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    //return; 
} else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
}
if(cargoLevel > 10000){
    status.innerHTML = "Shuttle Not Ready for Launch"; 
    status.style.color = "rgb(199, 37, 78)"; 
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    //return; 
} else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
}


if (pilotStatus.innerHTML.includes("is ready") && copilotStatus.innerHTML.includes("is ready") && fuelStatus.innerHTML.includes("high enough") && cargoStatus.innerHTML.includes("low enough")) {
    status.innerHTML = "Shuttle is Ready for Launch"; 
    status.style.color = "rgb(65, 159, 106)";
}

list.style.visibility = "visible";

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(response => response.json()).then(function(json){
            return json; 
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNumber = Math.floor(Math.random()*6); 
    let randomPlanet = planets[randomNumber];
    return randomPlanet; 
}


try{
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;}catch(error){};
