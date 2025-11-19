 /* let js = 'Amazing'


console.log(40+20-20+2)

let firstName = 'Jonas'

console.log(firstName);
console.log(firstName);
console.log(firstName); 


console.log(typeof firstName)

firstName = true;
console.log(typeof firstName)

let year;
console.log(year);

year = '';
console.log(year); */

/*const now = 2025;
const noorage = now - 1997;
const abdulAwwalAge = now - 1994;

console.log(noorage);
console.log(abdulAwwalAge);

const ageDiff = abdulAwwalAge - noorage;

console.log(ageDiff)
console.log(abdulAwwalAge, noorage, ageDiff);
let x = 10 + 5;
x--;
x--;
console.log(x)

console.log(abdulAwwalAge > noorage);*/



// const now = 2025;
// const noorage = now - 1997;
// const abdulAwwalAge = now - 1994;

// console.log(now - 1994 > now - 1997);




/*const lastName = 'Ajose';
const job = 'Junior Developer';
const birthYear = 1994;
const currentYear = 2025;

const sentence = "I'm " + lastName +" a " + (currentYear - birthYear)+ " year old " + "and a " +  job;

console.log(sentence)

const newSentence = `I'm ${lastName} a ${currentYear - birthYear} year old and a ${job}`;
console.log(newSentence)

console.log(
    `lets say we need to move
    really this is good
    wawu niceeeee

    `)*/


/*let clientName = 'james';
const age = 12;
const yearsLeft = 18 - age ;
if(age >= 18)
    {
        console.log(`${clientName} can take a driver's licence test because ${age} is greater than or equal to 18 👍🏽`)
    }
else 
    {
        console.log(`Sorry ${clientName} you can not take a driver's licence test because ${age} is not greater than or equal to 18 👍🏽`)
    }*/



/*let markHeight =1.69 ;
let markWeight =78;

let johnHeight = 1.95;
let johnWeight = 92;


let markBmi = markWeight/markHeight**2
const markBmi1 = markWeight/ (markHeight * markHeight);
console.log(markBmi)
console.log(markBmi1)


let johnBmi = johnWeight/johnHeight**2
const johnBmi1 = johnWeight/ (johnHeight * johnHeight);
console.log(johnBmi)
console.log(johnBmi1)

const markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI)




if(markBmi > johnBmi)
{
    console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`)
}
else
{
    console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})`)
}

if(markBmi1 > johnBmi1)
{
    console.log(`Mark's BMI (${markBmi1}) is higher than John's BMI (${johnBmi1})`)
}
else
{
    console.log(`John's BMI (${johnBmi1}) is higher than Mark's BMI (${markBmi1})`)
}


console.log(markBmi, johnBmi, markBmi1, johnBmi1)*/



/*const numYear = 20;
console.log("I'm " + String(numYear) + " years old")

let n = "1" + 1 - 1;
console.log(n) 
console.log(typeof n) 


let money = -100;
if(money)
{
    console.log("Don't spend it all")
}
else
{
    console.log("Get a job bro!")
}*/


// let favoryte = Number(prompt("What's your favorite number?: "))
// console.log(typeof favoryte)
// if(favoryte === 23) console.log("Awesome!!")


/*const hasADriverLIcence = true;
const hasAGoodVision = true;
const isTired = true;

console.log(hasADriverLIcence && hasAGoodVision);
console.log(hasADriverLIcence || hasAGoodVision);
console.log(!hasADriverLIcence)
console.log(hasADriverLIcence && hasAGoodVision && !isTired)

if(hasADriverLIcence && hasAGoodVision)
{
    console.log("James should drive.")
}
else
{
    console.log("someone else should drive.")
}*/


// dolphins = [96, 108,89]
// koalas = [88, 91, 110]

// const scoreDolphins = (96 + 108 + 89) / 3; 
// const scoreKoalas = (88 + 91 + 110) / 3;

// if ( scoreDolphins > scoreKoalas)
// {
//     console.log("Dolphins win the trophy")
// }

// else if (scoreDolphins < scoreKoalas)
// {
//     console.log("Koalas win the trophy")
// }
// else
// {
//     console.log("Both win the trophy")
// }

// console.log(scoreDolphins, scoreKoalas)

/*dolphins = [97, 112,101]
koalas = [88, 91, 110]

const scoreDolphins = (86 + 112 + 107) / 3; 
const scoreKoalas = (109 + 90 + 106) / 3;

if ( scoreDolphins > scoreKoalas)
{
    console.log("Dolphins win the trophy")
}

else if (scoreDolphins < scoreKoalas)
{
    console.log("Koalas win the trophy")
}

else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100)
{
    console.log("Both win the trophy")
}
else
{
    console.log('no team wins the trophy')
}

console.log(scoreDolphins, scoreKoalas)*/



/const day = "fri";

switch (day)
{
   case "monday": 
    console.log("Plan Course Structure.");
    console.log("Go to coding meetup");
   break;

    case "tuesday":
        console.log("Prepare theory videos");
    break;
    case "wednessday":
    case "thursday":
        console.log("Write theory examples");
    break;
    case "friday":
        console.log("Record videos")
    break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend");
    break;
    default:
        console.log("Not a valid date!")
}*/



/*const day = "sunday";
let action;

if (day === "monday")
{
    console.log("Plan Course Structure.");
    console.log("Go to coding meetup");
}

else if (day === "tuesday")
{
    console.log("Prepare theory videos");
}

else if (day === "wednessday" || day === "thursday")
{
    console.log("Write code examples");
}


else if (day === "friday")
{
    console.log("Record videos");
}

else if (day ==="saturday" || day === "sunday")
{
    console.log("Enjoy the weekends!");
}

else
{
    console.log("Not a valid date!")
}

// --------------------------------------------

if (day === "monday")
{
    action = "Plan Course Structure." ;
   action = "Go to coding meetup" ;
}

else if (day === "tuesday")
{
    action = "Prepare theory videos";
}

else if (day === "wednessday" || day === "thursday")
{
    action = "Write code examples" ;
}


else if (day === "friday")
{
   action = "Record videos" ;
}

else if (day ==="saturday" || day === "sunday")
{
    action = "Enjoy the weekends!" ;
}

else
{
    action = "Not a valid date!"
}

console.log(action)*/




// let age = 23;
// age >= 18 ?  console.log("wine 🍷") : console.log("water 💧") ; 

 
// const drink = age >= 18 ? "wine 🍷": "water 💧";
// console.log(drink)



// const day = "mondy";
// const action = day === "monday"? "Go to work" : "sleep!"
// console.log(action)

// console.log(`"I will ${day === "monday"? "Go to work" : "sleep!"}"`)




/*let time = 1;

const action = time >= 12 ? "eat now, enjoy!" : "not eat now, wait!"; 

console.log(`"You can ${time >= 12 ? "eat now, enjoy!" : "not eat now, wait!"}"`);*/

// const billValue = 300 <= 50 ;
// const tip = billValue
// const tipCalculator = 

const billValue = 275;
const lowTip = billValue * 0.15;
const highTip = billValue * 0.2

if (billValue >= 50 && billValue <= 300)
{
    console.log(billValue * 0.15)
}
else 
{
    console.log(billValue * 0.2)
}


// const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
// const totalValue = tip + billValue ;
// console.log(tip)
// console.log(billValue, tip, totalValue)
// console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${totalValue}`)