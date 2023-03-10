"use strict";
/*
let hasDriverLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriverLicence) console.log("I can drive");

/////////////////////////////////////////////////
////////////////FUNKCIJE


function logger() {
  console.log("my name is drazen");
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleOrange = fruitProcessor(3, 4);
console.log(appleOrange);



function man(firstName, secondName) {
  const personsName = `My name is ${firstName} ${secondName}`;
  return personsName;
}

const myName = man("John", "Wain");
console.log(myName);

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

const age1 = calcAge(1993);
console.log(age1);

function calcAge2(birthYear) {
  return 2023 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age2);



const calcAge3 = function (birthYear) {
  return 2023 - birthYear;
};
const age3 = calcAge3(1997);
console.log(age3);


const calcAge4 = (birthYear) => 2023 - birthYear;
const age5 = calcAge4(2000);

console.log(age5);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1993, "Drazen"));
console.log(yearUntilRetirement(1999, "Marija"));



/////ASSIGNMENTS

function describeCounty(country, population, capitalCity) {
  const currentCountry = `${country} has ${population} milion people, and its capital city is ${capitalCity}`;
  return currentCountry;
}

const myCountry1 = describeCounty("Serbia", 7, "Belgrade");
console.log(myCountry1);

const myCountry2 = describeCounty("Japan", 70, "Tokio");
console.log(myCountry2);

const myCountry3 = describeCounty("Russia", 700, "Moscow");
console.log(myCountry3);

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const serbia = percentageOfWorld1(7);
console.log(serbia);

const percentageOfWorld2 = (population) => (population / 7900) * 100;
const china = percentageOfWorld2(1441);
console.log(china);



function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePeaces = cutFruitPieces(apples);
  const orangePeaces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePeaces} peace of apples and ${orangePeaces} peace of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

function mnozenje(broj1) {
  return broj1 * 2;
}

function mojPrimer(x, y) {
  const pomnozi = mnozenje(x);
  const pomnozi1 = mnozenje(y);
  const juice = `${pomnozi}. ${pomnozi1}`;
  return juice;
}
console.log(mojPrimer(7, 54));

const calcAge = function (year) {
  return 2023 - year;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else if (retirement < 40) {
    return `You are retired`;
  }
};

console.log(yearUntilRetirement(1973, "Drazen"));
console.log(yearUntilRetirement(1950, "Marija"));


////////////////////////////////////////
////////////CHALANGE 1

const calcAverage = (x, y, z) => (x + y + z) / 3;

let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);

console.log(dolphinsAverage, koalasAverage);

//////UNIVERZALNO


function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Winner is Dolphins, with average of ${dolphinsAverage}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Winner is Koalas with average of  ${koalasAverage}`);
  } else {
    console.log(`no one wins`);
  }
}

checkWinner(dolphinsAverage, koalasAverage);

dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);

console.log(dolphinsAverage, koalasAverage);

checkWinner(dolphinsAverage, koalasAverage);

//////////////////////////arrays

const friends = ["Luka", "Nikola", "Stefan"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

const lastName = "Simonovic";
const drazen = ["drazen", lastName, 1993, friends, "teacher"];
console.log(drazen);
console.log(drazen.length);

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1963, 1973, 1993, 1997, 1999, 2024];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
console.log(ages);

const populations = [7, 10, 85, 96];
console.log(populations);

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const per1 = percentageOfWorld1(populations[0]);
const per2 = percentageOfWorld1(populations[1]);
const per3 = percentageOfWorld1(populations[2]);
const per4 = percentageOfWorld1(populations[3]);

const percenage = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percenage);


const friends = ["Luka", "Nikola", "Stefan"];

friends.push("Milos");
console.log(friends);

friends.unshift("Uros");
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

/////////////////////////
//CHALLeNGE

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tip);

const myProfile = {
  firstName: "Drazen",
  lastName: "Simonovic",
  age: 2023 - 1993,
  job: "teacher",
  friends: ["Luka", "Nikola", "Uros"],
};

/*
console.log(myProfile);
console.log(myProfile.job);

const x = "Name";
console.log(myProfile["first" + x], myProfile["last" + x]);

const interestedIn = prompt(
  "chose between firstName, lastName, age, job, friends"
);

if (myProfile[interestedIn]) {
  console.log(myProfile[interestedIn]);
} else {
  console.log("Wrong");
}

console.log(
  `${myProfile.firstName} has ${myProfile.friends.length} friends, and his best friend is ${myProfile.friends[0]}.`
);


const myProfile = {
  firstName: "Drazen",
  lastName: "Simonovic",
  birthYear: 1993,
  job: "teacher",
  friends: ["Luka", "Nikola", "Uros"],
  hasDriversLicense: false,
  calcAge: function (year) {
    return 2023 - year;
  },
};

console.log(myProfile.calcAge(myProfile.birthYear));

if (myProfile.hasDriversLicense) {
  console.log(
    `${myProfile.firstName} is a ${myProfile.calcAge(
      myProfile.birthYear
    )}-year old ${myProfile.job}, and he has a drivers license`
  );
} else {
  console.log(
    `${myProfile.firstName} is a ${myProfile.calcAge(
      myProfile.birthYear
    )}-year old ${myProfile.job}, and he has not drivers license`
  );
}

const myCountry = {
  country: "Serbia",
  capital: "Belgrade",
  language: "Serbian",
  population: "7",
  neighbors: [
    "Hungary",
    "Romania",
    "Bulgaria",
    "Macedonia",
    "Albania",
    "Montenegro",
    "Bosnia and Hercegovina",
    "Croatia",
  ],
  describe: function () {
    console.log(
      `${this.country} has a ${this.population} million people who speaks ${this.language}, and ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    );
  },

};

myCountry.describe();
console.log(myCountry);


for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weight repetition ${rep}`);
}

const myProfile = [
  "Drazen",
  "Simonovic",
  30,
  "teacher",
  ["Luka", "Nikola", "Uros"],
  true,
];

console.log(myProfile);

const types = [];

for (let i = 0; i < myProfile.length; i++) {
  console.log(myProfile[i], typeof myProfile[i]);
  types[i] = typeof myProfile[i];
}

console.log(types);

const years = [1993, 1973, 1963, 1997, 1999];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

console.log("1111111continue", "111111111111111111break");

for (let i = 0; i < myProfile.length; i++) {
  if (typeof myProfile[i] !== "string") continue;

  console.log(myProfile[i], typeof myProfile[i]);
}

for (let i = 0; i < myProfile.length; i++) {
  if (typeof myProfile[i] === "number") break;

  console.log(myProfile[i], typeof myProfile[i]);
}

 

const myProfile = [
  "Drazen",
  "Simonovic",
  30,
  "teacher",
  ["Luka", "Nikola", "Uros"],
  true,
];

for (let i = myProfile.length - 1; i >= 0; i--) {
  console.log(myProfile[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Repetition ${rep}`);
  }
}



for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weight repetition ${rep}`);

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep}`);
  rep++;
}
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`loop is about to end, becouse you roled 6`);
  }
}


const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips);
console.log(totals);


const newCalc = function (x) {
  return x * 2;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const calcs = [];

for (let i = 0; i < array.length; i++) {
  console.log(`I train ${array[i]}`);
  const calc = newCalc(array[i]);
  calcs.push(calc);
}

console.log(calcs);

console.log("There is elections in Varvarin");

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}


const populations = [10, 1441, 332, 96];
console.log(populations);

const percentages = [];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

for (let i = 0; i < populations.length; i++) {
  const x = percentageOfWorld1(populations[i]);
  percentages.push(x);
}

console.log(percentages);


const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Rusia"],
];
const x = [];
console.log(listOfNeighbors);
console.log(`Neighbors of Finland are ${listOfNeighbors[0]}`);

for (let i = listOfNeighbors.length - 1; i >= 0; i--) {
  const pera = listOfNeighbors[i];
  x.push(pera);
}
console.log(x);

console.log(`Neighbors of Finland are ${x[0]}`);

const populations = [10, 1441, 332, 96];
console.log(populations);

const percentages = [];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

let i = 0;
while (i < populations.length) {
  const x = percentageOfWorld1(populations[i]);
  percentages.push(x);
  i++;
}

console.log(percentages);
 */
