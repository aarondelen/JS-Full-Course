// * let personName = "aaron";
// let age = 22;
// let salary = 20000;
// let bearded = true;

// console.log(`My name is ${personName}`, typeof personName);
// console.log(`My age is ${age}`, typeof age);
// console.log(`My salary is ${salary}`);
// console.log(`Am I bearded handsome: ${bearded}`);

// window.alert("hahaha yooyyo burat");

// document.getElementById("MYH1").textContent = `${personName} is a beast!`;
// document.getElementById("MYP").textContent= `At a young age of ${age}, he conquered everything`;

// ================================================================.

// * let username = window.prompt("What is your name?");

// console.log(username);

// let username;

// document.getElementById("submit").onclick = function() {
//   username = document.getElementById("input").value;

//   document.getElementById("MYH1").textContent = `Welcome aboard captain ${username} ♥`;
//   console.log(username);
// }

// ======================================================================
// * Radius Program

// let pi = 3.14159;
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of the circle")
// radius = Number(radius);

// let pi = 3.14159;
// let radius;
// let circumference;

// circumference = 2 * pi * radius;
// console.log(circumference);

// document.getElementById("submit").onclick = function(){
//   radius = document.getElementById("input").value;
//   radius = Number(radius)

//   circumference = 2 * pi * radius;
//   document.getElementById("MYH3").textContent = `Circumference is: ${circumference}cm`;
// }

// =============================================================

// * Counter Program

// const increaseBtn = document.getElementById("increaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const decreaseBtn = document.getElementById("decreaseBtn");
// const countlabel = document.getElementById("countlabel");
// let count = 0;

// increaseBtn.onclick = function(){
//   count++;
//   count = countlabel.textContent;
// }

// decreaseBtn.onclick = function(){
//   count--;
//   count = countlabel.textContent;
// }

// resetBtn.onclick = function(){
//   count = 0;
//   count = countlabel.textContent;
// }

// ==================================================================
// * Random Die Roller

// const buttonRoll = document.getElementById("myButton");
// const count = document.getElementById("mySpan")
// const min = 1;
// const max = 6;
// let randomNum;

// buttonRoll.onclick = function(){
//   randomNum = Math.floor(Math.random() * max) + min;

//   count.textContent = randomNum;
// }

// ==============================================================
// * IF ELSE STATEMENTS

// let age = 12;
// let hasLicense = false;

// if(age >= 16 && hasLicense) {
//   console.log("Old enough and eligible to drive")
// } else if (age >= 16 != hasLicense) {
//   console.log("Old enough but not eligible to drive")
// } else if (age < 16 != hasLicense) {
//   console.log("Still young and not eligible to have license")
// }

// const submit = document.getElementById("submit");
// const input = document.getElementById("input");
// const result = document.getElementById("result");
// let age;

// submit.onclick = function() {
//   age = input.value;
//   age = Number(age);

// if (isNaN(age) || age <= 0) {
//   result.textContent = "Please enter a valid age.";
//   return;
// }

//   if (age >= 18 && age <= 59 ){
//     result.textContent = "You can go now and find a job"
//   } else if (age >= 60) {
//     result.textContent = "You can now have a rest"
//   } else {
//     result.textContent = "Go study and play little kid"
//   }
// }
// =====================================================================
// * Checked Statements

// const checkbox = document.getElementById("checkbox");
// const gcash = document.getElementById("gcash");
// const cash = document.getElementById("cash");
// const mastercard = document.getElementById("mastercard");
// const submit = document.getElementById("submit");
// const follow = document.getElementById("followResult");
// const payment = document.getElementById("paymentResult");

// submit.onclick = function() {
//   if(checkbox.checked){
//     follow.textContent = "You are followed :)"
//   } else {
//     follow.textContent = "You are not followed :("
//   }

//   if(gcash.checked){
//     payment.textContent = "You will be paying using gcash :3"
//   } else if (cash.checked) {
//     payment.textContent = "You will be paying using cash :>"
//   } else if(mastercard.checked){
//     payment.textContent = "You will be paying using MasterCard :o"
//   } else {
//     payment.textContent = "Please select a payment type :C"
//   }
// }
// =====================================================================
//  * Ternary Operator
// let time = 19
// let greet;

// greet = time < 12 ? "Good Morning" : time < 18 ? "Good Afternoon" : "Good evening"
// console.log(greet);
// =====================================================================
// * SWITCH - Efficient replacement for a lot of else if statements

// let day = "ghahasdfa";

// switch(day) {
//      case 1:
//         console.log(`It is Monday`);
//         break
//      case 2:
//         console.log(`It is Tuesday`);
//         break
//      case 3:
//         console.log(`It is Wednesday`);
//         break
//      case 4:
//         console.log(`It is Thursday`);
//         break
//      case 5:
//         console.log(`It is Friday`);
//         break
//      case 6:
//         console.log(`It is Saturday`);
//         break
//      case 7:
//         console.log(`It is Sunday`);
//         break
//       default:
//       console.log(`${day} is not a day.`)
// }

// let testScore = 60;
// let LetterGrade;

// switch (true) {
//    case testScore >= 90:
//       console.log(`With a score of ${testScore}, you got an A!`)
//       break
//    case testScore >= 80:
//       console.log(`With a score of ${testScore}, you got a B!`)
//       break
//    case testScore >= 70:
//       console.log(`You only got ${testScore}, study hard, since you're grade is only C!`)
//       break
//    default:
//       console.log("Grind more, noob-ass")
// }

// ========================================================

// * Method Chaining

// let username = window.prompt("Enter your username: ")

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// ===========================================================
// * Logical Operators

// const temp = 30;

// if(temp > 0 && temp <=30) {
//     console.log(`Weather is fine`)
// } else {
//     console.log(`Weather sucks!`)
// }
// =============================================================

// *  = assignment operator
// * == comparison operator (compare if values are equal)
// * === strict equality operator (compare if values & datatypes are equal)
// * != inequality operator (similar to ==)
// * !== strict inequality operator (similar to ===)

// =================================================
// WHILE LOOOOOOPPP = repeat some code WHILE some conditions is true

// let myh1 = document.getElementById(`myH1`);
// let gamename = "";

// while(gamename === "" || gamename === null) {
//     gamename = window.prompt(`Enter your gamename: `);
// }

// console.log(`Welcome ${gamename}!`)
// myh1.textContent = (`Welcome Aboard Captain ${gamename}`)

// if (gamename === "" || gamename === null) {
//     gamename = window.prompt(`Enter your gamename: `)
//     console.log(`ur name is ${gamename}`);
// }

// pwede rin yung do while, kapag gusto mo muna i run yung block of code before condition.

// ===============================================

// * FOR LOOP = repeat some code a LIMITED amount of times

// * for (initialization, condition, increment/decrement) {}

// * for (let i = 0; i < 10; i++) meaning that i started at 0, then as long as it is less than 10, it will increment.

// for (i = 0; i < 3; i++) {
//     console.log(`Hello World`);
// }

// for(i = 2; i <= 10; i+=2) {
//     console.log(i);
// }

// for(i = 10; i > 0; i--) {
//     console.log(i);
// }
// console.log(`Happy New Year`);

// for (i = 1; i <= 20; i++) {
//   if (i === 12 || i === 19) {
//     continue; // or we can use break to exit for loop
//   }
//   console.log(i);
// }

// ==================================================

// * Number guessing game

// const minNum = 1;
// const maxNum = 50;
// const answer = Math.floor(Math.random() * (maxNum)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running) {

//   guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
//   guess = Number(guess);

//   if (isNaN(guess)) {
//     window.alert(`That is not a valid number!`)
//   } else if (guess < minNum || guess > maxNum) {
//     window.alert(`Choose only between 1 and 50!`)
//   } else {
//     attempts++;
//     if (guess < answer) {
//       window.alert(`TOO LOW, Please try again.`)
//     } else if (guess > answer) {
//       window.alert(`TOO HIGH, Please try again.`)
//     } else {
//       window.alert(`CORRECT! The answer was ${answer}, and it took you ${attempts} attemps.`)

