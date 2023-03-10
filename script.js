/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Drazen");
console.log("29");

let firstName = "Drazen";

console.log(firstName);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let myCountry = "Serbia";
let continent = "Europe";
let myCountryPopulation = "7.000.000";

console.log(myCountry);
console.log(continent);
console.log(myCountryPopulation);

let javaScriptIsFun = true;
javaScriptIsFun = "Yes";

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof javaScriptIsFun);
console.log(typeof "Drazen");

let year;
console.log(year);
console.log(typeof year);

year = 1993;
console.log(typeof year);

let age = 30;
age = 31;
console.log(age);

const birthYear = 1993;
console.log(birthYear);


console.log(ageDrazen);
console.log(ageMarija);

console.log(ageDrazen, ageMarija);
console.log(ageDrazen - ageMarija);

const firstName = "Drazen";
const lastName = "Simonovic";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x + 10
console.log(x);

x *= 4;//4 na kvadrat
console.log(x);

x++; //sledbenik
console.log(x);

console.log(ageMarija > ageDrazen);
console.log(ageDrazen > ageMarija);

console.log(ageDrazen - ageMarija >= 7);
console.log(now - 30 > now - 24);

const now = 2023;

const ageDrazen = now - 1993;
const ageMarija = now - 1999;

console.log(now - 1993 > now - 1999);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageDrazen - ageMarija) / 2;
console.log(averageAge);
*/

//////////// CHALLENGE 1

/*
let markWeight = 98;
let markHeight = 1.82;
let markBMI = markWeight / markHeight ** 2;

console.log(markBMI);

let johnWeight = 135;
let johnHeight = 1.95;

let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);

const markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);

//CHALLENGE 2


if (markBMI > johnBMI) {
  console.log(`Marks BMI is higher then John's`);
} else {
  console.log(`JohnBMI is higher then mark's`);
}
*/

/*
const firstName = "Drazen";
const job = "teacher";
const birthYear = 1993;
const year = 2023;

const drazen =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";

console.log(drazen);

const drazenNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;

console.log(drazenNew);


const age = 16;

if (age >= 18) {
  console.log("Marija can start driving licence.");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Marija can't start driving licence. Wait another ${yearsLeft} year.`
  );
}

const birthYear = 1993;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


let population = 17;

if ((averagePopulation = population > 33)) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is bellow average");
}


////////////////////////Prebacivanje stringa u number

//manuelno


const inputYear = "1993";
console.log(Number(inputYear));

console.log(inputYear + 18);

console.log(Number(inputYear) + 18);

//automatsko

console.log("I'm " + 29 + " years old");


let n = "1" + 1;
n = n - 1;
console.log(n);

///////////////////////// === ,==


const age = 29;
if (age === 29) console.log(`You have same age as Drazen`);

const favourite = Number(prompt("What is your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 55) {
  console.log("Cool!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 55 or 7");
}

if (favourite !== 9) {
  console.log("pogodak");
}

////BOOLEAN LOGIC
/////////////////AND, OR, NOT

const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(hasDriversLicence && !hasGoodVision);

const shouldDrive = hasDriversLicence && hasGoodVision;

if (shouldDrive) {
  console.log("Sara is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false; // C

console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sara is able to drive!");
} else {
  console.log("Someone else should drive...");
}


/////CHALLENGE 3

const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

console.log(dolphinsScore, koalasScore);

if (dolphinsScore > koalasScore && dolphinsScore) {
  console.log("Dolphins win!");
} else if (dolphinsScore === koalasScore) {
  console.log("It's draw");
} else if (koalasScore > dolphinsScore && koalasScore) {
  console.log("Koalas win!");
}

//AKO JE SKOR VECI OD 100

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log("Dolphins win!");
} else if (dolphinsScore === koalasScore) {
  console.log("It's draw");
} else if (koalasScore > dolphinsScore && koalasScore >= 100) {
  console.log("Koalas win!");
}


////////////////////////////////////////////////////////
///////////////*SWITCH */ /////////
/*

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan my course structure.");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("not a valid day");
}

//isto preko if else

if (day === "monday") {
  console.log("Plan my course structure.");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "sunday" || day === "saturday") {
  console.log("Enjoy weekend");
} else {
  console.log("not a valid day");
}


const age = 29;

age >= 18 ? console.log("you can drnk") : console.log("you cant drink");
*/

/////////////CHALLENGE 4

const bill = 453;
const tipSmall = (bill / 100) * 15;
const tipBig = (bill / 100) * 20;

const totalSmall = bill + tipSmall;
const totalBig = bill + tipBig;
console.log(bill, tipSmall);

if (bill > 50 && 300 > bill) {
  console.log(bill + (bill / 100) * 15);
} else if (bill > 300) {
  console.log(bill + (bill / 100) * 20);
}

bill > 50 && bill < 300
  ? console.log(
      "your bill is " +
        bill +
        " and should pay tip of " +
        tipSmall +
        " . So your bill is " +
        totalSmall +
        "$."
    )
  : console.log(
      "your bill is " +
        bill +
        " and should pay tip of " +
        tipSmall +
        " . So your bill is " +
        totalBig +
        "$."
    );
/*
const age = 22;
const timeLeft = 18 - age;
if (age > 18) {
  console.log("milos can drive");
} else {
  console.log("milos cant drive. You should wait " + timeLeft + " year.");
}
*/ 