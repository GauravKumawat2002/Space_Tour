("use strict");
var v1, v2, v3, v4, v5;
// exporting these variables so that they can be accessed to the dataFetch.js
function variableChanger(pageName) {
  if (pageName === ".destination") {
    v1 = document.getElementsByClassName("destination--title");
    v2 = document.getElementsByClassName("destination--description");
    v3 = document.getElementsByClassName("destination--image");
    v4 = document.getElementsByClassName("planetDistance");
    v5 = document.getElementsByClassName("planetTravel");
    console.log(v1, v2, v3, v4, v5);
  } else if (pageName === ".crew") {
    v1 = document.getElementsByClassName("crewMember--role");
    v2 = document.getElementsByClassName("crewMember--name");
    v3 = document.getElementsByClassName("crewMember--description");
  } else if (pageName === ".technology") {
    console.log("fuck You !!");
  }
}
