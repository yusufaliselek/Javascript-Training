/*

    Demo Loops : Sayı Tahmin Oyunu

    1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.

    **  puanlama yapın
    *** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak, can;
var tahmin,
  sayac = 0;
var sayi = Math.floor(Math.random() * 10 + 1);

console.log(sayi);
can = Number(prompt("Kaç kerede bileceksiniz?"));

hak = can;

while (hak > 0) {

  hak--;
  sayac++;
  tahmin = Number(prompt("Bir sayı giriniz"));
  
  if (sayi == tahmin) {
    console.log(`Tebrikler! ${sayac} defada bildiniz.\n`);
    console.log(`Puan: ${(100 - (sayac - 1) * (100 / can)).toPrecision(3)}`);
    break;
  } else if (sayi > tahmin) {
    console.log("yukarı");
  } else {
    console.log("aşağı");
  }

  if (hak == 0) {
    console.log("Hakkınız bitti." + sayi);
  }
}
