// while loops 

// i= 0;
// while (i<100){
//     console.log(i);
// }



// for loops 

// for (let num = 0; num <= 100; num++){

//     console.log(num)

// }

// data types

let age = 18;
let fullName = {first: 'Karim', last:'Gilani'}; // object
let  truth = true;
let groceries = ['apple','banana', 'oranges']; // array
let random; // undefined
let nothing = null; // null

// for (grocery in groceries ){
//     console.log(grocery.te)


// }

// strings in JS

// let fruit = 'banana';
// let name = '\nKarim';
// console.log(fruit + name);
// console.log(fruit.length);
// console.log(fruit.indexOf('n'));
// console.log(fruit.slice(2,6));
// fruit = fruit.replace('ban','123');
// console.log(fruit);
// fruit = fruit.replace('123','ban');
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// fruit = fruit.split('');
// for (f in fruit){
//     console.log(f);
// }

//Arrays

let fruits = ['banana', 'apple', 'orange', 'cherry'];

console.log(fruits[1]);
fruits[0]= 'pear';
console.log(fruits);

for (f in fruits){
    console.log(fruits[f]);
}

let standard = 9;
console.log(standard);

// array methods
console.log(fruits);
console.log(fruits.toString()); // converts to string
console.log(fruits.join('-')); // joins array with any character you want
console.log(fruits.pop()); // deletes the last element from an array
console.log(fruits)
fruits.push('black berries'); // adds one more element to aray
console.log(fruits);
fruits.push('new fruit');
console.log(fruits)
fruits.shift(); // deletes the first element from array
console.log(fruits);
fruits.unshift('kiwi'); // adds the first element to array
console.log(fruits);

let vegetables = ['tomato', 'potato', 'cucumber', 'dhaniya']

let newArray = fruits.concat(vegetables) // this will combine two arrays into one
console.log(newArray)
console.log(newArray.slice(1,4)) // cuts down the array from element to element you want
console.log(newArray.reverse())// reverse the position of arrays if combined
console.log(newArray.sort())


let newNumbers = [23, 45, 67, 18, 120, 43, 75]
console.log(newNumbers.sort(function(a,b) {return a-b}))
console.log(newNumbers.sort(function(a,b) {return b-a}))

let emptyarray = []

for(let value = 0; value<10; value++){
  emptyarray.push(value)
}

console.log(emptyarray)

//objects in JS

let student = {
    firstname:'Karim', 
    lastname:'Gilani', 
    age:23, 
    height:'5.11ft',
    studentInfo : function info() {
        console.log("i'm running")
    }
  
}

console.log(student.firstname)
console.log(student.lastname)

student.age++
console.log(student.age)
student.studentInfo()

//if else JS

// age = prompt('What is your age?')

// if (age>17 && age<36){
//     status= 'target audience'
//     console.log(status)
// }
// else{
//     status = 'Not my audience'
//     console.log(status)
// }

// switch case JS

  day = prompt("What's the day today?")
 switch(day){

    case 'Friday':
        console.log("It's weekend")
        break



    case 'Saturday':
        console.log("It's weekend")
        break

    case 'Sunday':
        console.log("It's weekend")
        break
    default:
        console.log("It's weekday")
 }

