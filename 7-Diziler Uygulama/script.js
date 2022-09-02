// Demo Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
var cars = ["Bmw","Mercedes","Opel","Mazda"];
//Dizi kaç elemanlıdır.
console.log(cars.length);

// Dizinin ilk ve son elemanı nedir ?
console.log(cars[0]+" "+cars[(cars.length)-1]);

//"Renault" değerini dizinin sonuna ekleyiniz.
cars.push("Renault");
console.log(cars);

//"Toyota" değerini dizinin başına ekleyiniz.
cars.unshift("Toyota");
console.log(cars);

//"Renault değerini siliniz".
cars.pop();
console.log(cars);

// "Toyota" değerini siliniz
cars.shift();
console.log(cars);

// Dizi elemanlarını ters çevirin.
cars.reverse();
console.log(cars);

// Dizi elemanlarını alfabetik olarak sıralayın.
cars.sort();
console.log(cars);

// [1,2,5,80] dizisini sıralayın.
var value = [1,2,5,80];
value.sort();

console.log(value);

// Opel değeri dizinin bir elemanı mıdır?
let val = cars.indexOf("Opel");
console.log(val);

//var str = "Chevrolet,Dacia";
//ifadesini diziye çeviriniz.

var str = "Chevrolet,Dacia";
var arr2 = str.split(",");
console.log(arr2);

// Oluşturulan 2 dizinin elemanlarını başka bir dizi ile birleştirin.

let combination = cars.concat(arr2);
console.log(combination);

// Oluşturulan diziden son 2 elemanı siliniz.

console.log(combination.splice(combination.length-2,2));
console.log(combination);


/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.

    studentA : Yiğit Bilgi 2010
    studentB : Sena Turan  1999
    studentC : Ahmet Turan 1998

*/
studentA = ["Yiğit","Bilgi",2010];
studentB = ["Sena","Turan",1999];
studentC = ["Ahmet","Turan",1998];

students = [studentA,studentB,studentC];

console.log(students);