//     }
//   }
// }

// ==============================================================================

// * Functions = A section of resuable code. Declare the code once, use it whenever you want. Call the function to execute that code.

// function greet (username, time) {
//   console.log(`How are you today, ${username}?`);
//   console.log(`And it took you ${time} hours to arrive... `);
// }

// greet("Aaron", 7);

// function add (x, y) {
//   let abb = x + y;
//   return abb;
// }
// console.log(`Addition:`,add(3, 5));

// function multiply(a, b) {
//   return a * b;
// }
// console.log(`Multiply:`,multiply(5, 2));

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(`Even:`,isEven(10));

// function isOdd(number) {
//   return number % 2 != 0 ? true : false;
// }
// console.log(`Odd:`,isOdd(10));

// function isValidEmail(email) {
//   return email.includes(`@`) ? true: false;
// }
// console.log(`Valid email:`,isValidEmail(`aaron@outlook.com`));

// ==============================================================================

// * Temp Conversion Program

// const textBox = document.getElementById(`textBox`);
// const toFarenheit = document.getElementById(`toFarenheit`);
// const toCelcius = document.getElementById(`toCelcius`);
// const result = document.getElementById(`result`);

// let temp;

// function convert() {

//   if(toFarenheit.checked) {
//     temp = Number(textBox.value);
//     temp = temp * 9 / 5 + 32;
//     result.textContent = `${temp.toFixed(1)}.F`;
//     return;
//   } else if(toCelcius.checked) {
//     temp = Number(textBox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = `${temp.toFixed(1)}C`;
//   } else {
//     result.textContent = "Select a unit";
//   }
// }

// ======================================================================

// * Array - variable like structure that can hold more than 1 value

// let heroes = [`slark`, `crystal maiden`, `sven`, `juggernaut`];

// heroes.push(`lycan`); //adds a data in the end
// heroes.pop(); // removes a data in the end
// heroes.unshift(`mirana`); // adds a data in front
// heroes.shift(); // removes a data in front

// console.log(heroes[0]);

// heroes.sort().reverse() // to sort them alphabetically and reverse

// for(let i = 0; i <=3; i++){
//   console.log(heroes[i]);
// }

// reverse the order

// for (let i = heroes.length; i >=0; i--) {
//   console.log(heroes[i]);
//   }

// ================================================

// * Spread operator, allows array or string to be expanded into separate element (unpacks the elements)

// let numbers = [11, 22, 33, 44, 55];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let fruits = [`apple`, `banana`, `orange`];
// let vegetables = [`tomato`, `carrots`, `celery`];

// let foods = [...fruits, ...vegetables, `hahaha`];

// console.log(foods);

// ================================================

// * Rest parameter, bundles separate elements into an array
// * REST PARAMETER IS WHAT U PUT INSIDE THE FUNCTION'S ().

// function openFridge(...foods) {
//   console.log(foods)
// }

// const food1 = `pizza`;
// const food2 = `donut`;
// const food3 = `rice`;
// const food4 = `pasta`;
// const food5 = `dumpling`;

// openFridge(food1, food2, food3, food4, food5);

// function sum(...numbers) {

//   let result = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }

// const total = sum(75, 100, 85, 90, 50);
// console.log(`Total amounted is: $${total}`);

// function ave(...numbers) {

//   let result = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result/numbers.length;
// }

// const total1 = ave(75, 100, 85, 90, 50);
// console.log(`Total amounted is: $${total1}`);

// function combineStrings(...string) {
//   return string.join(` `);
// }

// const fullName = combineStrings (`aaron`, `joshua`, `delen`);

// console.log(fullName);

// =============================================

// * Dice Roller Program

// function rollDice () {
//   const numDice = document.getElementById('numDice').value;
//   const diceResult = document.getElementById('diceResult');
//   const diceImages = document.getElementById('diceImages');
//   const values = [];
//   const images = [];

//   // Mapping random dice value to the correct image file name
//   const diceFileNames = {
//     1: 'Dice-1.svg.png',
//     2: 'dice-2.png',
//     3: 'Dice-3-b.svg.png',
//     4: 'Dice-4-b.svg.png',
//     5: 'Dice-5-b.svg.png',
//     6: 'Dice-6a-b.png'
//   };

//   for (let i = 0; i < numDice; i++) {
//     const value = Math.floor(Math.random() * 6) + 1;
//     values.push(value);
//     // Adjusted the path to point to the dicedice folder, which is outside woop
//     images.push(`<img src="../dicedice/${diceFileNames[value]}" alt="Dice ${value}">`);
//   }

//   diceResult.textContent = `dice: ${values.join(', ')}`;
//   diceImages.innerHTML = images.join(' ');
// }

// =============================================

// * Password Generator

// function generatePassword(length,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols) {
// const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberChars = "0123456789";
// const symbolChars = "!@#$%^&*()_=+-";

// let allowedChars = '';
// let password = '';

// allowedChars += includeLowercase ? lowercaseChars : '';
// allowedChars += includeUppercase ? uppercaseChars : '';
// allowedChars += includeNumbers ? numberChars : '';
// allowedChars += includeSymbols ? symbolChars : '';

//  if (length <= 0) {
//   return `(Password length must be at least 1)`
//  } if (allowedChars.length === 0) {
//   return `(At least 1 set of characters needs to be selected)`
//  }

//  for (let i = 0; i < length; i++) {
//   const randomIndex = Math.floor(Math.random() * allowedChars.length)
//   password += allowedChars[randomIndex];
//  }

// return password;
// }

// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = false;

// const password = generatePassword(passwordLength,
//   includeLowercase,
//   includeUppercase,
//   includeNumbers,
//   includeSymbols);

//   console.log(`Generated password: ${password}`);

// ===============================================

// * Callback =  a function that is passed as an argument to another function

// * Used to handle asynchronous operations:
//  * 1. Reading the file
//  * 2. Network requests
//  * 3. Interacting with databases
//  * "Hey, when you're done, call this next."

// function greet (callback) {
//   setTimeout(function() {
//   console.log(`helloo!!`);
//   callback()
//   }, 1500);
// }

// function bye () {
//   console.log(`goodbyee!!`);
// }

// greet(bye);

// ==================================================

// * forEach() = method used to iterate over the elements of an array and apply a specified function (callback) to each element

// * array.forEach(callback)
// * forEach provides arguments: element like 'pizza', index like '0, 1', and array which is this time [foods].

// * Used when you want to iterate over an array and perform some action, but you don’t need to store or return the results.

// let foods = [`pizza`, `burger`, `siomai`, `siopao`];

// foods.forEach(display);

// function display (array) {
//   console.log(array);
// }

// let fruits = [`apple`, `orange`, `banana`, `coconut`];

// fruits.forEach(upperCase);
// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCase (element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function capitalize (element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display (element) {
//   console.log(element)
// }

// ============================================================================

// * .map() = accepts a callback and applies that function to each element of an array, then returns a new array
// [only difference with forEach is, this returns the result to an array]
// Used when you want to apply a transformation to each element of the array and get a new array with the transformed values.

// const numbers = [1, 2, 3, 4, 5];

// const sqrd = numbers.map(squared);
// const cbed = numbers.map(cubed);
// console.log(sqrd);
// console.log(cbed);

// function squared (element) {
//   return (Math.pow(element, 2));
// }

// function cubed (element) {
//   return (Math.pow(element, 3));
// }

// const students = [`yumi`, `waki`, `aaron`, `slark`];

// console.log(students.map(upperCase));

// function upperCase(element) {
//   return element.toUpperCase();
// }

// const dates = ["2020-5-21", "2022-4-12", "2024-10-31"];

// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates (element) {
//   const parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// =========================================================

// * .filter() = creates a new array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const EvenNumbers = numbers.filter(evenNums);
// console.log(EvenNumbers);

// const OddNumbers = numbers.filter(isOddNums);
// console.log(OddNumbers);

