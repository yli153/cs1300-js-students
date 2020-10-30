var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=ZtimvewWj3iwX0n9AlgxreT9ubCLLTEJeVT_lhOl8Es";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

let isToggle = false;
// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
const runRequest = () => {
  isToggle = !isToggle;
  if (isToggle) {
    corsPromise().then(
      (request) =>
        (request.onload = request.onerror = function () {
          const plantData = JSON.parse(request.response).data;
          updateGrid(plantData);
        })
    );
  } else {
    document.getElementById('plant-grid').innerHTML = "";
  }
}

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
const updateGrid = (plantData) => {
  plantData.forEach(plant => {
    const profile = createPlantProfile(plant);
    document.getElementById('plant-grid').appendChild(profile);
  })
}

const createPlantProfile = (plant) => {
  const profile = document.createElement('div');
  const name = document.createElement('h3');
  name.innerHTML = "Common Name: " + plant.common_name;

  const year = document.createElement('h4');
  year.innerHTML = "Year: " + plant.year;

  const image = document.createElement('img');
  image.src = plant.image_url;

  profile.appendChild(name);
  profile.appendChild(year);
  profile.appendChild(image);
  return profile;
}
