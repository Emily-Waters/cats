/*

// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('(1)breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("(3)In readFile's Callback: it has the data.");

    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.

    if (!error) return data;
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value


const bombay = breedDetailsFromFile('Bombay');


console.log('(2)Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

*/


// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed,callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) return callback(data);
  });
};

const breed = "Bombay";

breedDetailsFromFile(breed, ((data) => {
  console.log(`\nData for the ${breed} cat:\n\n${data}\n\n`);
}));


/*  NOTES FROM TODAYS LECTURE - JAMES BAIN OF LIGHTHOUSE LABS
//  https://github.com/jcbain/west_2021_11_22/tree/main/w02d02_async_control_flow

const higherOrderFunction = (callback) => {
  const data = {
    userName: 'Mulder'
  };

  console.log('(1) before set timeout');
  
  setTimeout(() => {
    data.userName = "Scully";
    callback(data);
  },  1000);
  
  console.log('(2) after set timeout');

};


console.log('(3) before main function call');

higherOrderFunction((data) => {

  data.firstName = "Dana";
  console.log(data);
  console.log(`hello, ${data.userName}`);

});

console.log('(5) after main function call');

//  OUTPUT AS FOLLOWS

// (3) before main function call
// (1) before set timeout
// (2) after set timeout
// (5) after main function call
// { userName: 'Scully', firstName: 'Dana' }
// hello, Scully


*/


