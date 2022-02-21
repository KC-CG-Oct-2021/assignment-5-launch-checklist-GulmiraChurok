// Write your JavaScript code here!

//const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
//validateInput();
let list = document.querySelector("#faultyItems");
list.style.visibility = "hidden";
//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets 
//        //and add that information to your destination.
//    })
  
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