// LOCAL STORAGE
let val;

//setitem
const firstName = localStorage.setItem("firstName","Yusuf Ali");
const lastName = localStorage.setItem("lastName","Selek");
let hobbies = ["sinema","araba","gezmek"];

//getitem
val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");

//remove item
// localStorage.removeItem("firstName");
// localStorage.removeItem("lastName");

//clear
// localStorage.clear(); //bütün elemanları siler

// set array to storage
localStorage.setItem("hobbies",JSON.stringify(hobbies));

val = JSON.parse(localStorage.getItem("hobbies"));


console.log(val);
console.log(localStorage);

//SESSION STORAGE
// const city = sessionStorage.setItem("city","Kocaeli");
// const country = sessionStorage.setItem("country","Türkiye");


// console.log(sessionStorage);