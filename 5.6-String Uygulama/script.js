// Demo: Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascript Kursu sıfırdan ileri seviye";
var val;

// Cümle kaç karakterlidir?
val = sentence.length;

// kaç kelimeden oluşuyor?
val = sentence.trim().split(" ").length;

//Tüm cümleyi küçük harfe çevirin.
val = sentence.toLowerCase();

// Cümlenin başındaki ve sonundaki boşlukları siliniz.
val = sentence.trim();

// "-" karakterini silin.
val = sentence.replace("-", "");

// url'nin içinden str kısmını çıkarınız.
var str = "http://";
console.log(url.substr(str.length));
console.log(url.slice(str.length));

//url hangi protocol'u kullanmaktadır ? (http,https)
console.log(url.startsWith("https"));
console.log(url.startsWith("http"));

// url, ".com" ifadesini içeriyor'mu?
console.log(url.indexOf(".com"));
console.log(url.includes(".com"));

//url string ifadesini geçerli bir url olarak düzenleyiniz.
console.log(url.toLowerCase()
            .replace(/ /g,"-")
            .replace(/ı/g,"i")
            .replace(/ü/g,"u")
            .replace(/ö/g,"o")
            .replace(/ç/g,"c")
            .replace(/ş/g,"s")
            .replace(/ğ/g,"g")
);
