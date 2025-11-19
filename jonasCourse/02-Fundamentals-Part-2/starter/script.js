"use strict";

// function logger() {
//     console.log("WHAD UP!")
// }

// function almightyFormula (a, b, c) {
//      console.log(`a = ${a}, b = ${b}, c = ${c}`)
//    const formu = ((a * a) + (b * b)) * (c * c)

//    return formu;
// }

// const calculate = almightyFormula(2,7,9);

// console.log(calculate);

/*const calAge = function  (birthYear, currentYear){
     
     return  Number(currentYear) - Number(birthYear);
}

const age = calAge(1997, 2025);
console.log(age)*/

/*const calAge1 = (birthYear, currentYear) => 
{
const calb = Number(currentYear) - Number(birthYear);
const myYear = `This year i'm ${calb} years old`
return calb;
}

console.log(calAge1(1997, 2025))*/

/*const age = function (birthYear)
{
    return 2025 - birthYear;
}

const yearsLefttoRetire = function  (birthyrr, namee)
{
    const retireAge = 65 - age(birthyrr);
    const alreadyRetired = retireAge + (retireAge * -2);

    const retired = retireAge >= 0 ? `My name is ${namee}, will retire in the next ${retireAge} years`: `My name is ${namee}, have retired ${alreadyRetired} years ago`

    return retired
}

console.log(yearsLefttoRetire(1998, "Risqoh"))
console.log(yearsLefttoRetire(1957, "Riss"))


console.log()*/

/*const calcAverage = (score1, score2, score3) =>  (score1 + score2 + score3) / 3;


const scoreDolphins = calcAverage (44, 23, 71)
const scoreKoalas = calcAverage (65, 54,49)

checkWinner = function ( avgDolphins, avgKoalas) {
   if (avgKoalas >= (2 * avgDolphins))
    {  
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else if (avgDolphins >= (2 * avgKoalas))
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else 
    {
        console.log("No team wins...")
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas))*/

/*const calAge = function  (birthYear){
     return 2025 - birthYear;
}

const friends = ["Ade", "Kemi", "Ayinde"];

const friendsYear = [1997, 1995, 2003, 2004, 1992]

const Age1 = calAge(friendsYear[0])
const Age2 = calAge(friendsYear[1])
const Age3 = calAge(friendsYear[friendsYear.length - 2])

console.log(Age1, Age2, Age3 )


const ages = [Age1, Age2, Age3]


friends[3] = "Nime"


friends.push("James")
friends[4] = "Jane"
friends.push("James")
console.log(friends)
console.log(friends.indexOf("James"));


const tip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 


console.log(tip(100))

const bills = [125, 555,44]

const tips = [tip(bills[0]),tip(bills[1]), tip(bills[2]) ]
const totals = [tip(bills[0]) + bills[0],tip(bills[1]) + bills[1], tip(bills[2]) + bills[2] ]

console.log(bills, tips, totals)*/

// console.log(`${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is ${jonas.friends[0]}`)

// const calAge = function  (birthYear){
//      return 2025 - birthYear;
// }

// const interest = prompt ("What do you want to know about Jonas")

// if(jonas[interest])
// {
//     console.log(jonas[interest])
// }
// else
// {
//     console.log("Wrong! Choose right ortion");
// }

/*const jonas = {
    firstName : "Jonas",
    age : 46,
    birthYear : 1979,
    job : "Teacher",
    friends : ["Micheal", "Jane", "Janet"],
    calAge : function  (){
    this.age = 2025 - this.birthYear
    return this.age;},
    hasaDriverLicense : false ,

    getSummary : function () {
       return `${this.firstName} is a ${this.age}-years old ${this.job} and he has ${this.hasaDriverLicense? "a" : "no"} driver's licence`
       ;
       
    //     const geen  = this.hasaDriverLicense?  this.firstName + " is a " + this.age +"-years old " + this.job + " and he has a driver's licence" : this.firstName + " is a " + this.age +"-years old " + this.job + "and he has no driver's licence"
    //    return geen;

       
    }

}


jonas.location = "Germany";
jonas["twitter"] = "@jonas_twtt"


console.log(jonas.calAge())
console.log(jonas.getSummary())*/

