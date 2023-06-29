"use strict";

function data_func(type, name) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      if (".destination") {
        const pageDetails = data.destinations;
        // console.log(pageDetails);
        for (let i = 0; i < pageDetails.length; i++) {
          if (name === pageDetails[i].name) {
            v1.innerText = pageDetails[i].name;
            v2.innerText = pageDetails[i].description;
            v3.innerText = pageDetails[i].description;
            v4.innerText = pageDetails[i].description;
            v5.innerText = pageDetails[i].description;
          }
        }
      }
    });
}
// expand this function to include the other types of data make is more dynamic

data_func();

// const destination = data.destinations;
// console.log(destination);
// // console.log(destination.length);
// if (type === `destination`) {
//   for (let i = 0; i < destination.length; i++) {
//     if (name === destination[i].name) {
//       planetName.innerText = destination[i].name;
//       planetDescription.innerHTML = destination[i].description;
//       planetTravel.innerHTML = destination[i].travel;
//       planetDistance.innerHTML = destination[i].distance;
//       planetImage.innerHTML = `<source srcset="${destination[i].images.webp}" type="image/webp">
//       <img src="${destination[i].images.png}" alt="the moon">`;
//     }
//   }
// }
