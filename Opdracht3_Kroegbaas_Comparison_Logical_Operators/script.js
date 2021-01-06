const age = 18;
const isFemale = true;
const driverStatus = "Bob"
const name = "Bram"
const totalAmount = 100


if (age >= 18) {
    console.log("Gezellig, je mag naar binnen :)");
} else if (age < 18) {
    console.log("Helaas, je bent nog te jong om naar binnen te mogen :(");
}
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting");
}

if (isFemale) {
    console.log("Het is Ladiesnight, dus kom er in :))");
}
else {
    console.log("Het is vandaag Ladiesnight, dus helaas geen entree voor heren :((");
}

if (driverStatus === "Bob") {
    console.log("Goed gedaan, jij bent de Bob en mag gaan rijden :)))");
} else {
    console.log("Helaas, je hebt teveel gedronken en mag geen auto meer rijden ;)");
}

if (name === "Sarah" || name === "Bram") {
    console.log("Jij krijgt een gratis biertje")
}

if (totalAmount >= 100) {
    console.log("Jij krijgt een gratis fles champagne!!!");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Jij krijgt een gratis portie nacho's!!");
} else if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Jij krijgt een gratis portie (vega)bitterballen)!");
} else if (totalAmount < 25) {
    console.log("Bedankt voor je komst :)");
}
