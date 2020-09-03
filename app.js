var corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
// TODO: REPLACE YOUR TOKEN
var apiToken = '?token=ZAWafueiwitra0tTaAR2QzY3054rfHOgvv47pBG8Dug';

// fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
}

// creates the promise
const corsPromise = () => new Promise((resolve, reject) => {
  const request = doCORSRequest({ url: "https://trefle.io/api/v1/plants" + apiToken });
  resolve(request);
})

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(request => request.onload = request.onerror = function () {
  // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
});
