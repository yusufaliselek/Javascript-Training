// Traversing the Dom

let val;

let list = document.querySelector(".list-group");

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //text
val = list.childNodes[0].nodeType; //element


val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent="new item";
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling;
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;
val = list.children[1].previousElementSibling;

// console.log(val)

/*
Düğüm bir öğe düğümüyse, nodeType özelliği 1 değerini döndürür.

Düğüm bir öznitelik düğümüyse, nodeType özelliği 2 değerini döndürür.

Düğüm bir metin düğümüyse, nodeType özelliği 3 değerini döndürür.

Düğüm bir yorum düğümüyse, nodeType özelliği 8 değerini döndürür.
*/

for(let i=0; i<list.childNodes.length; i++){
    
    if(list.childNodes[i].nodeType==3){
        console.log(list.childNodes[i]);
    }
}


