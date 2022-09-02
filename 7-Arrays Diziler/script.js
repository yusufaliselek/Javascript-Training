// Diziler

let names = ["Çınar", "Sena", "Ada", "Yiğit"];
let years = [1970, 1999, 2012, 1990];
let mix = ["Sadık", "Turan", 1983, null, undefined, ["sinema", "kitap"]];

// // get array item
// console.log(names[0]);

// // set array item
// names[names.length]="emel"; //sona eklemek için dizinin uzunluğunu kullanıyoruz

// // add item
// years.push(1980);
// years.unshift(1986);

// // remove item
// years.pop();
// years.shift();

// //indexof  arama
// let index = names.indexOf("Ada");
// console.log("index : "+index);

// //reverse ters çevirmek
// names.reverse();

// //sort büyükten küçüğe sıralar veya alfabeye göre
// years.sort();

// //concat
// let val = years.concat(names);
// console.log(val);

////splice çoklu düzenleme işlemi birinci virgül nerden başlamak için, 2. virgül kaç eleman silmek istediğiniz boş ise hepsini siler, ondan sonra eklemek istediğiniz elemanları yazınız.
// console.log(names);
// names.splice(0,1,"seda");

function over18(year) {
  let age = 2021 - year;
  return age >= 18;
}

//find tek bir elemanı bulur

// let val = years.find(over18);

//filter birden fazla elemanı döndürür

function over18(year) {
  let age = 2021 - year;
  return age >= 18;
}

let val = years.filter(over18);

console.log(val);

console.log(names.length);
console.log(names);
console.log(typeof names);

// console.log(years);
// console.log(mix);
