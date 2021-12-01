//  NOTES FROM TODAYS LECTURE - JAMES BAIN OF LIGHTHOUSE LABS
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

// (3) before main function call
// (1) before set timeout
// (2) after set timeout
// (5) after main function call
// { userName: 'Scully', firstName: 'Dana' }
// hello, Scully
