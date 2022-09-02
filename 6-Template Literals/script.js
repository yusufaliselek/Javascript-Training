// Template Literals  ALTGR+VİRGÜL*2
 const fullName = "Yusuf Ali Selek";
 const city = "Kocaeli";
 const yearOfBirth = 2000;

 let val;

val = "My name is "+fullName+
    " I'm "+(2021-yearOfBirth)+ " years old"+
    " and I live in "+city;

    //ternary operator

val = `my name is ${fullName} I'm ${(2021-yearOfBirth>=18)?"over 18":"under 18"} years old an I live in ${city}`

 console.log(val);
