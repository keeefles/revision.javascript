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
*/

// let firstName = 'zubair'
//     if(firstName) {
//         console.log("present");
//     }else {
//         console.log("absent");
//     }

let firstName = 'zubair'
    let state = 'late'
    if (state == 'present') {
        console.log('present');
    }else if (state == 'late') {
        console.log('late');
    }else {
    console.log('absent');
}