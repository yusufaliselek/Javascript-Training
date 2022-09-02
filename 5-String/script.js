// Strings

const firstName = "Yusuf Ali";
const lastName = "Selek";
let hobbies = "sinema spor kitap yazılım";
const age = 20;
let val;

// string concat

val = firstName+" "+lastName;
val = "Yusuf Ali";
val+=" Selek";

val = "Benim adım "+firstName+" "+lastName+" ve yaşım "+age+ " İzmit\'te yaşıyorum.";

//string concat
val = firstName.concat(" ",lastName);

//string length
// val = val.length;

// string uppercase - lowercase
// val = val.toUpperCase();
// val = val.toLowerCase();

// //string replace
// val = "    "+val.replace("yusuf", "çınar")+"      ";

// //trim
// val = val.trim();

// // indexOf
//val = val[0];
// val = val.indexOf("selek"); // -1 olursa yoktur

// substring
// val = val.substring(0,3);

// slice
// val = val.slice(3);

//split
val = hobbies.split(" ");

console.log(val);
console.log(typeof val);