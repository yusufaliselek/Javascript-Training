const taskList = document.querySelector("#task-list");

// removing elemet
// taskList.remove();
// taskList.childNodes[7].remove();
// taskList.children[3].remove();
//taskList.removeChild(taskList.children[0]);

// ** removing attribute
// taskList.children[1].removeAttribute("class");

// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute("class");
// }

// ** Replacing Elements
// const cardHeader = document.querySelector(".card-header");

// create element
// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("My List"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);
// console.log(cardHeader);


// ** Classes

let val;

link = taskList.children[0].children[0];

val = link.className;
val = link.classList;

console.log(taskList);