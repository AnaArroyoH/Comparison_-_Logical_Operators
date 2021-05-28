let age = 38;
let isFemale = true;
let driverStatus = "bob";
let name = "Maria";
let totalAmount = "125";

//hieronder tests met andere waardes

/*
let age = 23;
let isFemale = false;
let driverStatus = "Bram";
let name = "Bram";
let totalAmount = 73;*/


/*
let age = 17;
let isFemale = false;
let driverStatus = "Bob";
let name = "Bob";
let totalAmount = 35;*/

/*
let age = 43;
let isFemale = true;
let driverStatus = "Sarah";
let name = "Sarah";
let totalAmount = 23;*/


if (age > 17) {
    console.log("Goed, jij mag naar binnen");
} else {
    console.log("Helaas, jij mag niet naar binnen");
}

if (isFemale) {
    console.log("Je geeft aan dat je vrouw bent en mag naar binnen");
} else {
    console.log("Helaas, als man mag je niet naar binnen");
}

if (driverStatus == "bob") {
    console.log("Omdat jij de Bob bent, mag je rijden");
} else {
    console.log("Jij bent niet de Bob en mag dus niet rijden");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Jammer, jij krijgt geen korting")
}

if (name === "Bram" || name === "Sarah") {
    console.log("Yes, je krijgt een gratis brietje!");
} else {
    console.log("Je heet niet Sarah of Bram, dus geen gratis biertje");
}

if (totalAmount >= 100) {
    console.log("Wat een feest, een gratis fles champange voor jullie!");
} else if (totalAmount > 50) {
    console.log("Super, een gratis portie nachos voor jullie!");
} else if (totalAmount > 25) {
    console.log("Lekker, gratis bitterballen voor jullie!");
}
/*Note to self: orde does matter, when putting 25 on top,
I only got to see the bitterballen statement even when totalAmount was more tha 100*/

/*Just practicing 
let x = 5
console.log (x > 4);
console.log (x >= 5)*/