// function evenNums (element) {
//   return element % 2 === 0;
// }

// function isOddNums (element) {
//   return element % 2 !== 0;
// }

// const ages = [14, 15, 16, 16, 18, 19, 9, 24, 32, 27, 22, 62, 58,59];

// const filtered = ages.filter(canCollege);
// console.log(filtered);

// function canCollege(element) {
//   return element ? element >= 18 && element < 60 : console.log(`AAA`);
// }

// const fruits = [`banana`, `grapes`, `apple`, `orange`, `mango`, `watermelon`, `pineapple`];

// const filtered = fruits.filter(shortWordFruit);
// console.log(filtered);

// function shortWordFruit(element) {
//   return element.length <= 6
// }

// ===================================================================

// * .reduce() = reduce the elements of an array to a single value

// const cart = [5, 20, 31, 46, 12, 3];

// const shoppingCart = cart.reduce(sum)
// console.log(shoppingCart);

// function sum (accumulator, element) {
//   return accumulator + element;
// }

// const grade = [70, 85, 87, 76, 93, 97, 74];

// const maxValue = grade.reduce(getMax);
// console.log(maxValue);

// function getMax (accumulator, element) {
//   return Math.max(accumulator, element);
// }

// const grade2 = [70, 85, 87, 76, 93, 97, 74];

// const minValue2 = grade2.reduce(minMax);
// console.log(minValue2);

// function minMax (accumulator, element) {
//   return Math.min(accumulator, element);
// }

// ========================================================================

// * Function expressions = a way to define functions as values or variables
// In JavaScript it is legal to pass an entire function as an argument or treat it as a value
// Key benefit here compared to Function Declaration is we don't have need to pollute the global variable name space
// 1. Callbacks in asynchronous operations
// 2. Higher-Order Functions
// 3. Closures
// 4. Event Listeners

// const hello = function() {
//   console.log(`hello`);
// }
// hello();

// setTimeout(function() {
//   console.log(`hello`)
// }, 3000)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = numbers.map(function (element){
//   return Math.pow(element, 2);
// })

// console.log(squared);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const cubed = numbers.map(function(element){
//   return Math.pow(element, 3);
// });
// console.log(cubed);

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];

// const evenNums = numbers1.filter(function(element) {
//   return element % 2 === 0;
// });
// console.log(evenNums);

// const sum = numbers1.reduce(function(accumulator, element) {
//   return accumulator + element;
// })
// console.log(sum);

// =================================================================

// * Arrow Functions = a concise way to write function expressions, good for simple that you use only once
// (parameters) => some code...

// function declaration
// function hello1() {
//   console.log(`hello1`);
// }
// hello1();

// function expression
// const hello2 = function() {
//   console.log(`hello2`);
// }
// hello2();

// arrow function
// const hello3 = (name, age) => {console.log(`hello ${name}`)
//                           console.log(`you are ${age} years old`)};
// hello3(`aaron`, 12);

// setTimeout(() => console.log(`hi`), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const square = numbers.map((element) => Math.pow(element, 2));
// console.log(square);

// const cube = numbers.map((element) => Math.pow(element, 3));
// console.log(cube);

// const evenNums = numbers.filter((element) => {return element % 2 === 0});
// console.log(evenNums);

// const oddNums = numbers.filter((element) => element % 2 !== 0);
// console.log(oddNums);

// const total = numbers.reduce((accumulator, element) => accumulator + element);
// console.log(total);

// ===============================================================

// * Object = a collection of related properties (properties are like the key of the object or the left side ) and/or methods (functions that belong to an object, let's say that this person object can say hello or bye).

// Can represent real world objects (people, product, places)
// Object = {key:value, function()};

// const hero1 = {
//   name: "slark",
//   type: "agility",
//   gpm: 650,
//   isCarry: true,
//   audioKey: () => console.log(`Come here fishy fishy!`),
// }

// const hero2 = {
//   name: "skywrath",
//   type: "intelligence",
//   gpm: 500,
//   isCarry: false,
//   audioKey: () => console.log(`Skywrath Mage!`),
// }

// console.log(hero1.name);
// console.log(hero1.type);
// console.log(hero1.gpm);
// console.log(hero1.isCarry);
// console.log(hero1.audioKey());

// console.log(hero2.name);
// console.log(hero2.type);
// console.log(hero2.gpm);
// console.log(hero2.isCarry);
// console.log(hero2.audioKey());

// ====================================================================

// * This = reference to the object where THIS is used
// (the object depends on the immediate context)
// (object)person.(property)name = this.name
// When you use this, basically you're using the object which in this case are person1 and person2

// const person1 = {
//   name: "yumi",
//   ugali: "inis",
//   age: 18,
//   Education: "College",
//   favFood: "wings",
//   isWhite: true,
//   hobby: function() {console.log(`my name is ${this.name}, at magaling ako mang-${this.ugali}`)}
// }

// const person2 = {
//   name: "aaron",
//   ugali: "mabait",
//   age: 22,
//   Education: "Work",
//   favFood: "wingsv2",
//   isWhite: false,
//   hobby: function() {console.log(`my name is ${this.name}, at ugali ko ay ${this.ugali}`)}
// }

// person1.hobby();
// person2.hobby();

// ====================================================================

// * Constructor = special method for defining the properties and methods of objects

// const car1 = {
//   make: "Ford",
//   model: "Mustang",
//   year: 2024,
//   color: "red",
//   drive: function() {
//     console.log(`You drive ${this.model}`);
//   }
// }

// const car2 = {
//   make: "Chevrolet",
//   model: "Camaro",
//   year: 2025,
//   color: "blue",
//   drive: function() {
//     console.log(`You drive ${this.model}`);
//   }
// }

// const car3 = {
//   make: "Dodge",
//   model: "Charger",
//   year: 2026,
//   color: "orange",
//   drive: function() {
//     console.log(`You drive ${this.model}`);
//   }
// }

// console.log(car1.drive());
// console.log(car2.drive());
// console.log(car3.drive());

// @@@@ Instead of doing this above, we can do something here below..@@@@

// function Car (make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function(){console.log(`You drive a ${model}`)};
// }

// const car1 = new Car("Ford", "Mustang", "2024", "red");
// const car2 = new Car("Chevrolet", "Camaro", "2025", "blue");
// const car3 = new Car("Dodge", "Charger", "2026", "orange");

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();

// =====================================================================

// * class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function.
// It would be really helpful in the ff:  static keyword, encapsulation, inheritance
// The class will serve as a blueprint

