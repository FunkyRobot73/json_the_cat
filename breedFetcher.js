const request = require('request');
const args = process.argv;
let gnort = (args.slice(2));
const cat = gnort[0];
//const file = gnort[1];
//const fs = require('fs')
//const text = "./index.html"
//const net = require('net');
//const words = ""

request('https://api.thecatapi.com/v1/breeds/search?q=' + cat, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body)
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

  
  try {
    const breed = (data[0].name);
    const desc = (data[0].description);
    console.log(breed + ":", desc);
    }
  catch(err) {
    console.log("Input proper breed!");
  } 

  //console.log(data[0].name);

});



