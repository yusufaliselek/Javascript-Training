// var trafigeCikis = new Date("04/20/2019");
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));

// if ( trafiktekiGun<=365){
//     console.log("1. servis bakım süreniz gelmiştir.")
// } else if (trafiktekiGun>365 && trafiktekiGun<=365*2){
//     console.log("2. servis bakım gününüz gelmiştir.")
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log("3. servis bakım süreniz gelmiştir.");
// }else{
//     console.log("Bilinmeyen bir süre");
// }

// console.log(trafiktekiGun);

var result = prompt("Who's there?");

if (result == "cancel") {
  console.log("cancelled");
} else if (result == "admin") {
    var password = prompt("Enter your password");

    if (password == "cancel"){
        console.log("cancelled");
    }else if (password == "admin"){
        console.log("Welcome Admin");
    }else{
        console.log("Wrong password!");
    }

}else{
    console.log("I dont know you");
}
