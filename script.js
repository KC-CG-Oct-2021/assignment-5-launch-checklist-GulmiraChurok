// Write your JavaScript code here!
try{
const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");
const { validateInput, formSubmission } = require("./scriptHelper");
}catch(error){}

window.addEventListener("load", function() {
validateInput();
let list = document.querySelector("#faultyItems");
list.style.visibility = "hidden";
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
   listedPlanetsResponse.then(function (result) {
    console.log("a",listedPlanetsResponse);
    console.log("b", result);
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets 
       //and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets); 
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })
  
   let testForm = document.querySelector("form");
   testForm.addEventListener("submit", function(event){
       event.preventDefault();
       let pilot = document.querySelector("input[name = pilotName]").value; 
       let copilot = document.querySelector("input[name = copilotName]").value; 
       let fuel = document.querySelector("input[name = fuelLevel]").value; 
       let mass = document.querySelector("input[name = cargoMass]").value; 
     
    formSubmission(document, list, pilot, copilot, fuel, mass);
    })
})