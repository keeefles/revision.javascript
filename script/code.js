/*
R E V I S I O N
*/

// create an array that contains 6 elements but the first 2 must be a numbers.
// NB MAKE SURE THE ELEMENT AT POSITION 4 IS IN LOWERCASE.

// element is the number of values it contains.
// index is the position but starts at 0.

// let data = [
//     1, 2, 'Bluey', 'pua', 'Clover', 'Meowscles'
// ]

// display the third index in the console.
// console.log(data[3]);

// create two objects and add the objects into an array, log the objects as well. AND PUSH INTO THE ARRAY.

// let person1 = {
//     name: 'toehieda'
// }
// console.log(person1);

// let person2 = {
//     name: 'ebrahim'
// }
// console.log(person2);
// // create an empty array.
// let personInfo = []
// personInfo.push(person1)
// personInfo.push(person2)
// console.log(personInfo);

/* 
I F  S T A T E M E N T S
- if statements check whether or not a statement is true or false and what the outcome is; depending on the variables.
*/


/*
let firstName = 'zubair'
    if(firstName) {
        console.log("present");
    }else {
        console.log("absent");
    }
*/

// let firstName = 'zubair'
//     let state = 'late'
//     if (state == 'present') {
//         console.log('present');
//     }else if (state == 'late') {
//         console.log('late');
//     }else {
//     console.log('absent');
// }

/*
S W I T C H  S T A T E M E N T
*/

// switch (true) {
//     case state == 'present':
//         console.log('present')
//     break;
//     case state != '':
//         console.log("late");
//     break;
//     case state != '':
//         console.log("late -> Final warning");
//     break;
//     default:
//         console.log("absent");
//     break;
// }

/*
M A T H  M E T H O D
- we make use of math method because it is efficient when you need to make use of numerical operators/functions
*/

// let numbers = [9, 4, 2, 5, 10]
// max allows us to return the highest number
// console.log(Math.max(...numbers));
// min allows us to return the lowest number
// console.log(Math.min(...numbers));
// .floor rounds down and returns the integer.
// let size = Math.floor(numbers.length / 2)
// console.log(numbers[size]);

// anything that goes between opening and closing parenthesis is a parameter.
// function display(...args) {
//     console.log(`Your name is ${args}`);
// }
// display('aakeefah')



// function highestNumber(args) {
//     let highest = 0
//     for(let i in args) {
//         if(args[i] > args[i+1]) {
//             highest = args[i]
//         }
//     }
//     return highest
// }
// highestNumber(numbers)
// if you display 'of' it will show values but if you display in, it will how the index.

// PI is constant.
// console.log(Math.PI);
// Round the value to the nearest integer

// console.log("round(3.5): ", Math.round(3.5));
// console.log("round(3.4): ", Math.round(3.4));
// console.log("round(3.0): ", Math.round(3.0));
// moves to the bigger integer when it's not a definite integer but includes .number...
// console.log("ceil(3.5): ", Math.ceil(3.5));
// console.log("ceil(3.4): ", Math.ceil(3.4));
// returns the same value that floor would. the integer closest to the value.
// console.log("trunc(3.5): ", Math.trunc(3.5));
// console.log("trunc(3.4): ", Math.trunc(3.4));
// console.log("trunc(3.0): ", Math.trunc(3.0));
// returns the integer closest to the value.
// console.log("floor(3.5): ", Math.floor(3.5));
// console.log("floor(3.4): ", Math.floor(3.4));
// console.log("floor(3.0): ", Math.floor(3.0));
// // 
// console.log("random(): ", Math.floor(Math.random() * 10));



/*
S P R E A D  O P E R A T O R 
R E S T  P A R A M E T E R
- parameters are placeholders. allows the user to pass as many arguments as they would like.
-if the dots are used outside of the parameter it is then a spread operator.
*/

// combining arrays.
// let numbers = [9, 4, 20, 2, 5, 10, 9]
// let data = [11, 19]
// // let combine = [...numbers, ...data]
// // console.log(combine);

// console.log(Math.max(9, 11, 15, 20, 7));
// // won't work without the spread operator (...)
// console.log(Math.max(...numbers));


// function display(...args) {
//     console.log(args);
// }
// display(2, 3)
// display(2)
// display(2, 4, 5, 6, 11, 12)

/*
D A T E
*/

// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getDate());
// // index starts at 0, therefore we add plus 1.
// console.log(currentDate.getMonth()+1);
// // dir displays methods for that specific variable.
// console.dir(currentDate);
// console.error('This displays an error message.')

// let anotherDate = new Date("2005-02-03")
// console.log(anotherDate);
// makes use of the index in place of the month
// let thirdAttempt = new Date(2005, 1, 3)
// console.log(thirdAttempt);

// creating an array of characters.
// let sentence = 'I love programming'
// console.log(sentence.length);

// function arrOfChars(sentence) {
//     let characters = []
//     for(let c of sentence){
//         characters.push(c)
//     }return characters
// }
// different ways of spliting a sentence into characters.
// console.log(arrOfChars(sentence));
// console.log(sentence.split(""));

// removes the word which was specified.
// console.log(sentence.split("love"));

// replaces the first value with the given value.
// console.log(sentence.replace("love", "hate"));
// console.log(sentence.replace("programming", "aakeefah"));

// console.log();

/*
O P E R A T O R S

-arithmetic: +, /, **, *, -, ++, --
-assignment: =, +=, etc.
-comparison: >=, <=, !=, ==, ===
-logical: &&, ||, !
typeof: typeof and instanceof
*/

// makes use of a prompt and displays the answer in the console.
// let numb1 = +prompt("enter number 1")
// let numb2 = +prompt("enter number 2")
// console.log(numb1 + numb2);

// calculating modulus.
// modulus displays the remainder of the calculation.
// console.log(6 % 2 > 0 ? "odd number" : "even number");

/*
T E R N A R Y  O P E R A T O R
*/

// let salary = 5000
// let bonus = 2000
// let performance = true
// console.log((salary < 5000 ) ? bonus : performance);
// console.log(performance ? salary + bonus : salary );

/*
B U I L T - I N  F U N C T I O N
-a predefined function by javascript.
-checks if a number is finite.
*/

// console.log(isFinite(-25));
// checks if value is a string
// console.log(isNaN(52));

// let isReady = confirm("are you ready?")
// if(isReady) {
//     console.log("Quit Time");
// }else {
//     console.log("Self-Study");
// }

/*
R E C U R S I V E  F U N C T I O N
- a function that repeats itself / calls itself. like a loop.
*/

// let cnt = 0
// function numberUten(limit) {
//     if(cnt <= limit){
//         console.log(cnt);
//         cnt++
//         numberUten(limit--)
//     }
// }
// numberUten(10)

// create an array and display the values using a recursive function.
// let numbers = [2, 5, 3, 9, 10]
// for(let x of numbers){
//     console.log(x);
// }

// displays the numbers with the index.
// numbers.forEach((number, i)=> {
//     console.log(number, i);
// })

// let person = {
//     firstName: 'aakeefah',
//     lastName: 'jones'
// }
// long version
// for(let p of Object.keys(person))
//     console.log(p);
// shorter version
// for(let p in person){
//     console.log(p);}

// we clone objects so we could have a backup.
// let numb1 = [3, 8, 5]
// let numb2 = [...numb1]
// numb1.length = 0
// numb1 = []
// numb1.splice(), numb1.length
// while(numb1.length > 0){
//     numb1.pop()
// }
// console.log(numb1, numb2);
// reduce combines all the elements in an array and creates a single value.

/*
R E T R I E V E  M I D D L E  A R R A Y
retrieving is basically fetching.
*/

// retrieve the middle element from an array/
// 1st approach
// let numbers = [4, 8, 2, 8, 4, 7]

// // purpose of having an object
// let firstName = 'Aakeefah'
// let lastName = 'Jones'

// const person = {
//     firstName,
//     lastName
// }
// console.log(person);

/*
D E S T R U C T U R I N G
*/

// let data = ['Aakeefah', 'Moerat', '18']
// let [firstName, lastName, age] = data
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(`My name is ${firstName}, my surname is ${lastName} and I am ${age} years old.`);

/*
A R R A Y  O F  O B J E C T S
*/

// let products = [{
//     id: 1,
//     name: 'table',
//     amount: 700
// },
// {
//     id: 2,
//     name: 'mobile',
//     amount: 1000
// },
// {
//     id: 3,
//     name: 'laptop',
//     amount: 20000
// }]
// let [product1, product2] = products
// console.log(products);

