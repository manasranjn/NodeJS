//*-- Accessing the global object--
// console.log(global);

//!Accessing the global object
global.myGlobal = 'Hello global object';
// console.log(global.myGlobal);

//?To check if a variable is truly global variable
// console.log("myGlobal" in global); //?true
// console.log("MyGlobal" in global); //?false

// console.log(__dirname);
// console.log(__filename);


//!Using "setInterval" and "clearInterval"
// let count = 0;
// const interval = setInterval(() => {
//     console.log("Hello world");
//     count++;
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 1000);


//!Using "setTimeout"
setTimeout(() => {
    console.log("Delayed by 5 seconds");
}, 5000);