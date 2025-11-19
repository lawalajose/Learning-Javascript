// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*let temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const maxCalc = fuction (deArray) {

// for (let i = 0; i < deArray.length; i++) {

// }

// }

const calTem = function (temArray) {
  let max = temArray[0];
  let min = temArray[0];

  for (let i = 0; i < temArray.length; i++) {
    if (typeof temArray[i] !== "number") continue;

    if (temArray[i] > max) max = temArray[i];
    if (temArray[i] < min) min = temArray[i];
  }
  console.log(max, min);
};
calTem([4, 6, 9]);*/
// const numberToString = num => {
//   return String(num);
// };

// console.log(numberToString(44));

//QUESTION TWO
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]*/

// let inputt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// const totalArray = function (input) {
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     sum = sum + input[i];
//   }
//   return sum;
// };
// console.log(totalArray(inputt));
// // const countPositivesSumNegatives = input => {

// // }
// let inputt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// let negativeNumbers = [];
// for (let numbers = 0; numbers < inputt.length; numbers++) {
//   negativeNumbers.push(numbers);
// }
/*console.log("1-------------------------------------");
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let bmiMark = markWeight / (markHeight * markHeight);
let bmiJohn = johnWeight / (johnHeight * johnHeight);

let bbb =
  bmiMark > bmiJohn
    ? `Mark's Bmi ${bmiMark} is greater than John's Bmi ${bmiJohn}`
    : ` John's Bmi ${bmiJohn} is greater than Mark's Bmi ${bmiMark}`;

console.log(bbb);

console.log("2-------------------------------------");

let dolphinsScore = [96, 108, 89];
let koalasScore = [88, 91, 110];

let totalScore = scoreArray => {
  let sum = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    sum = sum + scoreArray[i];
  }
  let averageScore = sum / scoreArray.length;
  return averageScore;
};

console.log(totalScore(dolphinsScore));

console.log("3-------------------------------------");

let billss = [275, 50, 430];
let tip = [];
let totalbills = [];

// for (let i = 0; i < billss.length; i++) {
//   let hrn = typeof billss[i];
//   tip.push(hrn);
// }
// console.log(tip);
let totalTip = bills => {
  let rrn = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  return rrn;
};
console.log(totalTip(50));

for (let i = 0; i < billss.length; i++) {
  let ggn = totalTip(billss[i]);
  tip.push(ggn);
  let fnn = tip[i] + billss[i];
  totalbills.push(fnn);
}

console.log(tip);

console.log(totalbills);*/

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
/*let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let negativeNum = [];
let positiveNum = [];
let poscount;
let countPosiit;
let sum = 0;
let posit;

function countPositivesSumNegatives(inputt) {
  for (let i = 0; i < inputt.length; i++) {
    if (inputt[i] < 0) {
      negativeNum.push(inputt[i]);
    } else if (inputt[i] > 0) {
      positiveNum.push(inputt[i]);
    }
  }
  countPosiit = positiveNum.length;
  for (let i = 0; i < negativeNum.length; i++) {
    sum = sum + negativeNum[i];
    poscount = sum;
  }
  console.log(negativeNum);
  console.log(positiveNum);

  return [countPosiit, poscount];
}

console.log(countPositivesSumNegatives(testData));

/*function countPositivesSumNegatives(inputt) {
  for (let i = 0; i < inputt.length; i++) {
    if (inputt[i] < 0) {
      negativeNum.push(inputt[i]);
    } else if (inputt[i] > 0) {
      positiveNum.push(inputt[i]);
    } else {
      return null;
    }
    countPosiit = positiveNum.length;
  }

  for (let i = 0; i < negativeNum.length; i++) {
    sum = sum + negativeNum[i];
    poscount = sum;
  }

  return [countPosiit, poscount];
}

console.log(countPositivesSumNegatives(array));*/

// function greet(name, owner) {
//   // Add code here

//   name === owner ? console.log("Hello boss") : console.log("Hello guest");
// }

// greet("daniel", "daniel");

/*let sarr = [2, 4, 6, 8, 10];

const invert1 = function (arr) {
  return arr.map(x => -x);
};

const invert2 = arr1 => arr1.map(x => 2 * x);

function invert3(arr2) {
  return arr2.map(x => -x);
}

console.log(invert1(sarr), invert2(sarr), invert3(sarr));

let bty = [1, 2, 3, 4, 5];
let gem = [];

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    gem.push(array[i] * -1);
  }
  return gem;
}
console.log("^^^^^^");
console.log(invert(bty));

let gen = "James";
let heg = gen.split("");
let grr = heg.reverse();
let bkl = grr.join("");
console.log(bkl);*/
/*function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0;
  let averg;

  for (let i = 0; i < classPoints.length; i++) {
    sum = sum + classPoints[i];
  }
  console.log(sum);
  averg = sum / classPoints.length;
  console.log(averg);
  let boolValue = yourPoints > averg;
  console.log(boolValue);

  return [boolValue];
}
console.log(betterThanAverage([10, 3], 5));*/

