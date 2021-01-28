//adding 
let number = [3];
//end
number.push(4,5,6)

//start
number.unshift(1,2)

number.splice(2,0,"a","b")

console.log(number);


// this is finding primitives
let example2 = [0,1,2,3,1];

console.log(example2.indexOf("a"));

console.log(example2.lastIndexOf(1));

console.log(example2.includes(1)); 



// this is finding references

const courses = [
    {id:1, name:'a'},
    {id:1, name:'b'}
]
    //pag sigle parameter sa function pwedeng remove () pag multiple (c,a)
    //pag wala namn param () blank closetag pag ipapasa
    const course = courses.find(c => c.name === 'a'); 
    console.log(course)


//remove elements from  array 


const removeArray = [1,2,3,4];

//remove at the end of array
// const remLast = removeArray.pop();
// console.log(removeArray)

//remove at the begin of array 
// const remFirst = removeArray.shift();
// console.log(removeArray)

//remove at the middle of array the first param is the index of array.. 
//then the first param is set for count then second is param is to remove..
//you can use multiple delete the array using the second param
const remMiddle = removeArray.splice(1,1)
console.log(removeArray)




// how to emty an array
// use let to modify the array error if use to const its because..
// const cannot same name

let empty = [1,2,3,5,6];
let newEmpty = empty;
//1st solution this is the best solution and the second solution
// empty = [];

//2nd solution
// empty.length = 0;

//3rd solution using splice
// empty.splice(0,empty.length)

//4th solution using loop but use this if your array have millions 
while(empty.length > 0)
    empty.pop();


console.log(empty);
console.log(newEmpty);


//Combining an Array 

const first = [{id:1}]; //primitive what if i change to reference object
const second = [5,6,7,8]; //primitive

// use concat method call the first then second in close ()
const combine = first.concat(second);
//to change reference use combine[array]
combine[0] = 10;



//first method ===D
// use slice method to slice the array first is base index 0 ..
//to target second is you want to display
// const slize = first.slice(1,3) // output [2, 3]

//second method
//
const slize = combine.slice(2) // output [ 3, 4, 5, 6, 7, 8 ]



console.log(combine);
console.log(slize)



//iteration example

const numberz = [1,2,3];

for(let number of numberz){
    console.log(number)
}

numberz.forEach((number)=> {
    console.log(number)
})


// Join

const joint = [1,2,3];
const space = joint.join(',');
console.log(space);

const message = 'This is my first message';
const part = message.split(' ');
console.log(part);

const combined = part.join('-');
console.log(combined);