/*
O B J E C T S 
*/

// let person = {
//     firstName: 'Aakeefah',
//     lastName: 'Moerat',
//     age: '18'
// }
// const{firstName, lastName, age} = person
// console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

// let [first, second, ...remaining] = [23, 5, 9, 11, 24, 32]
// console.log(first, second, ...remaining);

/*
E X C E P T I O N  H A N D L I N G
-using try .. and catch
TRY IS USED FOR all instances where you'd receive an error. put all those lines of code in TRY.
*/

// function division(fOp) {
//     try{
//         let result = fOp / sOp
//         console.log(result);
//     }catch(e) {
//         console.log("Please try again next time");
//     }
// }
// division(4)

/*
When to use an exception handling:
- Retrieving a value from an input element
- Handling arguments
- Accessing a file
- Accessing data from a table (in a database)
- Etc..
*/

// Make use of throw
// rest parameter returns an array. when you find string you need to throw in an error.
// MAKE USE OF FOReACH TO LOOK THROUG ELEMENTS
// IF IT DOESNT RETURN A NUMBER THE PROGRAM WILL STOP.
// IF IT'S ALL NUMBERS YOU WILL GET A SUM OF ALL THE VALUES.
// args changes the string to an array.
// function addition(...args) {
//     let totalOfNumbs = 0 
//     args.forEach( item=> {
//         if(typeof item != 'number') 
//             throw new Error(`${item} is not a number`)
//         else totalOfNumbs += item
//     })
//     return totalOfNumbs
// }
// try{
//     console.log(addition(4, 8, 'Joel', 9));
// }catch(e) {
//     console.log(e.message);
// }

/*
G E T T E R  &  S E T T E R
Local storage
- .getItem(key)
- .setItem(key, value : string)
- .removeItem(key): Remove the key
- .clear(): Remove all the keys
*/

// function Person(firstName, lastName)
// this.firstName = firstName
// this.lastName = lastName
// this.getFullName = function (){
//     return " ".join(this.firstName, this.lastName)
// }
// this.setFullName = function(value) {
//     if(value) {
//         this.firstName = value
//     }
// } 


/*
P R O M I S E
-specifies two different placeholders. one for the revolve and another for reject.
- resolve only works when the argument works.
-if the arguument doesn't work it is then reject.
*/

// including a + sign in front of prompt makes sure that it uses a number instead of a string.
let myPromise = new Promise(args)
function args(resolve, reject){
    let numb1 = +prompt("Enter only a number")
    if(typeof numb1 == 'number')
        resolve(`The entered number is ${numb1}`)
        reject(`Unfortunately ${numb1} is not a number`)
}
myPromise.then(
    completed => console.log(completed),
    rejected=> console.log(rejected)
);
// alternative.
// myPromise.then(completed)=> {
//     console.log(completed);
// }

/*
let myPromise = new Promise((resolve, reject)=> {
    let numb1 = 12
    let numb2 = 2
// For division
    if(numb2 > 0 ) 
        resolve(`Result is: ${numb1 / numb2}`) 
    reject(`You can't divide ${numb1} by ${numb2}`)
})

myPromise.then(
    (correct)=>{
        console.log(correct);
    },

    // (denied)=> {
    //     console.log(denied);
    // }

// use catch as an alternative..
).catch(rejected =>{
    console.log(rejected);
})
*/
/*
F E T C H  A P I
-
*/
/*
let cardContainer = document.querySelector('[data-cards]') 
fetch('https://randomuser.me/api?results=50')
.then(data=> data.json())
.then(result=> {
    let {results} = result 
    results.forEach( people =>{
        console.log(people);
        cardContainer.innerHTML += 
        `
        <div class="card" style="width: 18rem;">
            <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
            <div class="card-body">
            <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
            <p class="card-text">Age: ${people.registered.age}</p>
        </div>
        `
    })
})
*/

/*
A S Y N C R O N O U S  F U N C T I O N
*/
// async function getData() {
//     let data = await fetch('https://randomuser.me/api?results=50')
//     return data.json()
// }
// async function display() {
//     let cardContainer = document.querySelector('[data-cards]') 
//     cardContainer.innerHTML = ''
//     let {results} = await getData()
//     results.forEach( people => {
//         cardContainer.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// }
// display()