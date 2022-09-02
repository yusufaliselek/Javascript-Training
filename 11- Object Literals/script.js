// Object Literals

let val;

let person = {
    firstname: "Çınar",
    lastname: "Turan",
    age: 7,
    hobbies: ["music", "game"],
    address: {
        city: "Kocaeli",
        country: "Türkiye"
    },
    getBirthYear : function(){
        return 2018-this.age;
    }
};

val = person;
val = person.firstname;
val = person["firstname"];
val = person.age;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val  =person.address.city;
val = person.address["city"];
val = person.getBirthYear();


console.log(val);
console.log(typeof person);

let people = [
                {firstname: "Çınar", lastname: "Turan"},
                {firstname: "Sena", lastname: "Turan"},
                {firstname: "Seda", lastname: "Turan"}, 
             ];

val = people[0];
val = people[2].firstname;

for(let i=0; i<people.length; i++){
    console.log(people[i].firstname);
}

// console.log(val);
// console.log(typeof people);