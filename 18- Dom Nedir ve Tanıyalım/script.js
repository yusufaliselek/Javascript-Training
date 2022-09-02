// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute('src');

///////////////////////////////////////////////////
// Selecting Elements

// *** Single Elements

// document.getElementById


// val = document.getElementById("header");
// val = document.getElementById("header").id;
// val = document.getElementById("header").className;

// val = document.getElementById("header");
// // val = val.id;
// // val = val.className;

// val.style.fontSize="45px";
// val.style.color="red";
// val.style.fontWeight="bold";
// //val.style.display="none";

// val = document.getElementById("header").innerText="My ToDo App";
// val = document.getElementById("header").innerHTML="<b>My ToDo App</b>";

// document.QuerySelector()

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color="red";
// document.querySelector("li:last-child").style.color="blue";
// document.querySelector("li:nth-child(2)").style.color="yellow";
// document.querySelector("li:nth-child(3)").textContent="task item";  //innerText==textContent
// document.querySelector("li:nth-child(4)").textContent="task item";
// // document.querySelector("li").className="list-group-item list-group-item-primary";

// document.querySelector("li").classList.add("active");

// *** Multiple Elements

// class name
// document.getElementByClassName()

let val;

// val  = document.getElementsByClassName("list-group-item");
// // val = document.getElementsByClassName("list-group-item")[0];
// // val = document.getElementsByClassName("list-group-item")[2];
// // val = val[2];

// val[1].style.color="blue";
// val[1].style.fontSize="25px";
// val[2].textContent="new item";

// for(let i=0; i<val.length ; i++){
//     console.log(val[i].style.color="red");
//     console.log(val[i].textContent="new item");
// }

// document.getElementsByTagName()

// val =  document.getElementsByTagName("li");
// val =  document.getElementById("task-list");
// val =  val.getElementsByTagName("a");

// document.querySelectorAll()

// val = document.querySelectorAll("li");

// val.forEach(function(item, index){
//     item.textContent=`${index} - hello`;
// });


// val = document.querySelectorAll("li:nth-child(even)");

// val.forEach(function(item) {
//     item.style.background="#ccc";
// });

console.log(val);