// class Product { // Here we have an object named "Product"
//   constructor(name, price) { // To use a constructor we use this keyword
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() { // Inside of a class we dont need to use "function" keyword
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + (this.price * salesTax);
//   }
// }

// const salesTax = 0.05;

// const product1 = new Product("T-Shirt", 18.50);
// const product2 = new Product("Shorts", 10.00);
// const product3 = new Product("Shoes", 30.50);

// product3.displayProduct();

// const total = product3.calculateTotal(salesTax);
// console.log(`Your overall total with tax is: $${total.toFixed(2)}`);

// =============================================================================

// * static = keyword that defines properties or methods that belong to a class itself, rather than the objects created from that class. (class owns anything static, not the objects)

// class MathUtil {
//   static PI = 3.14159; // @@ anything declared static belongs to the class itself and not any object created from that class

//   static getDiameter(radius) {
//     return radius * 2;
//   }

//   static getCircumference(radius) {
//     return 2 * this.PI * radius; // is the same as | return 2 * MathUtil.PI * radius;
//   }

//   static getAreaCircle(radius) {
//     return this.PI * Math.pow(radius, 2);

//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getAreaCircle(10));

// // This below is an example of mix regular properties and methods and static properties and methods...

// class User {

//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }

//   static getUserCount() {
//     console.log(`There are currently ${User.userCount} active users`);
//   }

//   sayHello(){
//     console.log(`Hi, my name is ${this.username}`);
//   }
// }

// const user1 = new User("YumiOtnis");
// const user2 = new User("Aaron");
// const user3 = new User("Waki");

// console.log(user1.username);
// console.log(User.userCount);
// user2.sayHello();
// User.getUserCount();

// =============================================================================

// * inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child). Helps with code reusability

// class Animal {
//   alive = true;

//   eat(){
//     console.log(`This ${this.identity} can eat..`)
//   }

//   sleep(){
//     console.log(`This ${this.identity} can sleep :)`)
//   }
// }

// class Lizard extends Animal {
//   identity = "Lizard";

//   crawl() {
//     console.log(`This ${this.identity} can crawl the land`)
//   }
// }

// class Shark extends Animal {
//   identity = "Shark";

//   swim() {
//     console.log(`This ${this.identity} can swim and lethal`);
//   }
// }

// class Pteranodon extends Animal {
//   identity = "Pteranodon"

//   fly() {
//     console.log(`This ${this.identity} can fly the skies`)
//   }
// }

// const lizard = new Lizard();
// const shark = new Shark();
// const pteranodon = new Pteranodon();

// console.log(lizard.alive);

// lizard.eat();
// shark.swim();
// pteranodon.fly();
// pteranodon.sleep();

// ==============================================================================

// * Super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// * this = this object
// * super = this parent

// class Animal {

//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   move (speed) {
//     console.log(`This ${this.name} moves at a speed of ${speed}kmh`)
//   }
// }

// class Lizard extends Animal {

//     constructor (name, age, crawlSpeed) {
//       super(name, age);
//       this.crawlSpeed = crawlSpeed;
//     }

//     crawl() {
//       console.log(`This ${this.name} can crawl with a speed of ${this.crawlSpeed}`);
//       super.move(this.crawlSpeed);
//     }
//   }

// const lizard = new Lizard("lizzie", 2, 15);

// lizard.crawl();

// ============================================================================

// * Getter = special method that makes a property readable (when we retrieve values and try to read them and we can add additional logic too)
// * Setter = special method that makes a property writeable (we can build setters for input validation)

// We can use getters and setters to validate and modify a value w hen reading/writing a property

// class Rectangle {

//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if(newWidth > 0) {
//       this._width = newWidth; // using an underscore prefix, tells other developers that this is a private property (you shoulnd't touch it at all)
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }

//   set height(newHeight) {
//     if(newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }

//   // these properties above "set" are still undefined, because they are writeable via setters, but not readable, and that's where getters come in.

//   get width() {
//     return `${this._width.toFixed(1)} cm`;
//   }

//   get height() {
//     return `${this.height.toFixed(1)} cm`;
//   }

//   get area() {
//     return `${(this.width * this.height).toFixed(1)}`
//   }
// }

// const rectangle = new Rectangle(3, 4);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// Another example below

// class Person {

//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if(typeof newFirstName === "string" && newFirstName.length > 0) {
//       return this._firstName = newFirstName;
//     } else {
//       console.error(`First name must be a non-empty string`);
//     }
//   }

//   set lastName(newLastName) {
//     if(typeof newLastName === "string" && newLastName.length > 0) {
//       return this._lastName = newLastName;
//     } else {
//       console.error(`Last name must be a non-empty string`);
//     }
//   }

//   set age(newAge) {
//     if(typeof newAge === "number" && newAge >= 12) {
//       return this._age = newAge;
//     } else {
//       console.error(`Please only digits here`)
//     }
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }

//   get age() {
//     return this._age;
//   }
// }

// const person = new Person("Aaron", "Delen", 22);
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.fullName)
// console.log(person.age)

// ============================================================================

// * Destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

// Example 1 | Swap the value of two variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a]
// console.log(a);
// console.log(b);

// Example 2 | Swap 2 elements in an array

// const colors = [`red`, `green`, `blue`, `black`, `white`];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// Example 3 | Assign array elements to variables

// const colors = [`red`, `green`, `blue`, `black`, `white`];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// Example 4 | Extract values from objects

// const person1 = {
//   firstName: "Murloc",
//   lastName: "Nightcrawler",
//   age: 35,
//   type: "Agility",
//   gpm: 600
// }

// const person2 = {
//   firstName: "Lina",
//   lastName: "Inverse",
//   age: 30,
//   type: "Intelligence"
// }

// const {firstName, lastName, age, type, gpm = "Still not played"} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(type);
// console.log(gpm);

// Example 5 | Destructure in function parameters

// function displayHero({firstName, lastName, age, type = `Not Given`}) {
//   console.log(`Hero name: ${firstName} ${lastName}`);
//   console.log(`Age: ${age}`);
//   console.log(`Type: ${type}`);
// }

// const hero1 = {
//   firstName: "Rouge",
//   lastName: "Knight",
//   age: 27,
//   type: "Strength"
// }

// const hero2 = {
//   firstName: "Hu",
//   lastName: "Tao",
//   age: 20,
// }

// displayHero(hero2);

// ============================================================================

// * Nested objects = Objects inside of other objects.
//  > Allows you to represent more complex data structures
//  > Child object is enclosed by a parent object

// Person{Address{}, ContactInfo{}}....
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}...

// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int. Waters"
//   }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.address.city);

// For loop the address objects' properties >>
// for(const property in person.address) {
//   console.log(person.address[property]);
// }

// More example here below

// class Person {

//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {

//   constructor(street, city, country){
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address);
// console.log(person1.address.city);

// ===============================================================================

// * Array of Objects

// const fruits = [{name: "apple", color: "red", calories: 120},
//                 {name: "orange", color: "orange", calories: 50},
//                 {name: "banana", color: "yellow", calories: 95},
//                 {name: "kiwi", color: "green", calories: 75},
//                 {name: "coconut", color: "brown", calories: 160},
//                 {name: "pineapple", color: "yellow", calories: 210}]

// Show the objects in an array
// console.log(fruits[3].color);

// Put a new object in the array
// fruits.push({name: "grapes", color: "violet", calories: "45"});
// console.log(fruits);

// Remove the last object from the array
// fruits.pop()
// console.log(fruits);

// Skip an object from the array
// fruits.splice(1,2);
// console.log(fruits);

// ForEach Method
// fruits.forEach(fruit => console.log(fruit.name));

// Map Method - will run each element to a function and return a new array
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);
// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// Filter Method - return a new array after checking all elements based on a condition
// const yellowFruit = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
// console.log(highCalFruits);
// console.log(lowCalFruits);
// console.log(yellowFruit);

// Reduce Method - will return a single object from the array
// const maxFruit = fruits.reduce((Max, Fruit) => Fruit.calories > Max.calories ? Fruit : Max);
// const minFruit = fruits.reduce((Min, Fruit) => Fruit.calories < Min.calories ? Fruit : Min);
// console.log(maxFruit);
// console.log(minFruit);

// ============================================================================

// * Sort Method = method used to sort elements of an array in place.
//  sort elements as strings in lexicographic order, not alphabetical
//  lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

// console.log(fruits.sort());

// let numbers = [4, 10, 1, 7, 5, 2, 9, 3, 8, 6];

// console.log(numbers.sort());
// console.log(numbers.sort((a, b) => a - b)); // this is the fixed output

// an array of objects

// const people = [{name: "Spongebob", age: 30, gpa: 3.0},
//                 {name: "Patrick", age: 37, gpa: 1.7},
//                 {name: "Squidward", age: 40, gpa: 3.2},
//                 {name: "Sandy", age: 27, gpa: 4.1}];

// console.log(people.sort((a, b) => a.age - b.age)); // we sort them by age ascendingly
// console.log(people.sort((a, b) => a.name.localeCompare(b.name))); // sort lexicographically or (alphabetically this time)...

// ============================================================================

// * Shuffle an array
// We can use what called as Fisher-Yates algorithm

// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// function shuffle(array) {
//   for(let i = array.length - 1; i > 0; i--) { // minus 1, since we have 13 elements in the array, but 12 index since we start by 0
//     const random = Math.floor(Math.random() * (i + 1));

//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }

// shuffle(cards);
// console.log(cards);

// =============================================================================

