// Functions

// function ageCalculate(BirthYear) {
//     return 2018-BirthYear;
// };

// let val = ageCalculate(2000);

// console.log(val);

// function EmekliligeKacYil(dogumYili,isim){
//     let yas = ageCalculate(dogumYili);
//     let emeklilik = 65 - yas;

//     if (emeklilik>0){
//         console.log(`${isim}, emekli olmana ${emeklilik} yıl kaldı.`);
//     }else{
//         console.log(`${isim}, zaten emekli oldunuz.`);
//     }
// }

// EmekliligeKacYil(2012,"Ada");
// EmekliligeKacYil(2000,"Mert");
// EmekliligeKacYil(1950,"Ahmet");

// Function Declarations

// function sum(a,b){
//     var c= a+b;
//     return c;
// }

// console.log(sum(10,20)) // Functions Declarations

// Function Expressions

// const sum = function(a,b){ // En çok kullanılan tanımalama tipi, a ve b fonksiyonların argümanları olarak gösterilir.
//     if (typeof a ==="undefined"){
//         a = 0;
//     }
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,30));  // Eğer iki değer gösterip bir değer verirsek Not a Number NaN olur.
// console.log(sum(10); //NaN
// console.log(sum(10,30,40)); // 40 değerini göz ardı eder.
// Az parametre gönderirsek sorun var çok parametre gönderirsek göz ardı edilir.

// ES6 default parameters

const sum = function(a=0,b=0){
    
    var c = a+b;
    return c;
}

function sumAll(){
    var total = 0;
    for(let i = 0; i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}

console.log(sum(10,30,40,50));
console.log(sumAll(10,20,30,40,50));