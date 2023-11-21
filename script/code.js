/*
R E V I S I O N
*/

// create an array that contains 6 elements but the first 2 must be a numbers.
// NB MAKE SURE THE ELEMENT AT POSITION 4 IS IN LOWERCASE.

// element is the number of values it contains.
// index is the position but starts at 0.

let data = [
    1, 2, 'Bluey', 'pua', 'Clover', 'Meowscles'
]

// display the third index in the console.
console.log(data[3]);

// create two objects and add the objects into an array, log the objects as well. AND PUSH INTO THE ARRAY.

let person1 = {
    name: 'toehieda'
}
console.log(person1);

let person2 = {
    name: 'ebrahim'
}
console.log(person2);
// create an empty array.
let personInfo = []
personInfo.push(person1)
personInfo.push(person2)
console.log(personInfo);

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

let firstName = 'zubair'
    let state = 'late'
    if (state == 'present') {
        console.log('present');
    }else if (state == 'late') {
        console.log('late');
    }else {
    console.log('absent');
}

/*
S W I T C H  S T A T E M E N T
*/

switch (true) {
    case state == 'present':
        console.log('present')
    break;
    case state != '':
        console.log("late");
    break;
    case state != '':
        console.log("late -> Final warning");
    break;
    default:
        console.log("absent");
    break;
}

/*
M A T H  M E T H O D
- we make use of math method because it is efficient when you need to make use of numerical operators/functions
*/

let numbers = [9, 4, 2, 5, 10]
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
let size = Math.floor(numbers.length / 2)
console.log(numbers[size]);

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