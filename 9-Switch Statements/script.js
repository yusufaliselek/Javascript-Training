// Switch Statements
// let category = "beyaz eşya";

// switch(category){
//     case "telefon":
//         console.log("Telefon kategorisi");
//     break;

//     case "bilgisayar":
//         console.log("Bilgisayar kategorisi");
//     break;

//     default:
//         console.log("Yanlış kategori");
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = "Pazar";
//     break;

//   case 1:
//     day = "Pazartesi";
//     break;

//   case 2:
//     day = "Salı";
//     break;

//   case 3:
//     day = "Çarşamba";
//     break;

//   case 4:
//     day = "Perşembe";
//     break;

//   case 5:
//     day = "Cuma";
//     break;

//   case 6:
//     day = "Cumartesi";
//     break;
// }

// console.log(`Bugün günlerden ${day}`);

// let day;

// switch (new Date().getDay()) {
//   case 0:
//   case 6:
//     day = "Haftasonu";
//     break;

//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     day = "Haftaiçi";
//     break;
// }

// console.log(`Bugün ${day}`);

const age = 19;
const firstName = "Sena";

switch(true){
    case age>=0 && age<=12:
        console.log(`${firstName} is a child`);
    break;

    case age>=13 && age<=19:
        console.log(`${firstName} is a teenager`)
    break;

    default:
        console.log(`${firstName} is an adult`);
}
