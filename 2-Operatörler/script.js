// // Operatörler 

// let val;
// const a=10;
// const b=5;
// const c = 5;
// let d = 4;

// // 1- Aritmetik Operatörler

// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = d++;
// val = ++d;
// val = --d;
// val = d--;

// // 2- Atama Operatörleri

// val = a;
// val += a;
// val -= a;
// val *= a;
// val /= a;
// val %= a;
// // 3- Karşılaştırma Operatörleri

// val = a==b;
// val = b==c;
// val = b===c; // Hem değer hem tip kontrolü yapılır.
// val = a!=b;
// val = a!==b;
// val = a > b;
// val = a <= b; // Eşittir her zaman sağda olur.


// // 4- Mantıksal Operatörler

//     //  && (And)

//     // true && true   => true
//     // true && false  => false
//     // false && false => false

//     val = (a>b) && (a>c)

//     // || (Or)

//     // true || true   => true
//     // true || false  => true
//     // false || false => false

//     val = (a>b) || (a>c)

//     // ! (Not)

//     // !true  => false
//     // !false => true

//     val = !(a>b)

// console.log(val);
// console.log(typeof val);

//////////////////////////////////////////

// Demo : Operators

// 1 - Can ve Ada'nın boy ve kilolarına göre bilgilerini alın.
// 2 - Alınan bilgilere göre kilo endekslerini hesaplayınız.(Kg/boy**2)
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.
/*
0 - 18,4 : Zayıf
18,5 - 24,9: Normal
25,0 - 29,9: Fazla Kilolu
30,0 - 34,9: Şişman (Obez)
*/ 

let indexCan;
let indexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;

indexAda = (kgAda) / (heigtAda*heigtAda);
indexCan = (kgCan) / (heigtCan* heigtCan);

console.log(indexAda.toFixed(2), indexCan.toFixed(2));

let adaHigherIndex = indexAda>indexCan;
let canHigherIndex = indexCan>indexAda;

console.log("Ada nın kilo indeksi Can ın kilo indeksinden büyük müdür? : "+ adaHigherIndex);
console.log("Can ın kilo indeksi Ada nın kilo indeksinden büyük müdür? : "+ canHigherIndex);

let adaZayif = (indexAda > 0) && (indexAda <= 18.4);
let adaNormal = (indexAda > 18.5) && (indexAda <= 24.9);
let adaKilolu = (indexAda >= 25) && (indexAda <=29.9);
let adaSisman = (indexAda >= 30) && (indexAda <= 34.9);

console.log("Ada Zayıf: "+adaZayif);
console.log("Ada nın kilosu normal : "+adaNormal);
console.log("Ada kilolu mu: "+adaKilolu);
console.log("Ada şişman mı: "+adaSisman);