// * Date Objects = Objects that contain values that represent dates and times
// These date objects can be changed and formatted

// const date = new Date(); // actual time of date

// console.log(date);

// // Date(year, month, day, hour, minute, second, ms)
// const date2 = new Date(2026, 6, 12, 4, 31, 44); // we place these arguments

// console.log(date2);

// const date3 = new Date("2025-03-15T03:55:21Z"); // other format

// console.log(date3);

// const date4 = new Date(0); // epic date || we can add ms digits here that will date starting from the epic date

// console.log(date4);

// // Extract the date individually

// const date5 = new Date(); // actual time of date
// const year = date5.getFullYear();
// const month = date5.getMonth();

// console.log(year);
// console.log(month);

// ============================================================================

// * Closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Often used in function-based components
//           Used frequently in JS Frameworks: React, Vue, Angular

// function outer() {

//   let greeting = "hello";

//   function inner() {
//     console.log(greeting);
//   }

//   inner();
// }
//          // benefit is we can encapsulate variables and make them private like the greeting variable
// outer(); // the inner function has access to everything within the outer function

// // below is without state maintenance

// function increment() {
//   let count = 0;
//   count++;
//   console.log(`Count increased to ${count}`);
// }

// increment();
// increment();
// increment();

// // below is with state maintenance

// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }

//   function getCount(){  // we can even add another function
//     return count;
//   }

//   return {increment, getCount};
// }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the current count is: ${counter.getCount()}`);

// below is a game wherein we would keep track of the points

// let score = 0;

// function increaseScore(points) {
//          score += points;
//     console.log(`you dealt: +${points}pts!`);
// }

// function decreaseScore(points) {
//          score -= points;
//     console.log(`you dealt: -${points}pts!`);
// }

// function getScore() {
//     return score;
// }

// increaseScore(5);
// increaseScore(8);
// decreaseScore(2);
// console.log(`the final score is:${getScore()}`); // this works but it can be override when we declare  another value to score later. What we can do is use closure

//     function createGame() {
//         let score = 0;

//     function increaseScore(points) {
//             score += points;
//         console.log(`you dealt: +${points}pts!`);
//     }

//     function decreaseScore(points) {
//             score -= points;
//         console.log(`you dealt: -${points}pts!`);
//     }

//     function getScore() {
//         return score;
//     }

//     return {increaseScore, decreaseScore,getScore};
// }

// const game = createGame();

// game.increaseScore(10);
// game.increaseScore(3);
// game.decreaseScore(1);
// console.log(`Overall score is: ${game.getScore()}pts!`)

// =============================================================================

// * setTimeout() = a function in JavaScript that allows you to schedule the execution of a function  after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the JavaScript runtime env.)
// setTimeout(callback, delay);

// function sayBye() {
//     console.log(`goodbye`);
// }
// setTimeout(sayBye, 3000);

// setTimeout(() => {
//     window.alert("hello");
// }, 3000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers

// const timeOut = setTimeout(() => {
//     window.alert(`hello`);
// }, 3000);

//clearTimeout(timeOut); // this cancels the setTimeout <--

// let timeoutId;

// function startTimer() {
//     timeoutId = setTimeout(() => {
//         window.alert(`hello`)
//     }, 3000);
//     console.log(`Started`);
// }

// function endTimer() {
//     clearTimeout(timeoutId);
//     console.log(`Ended`);
// }

// ================================================================================

// * DIGITAL CLOCK PROGRAM

// function updateClock(){
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, 0);
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0);
//     const timeString = `${hours}: ${minutes}: ${seconds}`;
//     document.getElementById("clock").textContent = timeString;

// }

// updateClock();
// setInterval(updateClock, 1000); // setInternal works similar like setTimeout, except it will cal the function repeatedly, in this case it is every 1 second.

// The above code is in military time, here below will be the 12-hour format

// function updateClock(){
//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0);
//     const timeString = `${hours}: ${minutes}: ${seconds} ${meridiem}`;
//     document.getElementById(`clock`).textContent = timeString;
// }

// updateClock();
// setInterval(updateClock, 1000);

// ====================================================================================

// * Stopwatch Program

// const display = document.getElementById(`display`);
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function startf() {

//     if(!isRunning) {
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }

// function stopf() {

//     if(isRunning) {
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }

// }

// function resetf() {
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = `00:00:00:00`;
// }

// function update() {
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");
//     milliseconds = String(milliseconds).padStart(2, "0");
//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
// }

// ><><><><><><><> BELOW IS A MORE MODERN AND MORE MANAGEABLE CODE ><><><><><><><><><>

// * Stopwatch Program
// const display = document.getElementById("display");
// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");
// const resetBtn = document.getElementById("resetBtn");

// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// // Start function
// const start = () => {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime; // Calculate from where it left off
//     timer = setInterval(update, 10); // Call update every 10ms
//     isRunning = true;
//   }
// };

// // Stop function
// const stop = () => {
//   if (isRunning) {
//     clearInterval(timer); // Stop the interval
//     elapsedTime = Date.now() - startTime; // Save elapsed time
//     isRunning = false;
//   }
// };

// // Reset function
// const reset = () => {
//   clearInterval(timer); // Stop the interval
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00"; // Reset display
// };

// // Update function (called every 10ms)
// const update = () => {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime; // Total elapsed time

//   // Calculate time units
//   const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(2, "0");
//   const minutes = String(Math.floor((elapsedTime / (1000 * 60)) % 60)).padStart(2, "0");
//   const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2, "0");
//   const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, "0");

//   // Update the display
//   display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// };

// // Attach event listeners
// startBtn.addEventListener("click", start);
// stopBtn.addEventListener("click", stop);
// resetBtn.addEventListener("click", reset);

// =====================================================================

//  * ES6 Module = An external file that contains reusable code
//  that can be imported into other JavaScript files.
//  Write reusable code for many different apps. Can contain variables, classes, functions ... and more
// Introduced as part of ECMAScript 2015 update

// Here I have created another file named: mathUtil.js => separate js file wherein we import files from.

// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

// console.log(PI);

// console.log(`${getCircumference(10).toFixed(2)}cm`);

// console.log(`${getArea(10).toFixed(2)}cm^2`);

// console.log(`${getVolume(10).toFixed(2)}cm^3`);

// ===================================================================

// * Synchronous  = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete. Limitation: Synchronous programming is blocking, meaning if one line of code takes a long time (e.g., reading a file or making a network request), the entire program waits and becomes unresponsive.

// Asynchronous = Allows multiple operations to be performed concurrently without waiting. Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data) Handled with: Callbacks, Promises, Async/Await
// E.g. Gaming: Load assets in the background while showing a loading screen.

// setTimeout(() => {     // setTimeout is also an example of Asynchronous
//    console.log(`Task 1`);
// }, 3000);

// console.log(`Task 2`); // These are synchronous codes that go sequential
// console.log(`Task 3`);

// If it is crucial that task 2 and 3 finishes after task 1, we can use a callback:

// const func1 = (callback) => {
//     setTimeout(() => {
//         console.log('Task 1');
//         callback(); // Call the next task
//     }, 3000);
// };

// const func2 = () => {
//     console.log('Task 2');
//     console.log('Task 3');
// };

// func1(func2); // Run func1 and pass func2 as a callback

// ====================================================================

// * Error = an object that is created to represent a problem that often occurs with user input or establishing a connection

// try {} = encloses code that might potentially cause an error
// catch() {} = catch and handle any thrown errors from try {}
// finally {} = (optional) always executes. Used mostly for clean up. E.g. close files, close connections, release resources

// try{
//     console.log(x); // ! This causes an error, because variable x is not defined, before we have an uncaught error, now we have caught it using try block.

// NETWORK ERRORS
// PROMISE REJECTIONS
// SECURITY ERRORS
// }

// catch(error) {
// console.error(error); // ** here we are using catch block to handle the error
// }

// finally { // this is optional, and I have not yet know the use of this
// CLOSE FILES
// CLOSE CONNECTIONS
// RELEASE RESOURCES
//     console.log(`This always executes`)
// }