// function convertSring2Array(string) {
//   return string.split(" ");
// }
// console.log(convertSring2Array("I Love You"));

/*const arrayOfIntegers = n => {
  let arrayNum = [];
  for (let i = 1; i <= n; i++) {
    arrayNum.push(i);
  }

  return arrayNum.reverse();
};
console.log(arrayOfIntegers(5));

const arrayOfIntegers2 = n => {
  for (let i = n; i > 0; i--) {}
};
console.log(arrayOfIntegers(9));*/

/*const jadinCase = letter => {
  let hung = [];
  let tung = [];
  let bvn = letter.split(" ");
  console.log(bvn);
  for (let i = 0; i < bvn.length; i++) {
    hung = bvn[i].split(" ");
    console.log(hung);
  }
  for (let i = 0; i < hung.length; i++) {
    tung = hung[i].split();
    console.log(tung);
  }
};

jadinCase("i love you");*/

/*let temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let temperat = [2, 8, 7];

const tempAplitude = (array1, array2) => {
  let array = array1.concat(array2);

  console.log(array);

  let highest = array[0];
  let lowest = array[0];

  for (let i = 1; i < array.length; i++) {
    if (typeof array[i] !== "number") continue;

    if (array[i] > highest) {
      highest = array[i];
    }
    if (array[i] < lowest) {
      lowest = array[i];
    }
  }

  return [highest, lowest, highest - lowest];
};

console.log(tempAplitude(temperatures, temperat));*/

/*const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Degree Celcius: ")),
  };
  console.log(measurement);
  console.table(measurement);

  let kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());*/

/*let yuj = [2, 4, 7];

function findSmallestInt(arr) {
  //your code here
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findSmallestInt(yuj));*/

// let temperatures = [17, 21, 23];
// let data2 = [12, 5, -5, 0, 4];
/*const printForecast = arr => {
  let gto = [];
  for (let i = 0; i < arr.length; i++) {
    let arrElement = arr[i];
    let g = i + 1;

    gto.push(`...${arr[i]}°C in ${g} days`.toString());
  }
  let yup = gto.join("");
  return yup;
};
console.log(printForecast(data2));*/
/*let data3 = [2, 4, 6, 8, 10, 12];

// sum = sum + data2[i];

const newFunction = arrayWes => {
  let sum = 0;
  for (let i = 0; i < arrayWes.length; i++) {
    sum = sum + arrayWes[i];
  }
  return sum;
};

console.table(newFunction(data3));

const newFunction1 = arrayWes => {
  let str = "";
  for (let i = 0; i < arrayWes.length; i++) {
    str += `...${arrayWes[i]}°C in ${i + 1} days`;
  }
  return str;
};

console.table(newFunction1(temperatures));*/

/*let mon = "abracadabraoui";

function getCount(str) {
  let yp = [];

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== "a" &&
      str[i] !== "e" &&
      str[i] !== "i" &&
      str[i] !== "o" &&
      str[i] !== "u"
    )
      continue;

    yp.push(str[i]);
  }
  console.log(yp);
}
getCount(mon);

function getCount2(str) {
  let yp = [];

  for (let i = 0; i < str.length; i++) {
    if (!"aeiou".includes(str[i])) continue;

    yp.push(str[i]);
  }
  console.log(yp.length);
}
getCount2(mon);*/

let testData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const dyofdweek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const timeTracking = arrayTime => {
  let sum = 0;
  let max = arrayTime[0];
  let juy = [];
  let kkn;
  let maxIIndex = -1;

  for (let i = 0; i < arrayTime.length; i++) {
    if (arrayTime[i] > max) {
      max = arrayTime[i];
      maxIIndex = i;
      // console.log(maxIIndex);
    }

    if (arrayTime[i] > 0) {
      juy.push(arrayTime[i]);
    }
    sum += arrayTime[i];
  }
  kkn = sum > 35 ? "Full time" : "Part time";
  const mmaxValue = Math.max(...arrayTime);
  const mmaxIndex = arrayTime.indexOf(mmaxValue);
  const daywith = dyofdweek[mmaxIndex];

  let avDh = sum / arrayTime.length;
  let timeTrackingObject = {
    totalHoursWorked: sum,
    averageDailyHours: avDh,
    dayWithMostHoursWorked: max,
    numberOfDaysWorked: juy.length,
    weekFullPartTime: kkn,
    maxV: daywith,
  };
  return timeTrackingObject;
};
console.table(timeTracking(testData));
// total hours worked
// average daily hous
// the day with the most hours worked
// number of days worked
// whether the week was full time (worked 35 hours or more)

let arrayT = [3, 5, 2, 7, 1, 6, 8];

const dayOfDweek = days => {
  for (let i = 0; i < days.length; i++) {
    console.log(dyofdweek[i]);
  }
  return;
};
dayOfDweek(arrayT);

let grt = "45385593107843568";

const fakeBin = x => {
  let gp = [];
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
    if (Number(x[i]) < 5) {
      x[i] = "0";
    }
  }
  return gp;
};
console.log(fakeBin(grt));
