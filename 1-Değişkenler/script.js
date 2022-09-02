// console.log("Merhaba");

// Değişkenler
/*
var age;
console.log(age);

age = 20;
console.log(age);

var fullName = "Yusuf Ali Selek";
console.log(fullName);

fullName = "Ali Selek";
console.log(fullName);

// Değişken Tanımlama Kuralları

// Sayısal ifade ile başlayamaz

var yas1;
var _yas2;
var $yas3;
*/
// Komut isimleri ile tanımlama yapılamaz

// !! var switch

// var, cosnt  ***sabit***, let 
//************************************************************************** */


// Ders 3: Değişken Tipleri

// Primitive Types
/*
    // String
    let firstName = "Çınar";
    console.log(typeof firstName);

    // Number
    let age = 20;
    let money = 100.5;

    console.log(typeof money);

    // Boolean
    let isActive = true;
    console.log(typeof isActive);

    // null
    let job = null;
    console.log(typeof job);

    //undefined
    let car;
    console.log(typeof car);
*/
// Reference Types - Objects

//Array
/*
let names= ["Ali", "Ahmet", "Can"];
console.log(typeof names);

// Object

let adress= {
    city: "Kocaeli",
    country: "Türkiye"
}
console.log(typeof adress);

// Function 

var calculateAge = function(){
    return 0;
};

console.log(typeof calculateAge);
*/

// Ders 4 : Tür Dönüşümü

// let val;

// //number to string

// val = String(10);

// // bool to string

// val = String(true);

// // date to string

// val = String(new Date());

// // array to string

// val = String([1,2,3,4]);

// // toString

// val = (10).toString();
// val = (false).toString();

// // String to Number

// val = Number("10");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("a");
// val = Number([1,2,3,4]);

// // parseInt
// //parseFloat

// val = parseInt("10");
// val = parseInt("10.5");
// val = parseFloat("10.5");


// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(3));

// CTRL+K+C YORUM SATIRI

// Ders 5 :

// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// ** Müşteri adı
// ** Müşteri soyadı
// ** Müşteri tc kimlik
// ** Müşteri sipariş toplamı
// ** Müşteri cinsiyet
// ** Müşteri adres bilgisi
// ** Müşteri hobiler


var customerName = "Yusuf Ali";
var customerSurname = "Selek";
var customerId = "12345678910";
var total = 205.6;
var gender = true; //erkek true, kadın false
var address = { //Object Türü
    city : "Kocaeli",
    district : "Karamürsel",
    body : "4 Temmuz Mah. Selek Apt." 
};
var hobbies = ["Sinema", "Kitap", "Spor"]; // Array-Dizi

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order1 = "100";
var order2 = "150";

toplam = (Number(order1)+ Number(order2));
console.log(toplam);

// ** Aşağıdaki siparişlerin toplamını hesaplayınız.

var order3 = "100.2";
var order4 = "150.5";

toplam2 = (parseFloat(order3)+parseFloat(order4));
console.log(toplam2);

// ** Aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız.

var order4 = "100.2";
var order5 = "150.5";

var toplam3 = (parseInt(order4)+parseInt(order5));
console.log(toplam3);

// ** Aşağıda verilen doğum yılına göre yaş hesaplayınız. 

const yearOfBirth = 1986; // const sabittir hatanın önüne geçersiniz. 

var age = (new Date().getFullYear()-yearOfBirth);
console.log(age);

// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

var course = "Modern Javascript Kursu";

console.log(course.length);
