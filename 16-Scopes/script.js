// Scopes

// ** Global Scopes
var name1 = "Çınar";
var age = 25;

function logName(){
    var name1 = "Ada";
    var age = "12"; // Fonksiyon dışına çıkamaz.
    console.log("function scope", name1, age);
}


console.log(age);

console.log(name1);
logName();

// ** Local Scope

// Fonksiyonlar kendi scope'larını oluşturur. Her fonksiyonun içerisinde tanımlamış olduğunuz değişken sadece o fonksiyonlara özeldir.
// *** Ama block'lar yeni scope oluşturmaz.  ***

console.log("**************************");


if(true){
    var model = "Opel";
    let year = 2016;
    const color = "white";
    console.log("Block scope", model, year, color);
    // ES6 ile gelen let ve const block scope oluşturur.
    // var ile tanımlanan değişken dışarıdan ulaşılır.
}

console.log("Block scope", model);

var i = 1;

for(let i=0;i<10;i++){
    console.log("i",i);
}
console.log(i);