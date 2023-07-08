"use strict";
// THIS FUNCTION FETCHES DATA FROM THE JSON FILE & THEN TRANSFER IT TO THE VARIABLES DECLARED AS PER THE WEBPAGE & UPDATES THE DATA WITHOUT REFRESHING THE PAGE
function data_func(type, name) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      if (type === ".destination") {
        const pageDetails = data.destinations;
        for (let i = 0; i < pageDetails.length; i++) {
          if (name === pageDetails[i].name) {
            v1[0].innerHTML = pageDetails[i].name;
            v2[0].innerText = pageDetails[i].description;
            v4[0].innerText = pageDetails[i].distance;
            v5[0].innerText = pageDetails[i].travel;
            v3[0].innerHTML = `<source srcset="${pageDetails[i].images.webp}" type="image/webp"> <img src="${pageDetails[i].images.png}" alt="the ${pageDetails[i].name}">`;
          }
        }
      } else if (type === ".crew") {
        const pageDetails = data.crew;
        for (let i = 0; i < pageDetails.length; i++) {
          if (name === pageDetails[i].name) {
            v1[0].innerText = pageDetails[i].role;
            v2[0].innerText = pageDetails[i].name;
            v3[0].innerText = pageDetails[i].bio;
            v4[0].innerHTML = `<source srcset=${pageDetails[i].images.webp} type="image/webp"> <img src=${pageDetails[i].images.png} alt=${pageDetails[i].name}>`;
          }
        }
      } else if (type === ".technology") {
        const pageDetails = data.technology;
        for (let i = 0; i < pageDetails.length; i++) {
          if (name === pageDetails[i].name) {
            v1[0].innerText = pageDetails[i].name;
            v3[0].innerText = pageDetails[i].description;
            v2[0].innerHTML = `<source media="(min-width: 1100px)" srcset=${pageDetails[i].images.portrait} alt=${pageDetails[i].name}> 
            <img src=${pageDetails[i].images.landscape} alt="Tech Image" >`;
          }
        }
      }
    });
}
// expand this function to include the other types of data make is more dynamic
