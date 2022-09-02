// // Date Object


// let d = new Date();
// let birthday = new Date(1990,1,5);

// // Set Methpds
// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);
// d.setMinutes(45);
// d.setSeconds(20);


// // Get Methods

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getSeconds());

// console.log(d.getFullYear()-birthday.getFullYear());
// console.log(d.getMonth()-birthday.getMonth());
// console.log(d.getDate()-birthday.getDate());

// console.log(d);
// console.log(typeof d);

// -----U Y G U L A M A-------

// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

// let dt = new Date();

// console.log(dt);
// console.log(dt.getMonth()+1);
// console.log(dt.getDate());
// console.log(dt.getFullYear());

// // ** Tarih ve saat bilgisini içeren bir date objesi oluşturunuz.

// var dtA = new Date("8/24/2010");
// var dtB = new Date(2010,7,24,14,50,10);


// console.log(dtA);
// console.log(dtB);

// // 1/1/1990 tarihinden bir gün öncesini gösteriniz.

// var dtC = new Date("1/1/1990");

// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth-1);

// console.log(dtC);

// // İki tarih arasındaki geçen zamanı bulunuz.

// var start = new Date("1/1/1990");
// var end = new Date("1/1/1991");

// var milisecond = end - start;
// var saniye = milisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gun = saat / 24;

// console.log("milisecond : "+ milisecond);
// console.log("saniye : "+saniye);
// console.log("dakika : "+dakika);
// console.log("saat : "+ saat);
// console.log("gün : "+ gun);

// // Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır.

// var annelerGunu = new Date();
// annelerGunu.setHours(0,0,0,0);
// annelerGunu.setFullYear(2021);
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4);

// while(annelerGunu.getDay() !=0) {

//     annelerGunu.setDate(annelerGunu.getDate()+1)
// }
// annelerGunu.setDate(annelerGunu.getDate()+7)
// console.log(annelerGunu);

// // ** Yaş hesaplama nasıl yapılır ?

// var birthday = new Date("11/05/2000");
// var ageDiffms = Date.now() - birthday.getTime();
// var ageDate = new Date(ageDiffms);

// console.log(ageDate.getFullYear()-1970);

// console.log(birthday.getTime());
// console.log(Date.now());

var start3= new Date("10/10/2016");
var end3 = new Date("10/11/2018");

var milisecond1 = end3 - start3;
var saniye1 = milisecond1 / 1000;
var dakika1 = saniye1 / 60;
var saat1 = dakika1 / 60;
var gun1 = saat1 / 24;

console.log("saat : "+ saat1);