// console.log(`You have reached the end.`) // Without try/catch, the code will not reach this console log, with it, it will reach this and print it.

// ** Below here will be the error catching for user inputs

// try {
//     const dividend = Number(window.prompt(`Enter a Dividend: `));
//     const divisor = Number(window.prompt(`Enter a Divisor: `));

//     if (divisor === 0) {
//         throw new Error(`You can't divide by zero!`); // using the == works here because it does type coercion, it converts the numbered string that the user inputs into an integer so we can do the if statement.

//         // but if we want to use the === strict operator, we would need to convert both of the dividend and divisor using the number() method.
//     };

//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error(`That is not a number!`)
//     };

//     const result = dividend/divisor;
//     console.log(result);
// }
// catch(error) {
//     console.error(error);
// }

// console.log(`You have reached the end`)

// ======================================================================

// * Calculator Program

// const display = document.getElementById('display');

//   const appendToDisplay = (input) => {
//     display.value += input;
//   };

//   const calculate = () => {
//     try {
//       display.value = eval(display.value);
//     }
//     catch(error) {
//       display.value = "Error"
//     };
//   };

//   const clearDisplay = () => {
//     display.value = null;
//   };

// ==============================================================

// * DOM = Document Object Model
// Object {} that represents the page you see in the web browser and provides you with an API to interact with.
// Web browser constructs the DOM when it loads an HTML document, and structure all the elements in a tree-like representation.
// JavaScript can access the DOM dynamically.
// Can change the content, structure, and style of a web page.

// document.title = "aaron pogi";

// let username = "asd";
// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? "Guest" : username;
// console.dir(document);

// ==============================================================

// * Element Selectors = Methods used to target and manipulate HTML elements.
// They allow you to select one or multiple HTML elements from the DOM.

// 1. document.getElementById()         // returns either ELEMENT OR if can't find NULL
// 2. document.getElementsClassName()   // HTML COLLECTION <-- We can't use forEach()
// 3. document.getElementsByTagName()   // HTML COLLECTION <-- We can't use forEach()
// 4. document.querySelector()          // returns either ELEMENT OR if can't find NULL
// 5. document.querySelectorAll()       // NODELIST

// const myHeading = document.getElementById("my-h1");

// myHeading.style.backgroundColor = "yellow"; // In CSS we use hyphenation on the properties, in JavaScript we use Camel Casing.

// myHeading.style.color = "blue";
// console.log(myHeading); // <-- this displays the style in html dom

// const heroes = document.getElementsByClassName("heroes");

// console.log(heroes);

// heroes[0].style.backgroundColor = "blue"
// heroes[0].style.color = "white"
// heroes[1].style.backgroundColor = "orange"
// heroes[2].style.backgroundColor = "lightgreen"

// for(let hero of heroes) {
//   hero.style.fontWeight = "bold";
//   hero.style.textTransform = "uppercase";
// }

// const h4Elements = document.getElementsByTagName("h4");

// // h4Elements[2].style.fontSize = "3rem";   // Target them individually

// for(let h4 of h4Elements) {
//   h4.style.fontSize = "3rem";               // Target all of the h4 elements
// };

// const liElements = document.getElementsByTagName("li"); // We cant do chaining here or array manipulation unless converted into an array, such as: map(), filter(), reduce().
// for(let liElement of liElements) {
//   liElement.style.backgroundColor = "violet"
// }

// Array.from(liElements).forEach(liElements => { // Converts into a real array, and as an array, we now have access to methods like: map(), filter(), reduce().
//   liElements.style.backgroundColor = "Yellow";
// })

// const element = document.querySelector(".heroes"); // ** this targets the first element that matches the specified selector. classes = .element; id = #element; tag = h1;

// element.style.fontSize = "3rem";

// const index = document.querySelectorAll("li"); // ** I can target multiple elements but it is static, it wont update if the DOM changes. Can use byClassName or byTagName for live.
// index[1].style.color = "red";
// // OR
// index.forEach(li => {
//   li.style.color = "blue";
// });

// ==============================================================================

// * DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

// .firstElementChild
// . lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// const fruits = document.getElementById("fruits");
// const firstChild = fruits.firstElementChild;
// const lastChild = fruits.lastElementChild;

// firstChild.style.backgroundColor = "red";
// lastChild.style.backgroundColor = "blue";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//   const firstUl = ulElement.firstElementChild;
//   firstUl.style.fontWeight = "Bold"
//   firstUl.style.backgroundColor = "lightgreen";
//   firstUl.style.display = "inline-block";
// });

// ulElements.forEach(ulElement => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.textDecoration = "line-through";
//   lastChild.style.backgroundColor = "grey";
// });

// const liElements = document.getElementById("apple");
// const nextChild = liElements.nextElementSibling;

// nextChild.style.backgroundColor = "orange";

// const element = document.getElementById("agility");
// const parent = element.parentElement;

// parent.style.backgroundColor = "yellow";

// const element1 = document.getElementById("heroes");
// const children = element1.children;

// Array.from(children).forEach(child => {
//   child.style.fontSize = "2rem";
// });

// ==================================================================================

// * ADD & CHANGE HTML ELEMENTS USING JAVASCRIPT

// ----------- Example 1 <h1> ------------

// STEP 1: CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
// const newH2 = document.createElement("h2");
// const boxH1 = document.createElement("h1");
// const prependBoxH1 = document.createElement("h1");
// const inBetween = document.createElement("h1");

// STEP 2: ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like kena ♥";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// prependBoxH1.textContent = "woah-zie..✨";
// prependBoxH1.style.color = "orange";
// prependBoxH1.style.textAlign = "center";

// boxH1.textContent = "skyblue ☁";
// boxH1.style.color = "skyblue";
// boxH1.style.textAlign = "center";

// inBetween.textContent = "Between 👀";
// inBetween.style.color = "brown";
// inBetween.style.textAlign = "center";

// newH2.textContent = "#phonk_hardstyle";

// STEP 3: APPEND ELEMENT TO DOM
// document.body.prepend(newH1); // ** This makes it appear at the top
// document.getElementById("box1").prepend(prependBoxH1);
// document.getElementById("box1").append(boxH1);
// document.body.append(newH2); // ** This makes it appear at the bottom

// const box3 = document.getElementById("box3");
// document.body.insertBefore(inBetween, box3);

// STEP 4: REMOVE HTML ELEMENT

//This is optional, but this is how to do it

// document.body.removeChild(newH2); // removes the #phonk_hardstyle

// ============================================================================

// * EventListener (MouseEvents) = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(event, arrow function);

// const myBox = document.getElementById("myBox");
// let isClicked = false; // Flag to track if "Click me" was clicked
// let isStopClicked = false; // Flag to track if "Please stop" was clicked
// const background = document.getElementById("background");
// const screamAudio = document.getElementById("screamAudio");
// screamAudio.playbackRate = 2;
// screamAudio.volume = 1;

// myBox.addEventListener("click", event => {
//     if (!isClicked) {
//         // First click: Change text to "Please stop" without showing horror
//         isClicked = true;
//         event.target.textContent = "Please stop 😱";
//         event.target.style.backgroundColor = "red";
//         event.target.style.color = "black";
//         event.target.style.fontSize = "3.8rem";
//         event.target.style.fontWeight = "bold";
//         event.target.style.boxShadow = "2px 5px 10px rgba(0, 0, 0, 0.7)";
//         event.target.style.borderRadius = "5px";
//         event.target.style.display = "flex";
//         event.target.style.alignItems = "center";
//         event.target.style.textAlign = "center";
//     } else if (!isStopClicked) {
//         // Second click: Show horror background and play the scream
//         isStopClicked = true;
//         background.style.visibility = "visible";
//         background.style.opacity = "1";
//         background.style.position = "absolute";
//         background.style.zIndex = "50";

//         screamAudio.play(); // Play scream sound
//     }
// });

