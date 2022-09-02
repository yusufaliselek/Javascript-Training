// Loops in Array & Objects

let cars = ["Bmw", "Mercedes", "Toyota"];
let people =[
    {firstname: "Ada", lastname: "Bilgi"},
    {firstname: "Mert", lastname: "Kara"},
    {firstname: "Erdem", lastname: "Sancak"},
];



// for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// }

//               for in
// for(let i in cars){
//     console.log(`index : ${i} \nvalue : ${cars[i]}`);
// }

// Arrays

// for(let i=0;i<people.length;i++){
//     console.log(`Ad: ${people[i].firstname} \nSoyad: ${people[i].lastname}`);
// }

//Objects
// for (let i in people){
//     console.log(`Ad: ${people[i].firstname} \nSoyad: ${people[i].lastname}`);
// }




// console.log(cars);

//foreach

// cars.forEach(function(item){

//     console.log(item);
// });

// people.forEach(function(item){
//     console.log(item.firstname);
// });


//map : returns an array

// let val = people.map(function(item){
//     return item.firstname + " " + item.lastname;  
// });

// console.log(val);

let numbers = [1,5,6,8,10];

let num = numbers.map(function(n){
    return n*n;
});

console.log(num);