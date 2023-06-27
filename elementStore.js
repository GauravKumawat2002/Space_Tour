function variableChanger(pageName) {
  if (pageName === ".destination") {
    var v1 = document.getElementsByClassName("destination--title");
    var v2 = document.getElementsByClassName("destination--description");
    var v3 = document.getElementsByClassName("destination--image");
    var v4 = document.getElementsByClassName("planetDistance");
    var v5 = document.getElementsByClassName("planetTravel");
    console.log(v1, v2, v3, v4, v5);
  } else if (pageName === ".crew") {
    console.log("fuck You !!");
  } else if (pageName === ".technology") {
    console.log("fuck You !!");
  }
}
