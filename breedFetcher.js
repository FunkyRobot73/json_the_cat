const request = require('request');
const searchTerm = (process.argv.slice(2))[0];

const fetchBreedDescription = function(search, callback) {
  
  request('https://api.thecatapi.com/v1/breeds/search?q=' + search, (error, response, body) => {
    
    if(error) {
      console.log("stupid error!!!");
      callback(error, null)
      return
    }

    const data = JSON.parse(body);
    if(!data.length) {
      callback("Breed Not Found", null)
      return 
    }

    const breed = data[0]
    callback(null, breed.description)
    
  });
};

const myfunction1 = function(err, desc) {
  if(err) console.log("We Got an Error");
  console.log(searchTerm + ":", desc);
}

// const myfunction2 = function(err, desc) {
//   console.log("Inside FUNC#2", desc);
// }

// const myfunction3 = function(err, desc) {
//   console.log("FUNC#3 I do Nothing!");
// }


fetchBreedDescription(searchTerm, myfunction1)
// fetchBreedDescription(searchTerm, myfunction2)
// fetchBreedDescription(searchTerm, myfunction3)

module.exports = { fetchBreedDescription };