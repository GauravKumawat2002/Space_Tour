("use strict");
var v1, v2, v3, v4, v5;
var v6;
function variableChanger(pageName) {
  if (pageName === ".destination") {
    v1 = document.getElementsByClassName("planetName");
    v2 = document.getElementsByClassName("planetDescription");
    v3 = document.getElementsByClassName("planetImage");
    //
    v6 = document.getElementsByClassName("planetImage2");
    v4 = document.getElementsByClassName("planetDistance");
    v5 = document.getElementsByClassName("planetTravel");
    data_func(".destination", "Moon");
    // console.log(v1, v2, v3, v4, v5);
  } else if (pageName === ".crew") {
    v1 = document.getElementsByClassName("crewMember--role");
    v2 = document.getElementsByClassName("crewMember--name");
    v3 = document.getElementsByClassName("crewMember--bio");
    v4 = document.getElementsByClassName("crewMember--img");
  } else if (pageName === ".technology") {
    v1 = document.getElementsByClassName("vehicle-type");
    v2 = document.getElementsByClassName("technology--img");
    v3 = document.getElementsByClassName("technology--description__meta");
    console.log(v1, v2, v3);
  }
}