// myBox.addEventListener("mouseover", event => {
//     if(!isClicked) {
//     event.target.textContent = "Don't do it 😨";
//     event.target.style.backgroundColor = "orange";
//     event.target.style.justifyContent = "center";
//     }
// });

// myBox.addEventListener("mouseout", event => {
//     if(!isClicked) {
//     event.target.textContent = "Phew 😬";
//     event.target.style.backgroundColor = "soft blue";
//     event.target.style.justifyContent = "center";

//         setTimeout(()=> {
//             if(!isClicked) {
//             event.target.textContent = "Click me 😀";
//             event.target.style.backgroundColor = "lightgreen";
//             event.target.style.justifyContent = "center"
//             }
//         }, 2000);
//     }
// });

// ===============================================================================

// * EventListener (KeyEvents) = Listen for specific events to create interactive web pages
// * events: keydown, keyup
// * document.addEventListener(event, callback)

// const myBox = document.getElementById("myBox");
// const moveAmount = 20;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     myBox.textContent = "🤨";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox.textContent = "😀";
//     myBox.style.backgroundColor = "lightblue";
// });

// document.addEventListener("keydown", event => {

//     if (event.key.startsWith("Arrow")) {

//         // event.preventDefault(); // so we cant scroll with the element

//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         };

//         myBox.style.transform = `translate(${x}px, ${y}px)`;
//     };
// });

// =========================================================================

// * Hide/Show HTML

// const hideBtn = document.getElementById("hide")
// const myImg = document.getElementById("myImg");

// hideBtn.addEventListener("click", event => {

//     if(myImg.style.visibility === "hidden" ) {
//         myImg.style.visibility = "visible";
//         hideBtn.textContent = "Hide"
//     } else {
//         myImg.style.visibility = "hidden";
//         hideBtn.textContent = "Show";
//     }
// });

// ============================================================================

// * NodeList = Static collection of HTML elements by (id, class, element)
// * Can be created using querySelectorAll()
// * Similar to an array, but no (map, filter, reduce), but have forEach()
// * NodeList won't update to automatically reflect changes

// const buttons = document.querySelectorAll(".myButtons");

// * ADD HTML/CSS PROPERTIES

// buttons.forEach( button => {
//     button.style.color = "black";
//     button.style.textDecoration = "underline";
//     button.textContent += "🎇"
// });

// console.log(buttons);

// * CLICK EventListener

// buttons.forEach(button => {
//     let isClicked = false

//     button.addEventListener("click", event => {

//         if(isClicked) {
//             event.target.style.backgroundColor = "hsl(43, 100%, 60%)";
//         } else {
//             event.target.style.backgroundColor = "tomato";
//         }
//         isClicked = !isClicked;
//     });
// });

// * Mouseover + Mouseout EventListener

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.textDecoration = "underline overline";
//         event.target.style.color = "#000";
//         event.target.textContent += "🎃"
//     });

//     button.addEventListener("mouseout", event => {
//         event.target.style.textDecoration = "none";
//         event.target.style.color = "#fff";

//         if(event.target.textContent.endsWith("🎃")) {
//             event.target.textContent = event.target.textContent.slice(0, -2);
//         };
//     });
// });

// * Add an element

// let buttons = document.querySelectorAll(".myButtons");

// const newButton = document.createElement("button");

// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";

// document.body.appendChild(newButton);

// buttons = document.querySelectorAll("myButtons");

// console.log(buttons);

// * Remove an element

// buttons.forEach(button => {
//     button.addEventListener("click", e => {
//         e.target.remove()
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     });
// });

// ===========================================================================

// * classList = Element property in JavaScript used to interact with an element's list of classes (CSS Classes)
// Allows you to make reusable classes for many elements across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");   // ** add a css class to an element
// myButton.classList.remove("enabled"); // ** removes a css class to an element

// myButton.addEventListener("mouseover", e => {
//     myButton.classList.add("hover");
// });

// myButton.addEventListener("mouseout", e => {
//     myButton.classList.remove("hover");
// });

// we can also use the "toggle" classList here.

// myButton.addEventListener("mouseover", e => {
//     myButton.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", e => {
//     myButton.classList.toggle("hover");
// });

// myButton.addEventListener("click", event => {
//     event.target.classList.replace("enabled", "disabled"); // replace method
// });

// myButton.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🥵"
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// * For the 5 buttons

// let myBtn = document.querySelectorAll(".myBtn");

// myBtn.forEach(button => {
//     button.classList.add("enabled");
// });

// myBtn.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// myBtn.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     });
// });

// myBtn.forEach(button => {
//     button.addEventListener("click", event => {

//         if(event.target.classList.contains("disabled")) {
//             event.target.textContent += "🥴";
//         } else {
//             event.target.classList.replace("enabled", "disabled");
//         }

//     });
// });

// ==========================================================================

// * Rock - Paper - Scissors

// const choices = ["Rock", "Paper", "Scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;

// const playGame = (playerChoice) => {
//     const computerChoice = choices[Math.floor(Math.random() * 3)];

//     playerDisplay.textContent = `Player Moves: ${playerChoice}`;
//     computerDisplay.textContent = `Computer Moves: ${computerChoice}`;

//     if (playerChoice === computerChoice) {
//         resultDisplay.textContent = "It's a tie!";
//     } else if (
//         (playerChoice === "Scissors" && computerChoice === "Paper") ||
//         (playerChoice === "Paper" && computerChoice === "Rock") ||
//         (playerChoice === "Rock" && computerChoice === "Scissors")
//     ) {
//         resultDisplay.textContent = "You Won!";
//     } else {
//         resultDisplay.textContent = "PC Won!";
//     }

//     // Remove previous styles
//     resultDisplay.classList.remove("win", "lose", "tie");

//     // Add styling based on result
//     if (resultDisplay.textContent === "You Won!") {
//         resultDisplay.classList.add("win");
//         playerScore++;
//         playerScoreDisplay.innerHTML = `Player Score: <span class="win">${playerScore}</span>`;
//     } else if (resultDisplay.textContent === "PC Won!") {
//         resultDisplay.classList.add("lose");
//         computerScore++;
//         computerScoreDisplay.innerHTML = `Computer Score: <span class="lose">${computerScore}</span>`;
//     } else {
//         resultDisplay.classList.add("tie");
//     }
// };

// =========================================================================

// * Image Slider

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// const initializeSlider = () => {
//     if(slides.length > 0) {
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }

// };

// const showSlide = (index) => {

//     if(index >= slides.length) {
//         slideIndex = 0;
//     } else if(index < 0) {
//         slideIndex = slides.length - 1;
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });
//     slides[slideIndex].classList.add("displaySlide");
// };

// const prevSlide = () => {
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// };

// const nextSlide = () => {
//     slideIndex++;
//     showSlide(slideIndex);
// };

// document.addEventListener("DOMContentLoaded", initializeSlider);

// ========================================================================

// * Callback Hell =  Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// * Old pattern to handle asynchronous functions.
// * Use Promises + async/wait to avoid callback hell.

// const task1 = () => {
//     console.log("Task 1 Complete");
// };

// const task2 = () => {
//     console.log("Task 2 Complete");
// };

// const task3 = () => {
//     console.log("Task 3 Complete");
// };

// const task4 = () => {
//     console.log("Task 4 Complete");
// };

// task1();
// task2();
// task3();
// task4();

// * Above is a synchronous code example

// const task1 = (callback) => {
//         setTimeout(()=>{
//             console.log("Task 1 Complete");
//             callback()
//         }, 2000);
//     };

//     const task2 = (callback) => {
//         setTimeout(()=>{
//             console.log("Task 2 Complete");
//             callback()
//         }, 3000);
//     };

//     const task3 = (callback) => {
//         setTimeout(()=>{
//             console.log("Task 3 Complete");
//             callback()
//         }, 1500);
//     };

//     const task4 = (callback) => {
//         setTimeout(()=>{
//             console.log("Task 4 Complete");
//             callback()
//         }, 1000);
//     };

//     task1(() => {
//         task2(() => {
//             task3(() => {
//                 task4(() => {
//                     console.log("All tasks complete!");
//                 });
//             });
//         });
//     });