/*const mark = {
    fullName: "Mark Miller", 
    mass : 78 ,  
    height : 1.69 ,
    calcBMI : function() {
         const bmi = this.mass/ (this.height * this.height)
         return bmi;
    }
}

const john = {
    fullName: "John Smith", 
    mass : 92,  
    height : 1.95,
    calcBMI : function () {
         this.bmi = this.mass/ (this.height * this.height)
        return this.bmi;
    }
}


if (mark.calcBMI() > john.calcBMI())
{
    console.log(`Mark Miller's (${mark.calcBMI()}) is higher than  John Smith's BMI (${john.calcBMI()})!`)
}
else if(mark.calcBMI() < john.calcBMI)
console.log(`John Smith's BMI (${john.calcBMI()}) is higher than  Mark Miller's (${mark.calcBMI()})!`)*/

// for (let juggling = 1; juggling < 20; juggling++ )
// {
//     console.log(`juggling football ⚽️ ${juggling}`)
// }

// const jonas = {
//     firstName : "Jonas",
//     age : 46,
//     birthYear : 1979,
//     job : "Teacher",
//     friends : ["Micheal", "Jane", "Janet"],
//     calAge : function  (){
//     this.age = 2025 - this.birthYear
//     return this.age;},
//     hasaDriverLicense : false
//     }

// const num1 = [3, 5, 6, 2, 4]
// const num2 = [10, 26, 21, 15, 19]

// const num3 = num1 + num2

// for (let numm = 0; numm <= num1.length - 1; numm ++)
// {
//     const num4 = num1[numm] + num2[numm]

// }

// console.log(num3)

/*const jonas = [ "Jonas",
    46, 1979,
 "Teacher",
    ["Micheal", "Jane", "Janet"], false
]

const types = [];
const types1 = [];
  

for (let i = 0; i <= (jonas.length - 1); i++)
{ 
     console.log(i, jonas[i], typeof jonas[i]);

    types1.push(typeof jonas[i]);
}



console.log(types1)*/

// const birthYear = [1997, 2000, 2003, 2006, 2009];
// const age = [];

// function birthYR (YR) {2025 - YR };
// for (let i = 0; i < birthYear.length; i++);
// {
//     console.log(i)
//     age.push(birthYR(birthYear[i]));
// }

// const jonas = [ 1993, 1996, 1999, 2002, 2005
// ]

// const types = [];
// const age = [];

// for (let i = 0; i <= (jonas.length - 1); i++)
// {
//      console.log(i, jonas[i], typeof jonas[i]);

//     age.push(2025 - jonas[i]);
// }

// console.log(age)

// const jonas = [ "Jonas",
//     46,
//      1979,
//  "Teacher",
//     ["Micheal", "Jane", "Janet"], false
// ]

// for (let i = 0; i < jonas.length; i++)
// {
//     // console.log(typeof jonas[i])
//     if (typeof jonas[i] !== "string") continue;
//     console.log(i, jonas[i], typeof jonas[i])
// }

// const numb = [];

// for (let i = 10 -1; i >= 0; i--)
// {
//     // numb.push(i);
//     // if(i % 2 === 0) continue;
//     // if(i === 51) break;
//     console.log(i, "an odd number")
// }

// if(6 % 2 === 0)
// {
//     console.log("Even number")
// }

// else
// {
//     console.log(" Odd Number")
// }

// for( let exercise = 1; exercise < 4; exercise++)
// {
//     console.log(`-------starting exercise ${exercise} `)

//     for(let rep = 1; rep < 6; rep++)
//     {
//         console.log(`Exercise ${exercise} lifting weight repitition 🏋️‍♀️ ${rep}`)
//     }
// }

// console.log("FOR LOOP ______________")

// for(let rep = 1; rep < 6; rep++)
//     {
//         console.log(` lifting weight repitition 🏋️‍♀️ ${rep}`)
//     }

//     console.log("WHILE LOOP ______________")
// let rep = 1;

// while ( rep < 6)
//     {
//         console.log(` lifting weight repitition 🏋️‍♀️ ${rep}`);
//         rep++;
//     }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6)
// {
//     console.log(`throw dice ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1

//     if (dice === 6)
//     {
//         console.log("throw dice 6")
//     }
// }

/*let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];


for (let i = 0; i < bills.length; i++)
{
    const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
    tips.push(calcTip(bills[i]));
    totals.push(tips[i] + bills[i])

    
}

console.log( bills, tips, totals)*/

// let aree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function calcAverage(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(aree));

let playersScore = 24;

if (playersScore >= 1000) {
  console.log(1);
} else if (playersScore >= 500 || playersScore < 1000) {
  console.log(2);
} else if (playersScore >= 100 || playersScore < 500) {
  console.log(3);
} else {
  console.log(4);
}

console.log("The new Laise! ");
