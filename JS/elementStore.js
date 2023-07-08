"use strict";
var v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  navigationTabs,
  navHighlight = document.querySelectorAll(".main-nav a");
// THIS FUNCTION ALLOWS THE SITE TO MANAGE MEMORY ALLOCATION PROPERLY BY ONLY DEFININING VARIABLES WHICH ARE NEEDED BY CURRENT PAGE & REST VARIABLES ARE COLLECTED BY JAVASCRIPT'S GARBAGE COLLECTOR.

function variableChanger(pageName) {
  if (pageName === ".destination") {
    v1 = document.getElementsByClassName("planetName");
    v2 = document.getElementsByClassName("planetDescription");
    v3 = document.getElementsByClassName("planetImage");
    //
    v6 = document.getElementsByClassName("planetImage2");
    v4 = document.getElementsByClassName("planetDistance");
    v5 = document.getElementsByClassName("planetTravel");
    navigationTabs = document.getElementsByClassName("tabs");
    data_func(".destination", "Moon");
  } else if (pageName === ".crew") {
    v1 = document.getElementsByClassName("crewMember--role");
    v2 = document.getElementsByClassName("crewMember--name");
    v3 = document.getElementsByClassName("crewMember--bio");
    v4 = document.getElementsByClassName("crewMember--img");
    navigationTabs = document.getElementsByClassName("dot-indicators");
  } else if (pageName === ".technology") {
    v1 = document.getElementsByClassName("vehicle-type");
    v2 = document.getElementsByClassName("technology--img");
    v3 = document.getElementsByClassName("technology--description__meta");
    navigationTabs = document.getElementsByClassName("numbered-indicators");
  }
}
