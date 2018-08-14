


///////Javascript 2 New Lectures\\\\\\\\\
//variable naming rules, data types, and comments...//
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 36;
var fullAge = true;
var job = 'teacher';
console.log(job);
*/

//variable mutation and type coercion

/*var firstName = 'Artman';
var age = 36;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'WDP';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

age = 'thirty six';
job = 'truck driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

//Basic operators - math
/*
var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 36;
ageMark = 23;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 3);
console.log(now * 2);
console.log(now / 10);

//logical operators

var johnOlder = ageJohn <  ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof ageJohn); //number
console.log(typeof johnOlder); //boolean
console.log(typeof 'The Beast in the East'); //string
var x;
console.log(typeof x); //undefined
*/


//Operator precedence with grouping and multiple assignments

var now = 2018;
var yearJohn = 1981;
var fullAge = 21;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 45;
var aveAge = (ageJohn + ageMark) / 2;
console.log(aveAge);

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

//some more operators

//x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
//x += 1;
x--
console.log(x);


//BMI = mass / (height * height)

var massMark, heightMark, heightJohn, massJohn, bmiJohn, bmiMark, higherBMI;

massJohn = 77;
massMark = 32;
heightJohn = 2.0;
heightMark = 1.4;

bmiJohn = Math.round(massJohn / (heightJohn * heightJohn));
bmiMark = Math.round(massMark / (heightMark * heightMark));

var markHigherBMI = bmiMark > bmiJohn;
console.log(`Is Mark's BMI higher than John's? ${markHigherBMI}`);

function higherBMI() {
  if (bmiJohn > bmiMark) {
  console.log(`John has a higher BMI of ${bmiJohn}`);
} else {
  console.log(`Mark has a higher BMI of ${bmiMark}`);
 }
};

higherBMI();


//if /else

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(`${firstName} is married.`);
} else {
  console.log(`${firstName} is not married`);
}

//can also just pass a boolean through the if block without equivalence
var isMarried = true;
if (isMarried) {
  console.log(`${firstName} is married.`);
} else {
  console.log(`${firstName} is not married`);
}

var fruits = ['peach', 'apple', 'pear', 'plum'];
var newFruits = fruits.push('grapes');
  



