// * Above is an example of callback hell
// * ChatGPT --> You're ensuring that the asynchronous operations maintain a logical order, much like how a game's loading process ensures the system is ready before displaying the game screen!

// =========================================================================

// * Promise = An Object that manages asynchronous operations.
// *          Wrap a Promise Object around {asynchronous code}
// *          "I promise to return a value"
// *          PENDING -> RESOLVED or REJECTED
// *          new Promise ((resolve, reject) => {asynchronous code})

// *         DO THESE CHORES IN ORDER

// *          1. WALK THE DOG
// *          2. CLEAN THE KITCHEN
// *          3. TAKE OUT THE TRASH

// const walkDog = () => {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             const dogWalked = true;

//             if(dogWalked){
//                 resolve("Walk the dog 🐶");
//             } else {
//                 reject("You didn't walk the dog!");
//             };
//         }, 1500);
//     });
// };

// const cleanKitchen = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const cleanedKitchen = true;
//             if(cleanedKitchen) {
//                 resolve("Clean the kitchen 🧹");
//             } else {
//                 reject("You didn't clean the kitchen at all!");
//             };
//         }, 2500);
//     });
// };

// const takeOutTrash = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             const trashTakenOut = true;
//             if(trashTakenOut) {
//                 resolve("Take out the trash 🚮");
//             } else {
//                 reject("You didn't take the trash out!");
//             };
//         }, 500);
//     });

// };

// walkDog()
//     .then(value => {
//         console.log(value);
//         return cleanKitchen();
//     })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash();
//     })
//     .then(value => {
//         console.log(value);
//         console.log("You finished all the chores 😀");
//     })
//     .catch(error => console.error(error));

// ==========================================================================

// * Async/Await = Async -> makes a function return a promise
// *               Await -> makes an async function wait for a promise

// *               Allows you to write asynchronous code in a synchronous manner
// *               Async doesn't have resolve or reject parameters
// *               Everything after Await is placed in an event queue

// const walkDog = () => {

//         return new Promise((resolve, reject) => {

//             setTimeout(() => {
//                 const dogWalked = true;

//                 if(dogWalked){
//                     resolve("Walk the dog 🐶");
//                 } else {
//                     reject("You didn't walk the dog!");
//                 };
//             }, 1500);
//         });
//     };

//     const cleanKitchen = () => {

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {

//                 const cleanedKitchen = true;
//                 if(cleanedKitchen) {
//                     resolve("Clean the kitchen 🧹");
//                 } else {
//                     reject("You didn't clean the kitchen at all!");
//                 };
//             }, 2500);
//         });
//     };

//     const takeOutTrash = () => {

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {

//                 const trashTakenOut = true;
//                 if(trashTakenOut) {
//                     resolve("Take out the trash 🚮");
//                 } else {
//                     reject("You didn't take the trash out!");
//                 };
//             }, 500);
//         });

//     };

//     const doChores = async () => {

//         try {
//             const walkDogResult = await walkDog();
//             console.log(walkDogResult);

//             const cleanKitchenResult = await cleanKitchen();
//             console.log(cleanKitchenResult);

//             const takeOutTrashResult = await takeOutTrash();
//             console.log(takeOutTrashResult);

//             console.log("All chores finished!");
//         }
//         catch(error) {
//             console.error(error);
//         };
//     };

//     doChores();

// ==========================================================================

// * JSON = (JavaScript Object Notation) data-interchange format
// *        Used for exchanging data between a server and a web application
// *        JSON files {key:value} OR [value1, value2, value3]

// *        JSON.stringify() = converts a JS object to a JSON string.
// *        JSON.parse() = converts a JSON string to a JS object.

// const names = ["slark", "sven", "juggernaut", "morphling"];
// const person = {"name": "slark", "type": "agility", "avgGPM": "600",
//                 "isCarry": true, "hobbies": ["jungler", "pusher", "killer"]
// };
// const people = [{
//     "name": "slark",
//     "type": "agility",
//     "avgGPM": "600",
//     "isCarry": true
// }, {
//     "name": "skywrath mage",
//     "type": "intelligence",
//     "avgGPM": "450",
//     "isCarry": false
// }, {
//     "name": "dragon knight",
//     "type": "strength",
//     "avgGPM": "550",
//     "isCarry": true
// }, {
//     "name": "crystal maiden",
//     "type": "intelligence",
//     "avgGPM": "400",
//     "isCarry": false
// }]

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// * To Convert the above objects/arrays into strings, we can surround them with backticks

// const jsonNames = `["slark", "sven", "juggernaut", "morphling"]`;
// const jsonPerson = `{"name": "slark", "type": "agility", "avgGPM": "600",
//                 "isCarry": true, "hobbies": ["jungler", "pusher", "killer"]
// }`;
// const jsonPeople = `[{
//     "name": "slark",
//     "type": "agility",
//     "avgGPM": "600",
//     "isCarry": true
// }, {
//     "name": "skywrath mage",
//     "type": "intelligence",
//     "avgGPM": "450",
//     "isCarry": false
// }, {
//     "name": "dragon knight",
//     "type": "strength",
//     "avgGPM": "550",
//     "isCarry": true
// }, {
//     "name": "crystal maiden",
//     "type": "intelligence",
//     "avgGPM": "400",
//     "isCarry": false
// }]`;

// const parsedData = JSON.parse(jsonNames);
// console.log(parsedData);

// -------------------------------------------------------------------------

// const fetchData = async () => {
//     try{
//         const response = await fetch("./json/person.json");
//         if (!response.ok) {
//             throw new Error(`HTTP Error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.error(error);
//     }
// };

// fetchData();

// * .ok: Built-in boolean property of the Response object that checks if the HTTP status indicates success.
// * response.json(): Built-in method of the Response object that parses the body of the response as JSON and returns a Promise.

// ======================================================================================

// * fetch = Function used for making HTTP requests to fetch resources.
// *         (JSON style data, images, files)
// *         Simplifies asynchronous data fetching in JavaScript and used
// *         for interacting with APIs to retrieve and send data asynchronously over the web.
// *         fetch(url, {options})

// const fetchPokemon = async () => {
//     try {

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch (`ht tps://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok) {
//             throw new Error(`Could not fetch pokemon! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);

// Display the pokemon image
//         const pokemonSprite = document.getElementById("pokemonSprite");
//         pokemonSprite.src = data.sprites.front_default;
//         pokemonSprite.style.display = "block";

//         const imageContainer = document.querySelector(".image-container");
//         imageContainer.style.display = "flex";

//     } catch(error) {
//         console.error(error);
//     };
// };

// document.getElementById("fetchBtn").addEventListener("click", fetchPokemon);
// document.getElementById("pokemonName").addEventListener("keydown", event => {
//     if(event.key === "Enter") {
//         fetchPokemon();
//     }
// });

// =======================================================================================

// * WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "51a3efe79b32cb0f7b4007edef40b40c";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent page reload

  const city = cityInput.value.trim(); // Trim whitespace from input

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      if (weatherData) {
        displayWeatherInfo(weatherData);
      } else {
        displayError("City not found. Please enter a valid city.");
      }
    } catch (error) {
      console.error(error);
      displayError("An unexpected error occurred.");
    }
  } else {
    displayError("Please enter a city.");
  }
});

const getWeatherData = async (city) => {
  try {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Could not fetch weather data");
    }

    return await response.json(); // if we got a resposne, convert it into JSON format
  } catch (error) {
    console.error(error);
  }
};

const displayWeatherInfo = (data) => {
  if (!data || !data.name || !data.main || !data.weather) {
    displayError("Incomplete weather data received.");
    return;
  }

  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
};

const getWeatherEmoji = (weatherId) => {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "🌩️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
};

const displayError = (message) => {
  const errorDisplay = document.createElement("p"); // create an HTML element via JS
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay"); // create a CSS element via JS

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
};

// ! January 1, 2025.. TAPOS NAAA hahahha
