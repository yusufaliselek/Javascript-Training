// // Numbers

// let val;

// // val = Number("10");
// // val = parseInt("10");
// // val = parseFloat("10.5");
// // val = parseInt("10a");
// // val = parseInt("a10a"); Hata

// // val = isNaN("a10"); //Kullanıcıdan alınan bilginin sayısala çevirilmeden önce NaN olup olmadığını sorgulamak için kullanılır.

// // var num = 10.12456789;
// // val = num.toPrecision(5); //Sayının tamamı baz alınır ve istenilen kadar basamak yazılır.
// // val = num.toFixed(5); // Sayının virgülden sonraki kısmı baz alınır ve istenilen kadar yazılır.

// val = Math.PI;
// val = Math.round(2.4); // en yakına yuvarlar.
// val = Math.ceil(2.4); // her zaman yukarıya yuvarlar.
// val = Math.floor(2.6); // Her zaman aşağıya yuvarlanılır.
// val = Math.sqrt(64); // Karekök
// val = Math.pow(2,3); // 2 üzeri 3
// val = Math.abs(-100); // Mutlak değer
// val = Math.min(1,2,3,4,5,6); // en küçük sayıyı verir.
// val = Math.max(1,2,80,5,70); // en büyük sayıyı verir.
// val = Math.random(); // 0-1 arasında rastgele sayı *10 yaparsak 1-9 arasında verir
// val = Math.floor(Math.random()*10); // 0-9 arası rastgele sayı verir ve virgülden sonrasını atar.


// console.log(val);
// console.log(typeof val);

// ** ** U Y G U L A M A ** ** //

var num = 15.123456789;

// toplamda 3 basamaklı sayı kullan.

val = num.toPrecision(3);

// ondalık kısmı 3 basamakta sınırla

val = num.toFixed(3);

// en yakın sayıya yuvarla

val = Math.round(num);

// aşağı yuvarla

val = Math.floor(num);

// yukarı yuvarla

val = Math.ceil(num);

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

val = Math.min(1,2,10,56,20);
val = Math.max(1,2,10,56,20);

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.

var min = 50;
var max = 100;

// console.log(Math.floor(min+(Math.random()*(max-min))));

/* Bir personelin yaptığı mesaiye göre aldığı maaşı hesaplayalım.
    ** Brüt Maaş: 3700 TL
    ** Brüt Mesai: 10.3 TL

    Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
    Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?

*/

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;

var toplamBrutMaas = brutMaas + (mesaiSuresi * mesaiUcreti);
var toplamNetMaas = toplamBrutMaas - (toplamBrutMaas*1/4);


console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));

