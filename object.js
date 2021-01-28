//camel: oneTwo = ginagamit for factory
//pascal: OneTow = ...          constructor

// factory Function
// function createCircle(radius){
//     return {
//     radius,
//     draw:function(){
//         console.log('draw');
//     }
//     }
// }

// const circle1 = createCircle(1);
// console.log(circle1);


// Constructor function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('Draw');
//     }
// }

// const circle = new Circle(1);
// console.log(circle)


// //Dynamic Nature Object 


// const box = {
//     angle:1
// };
// //box{};  hindi pwedeng reset o create ng box object
//     box.size = 20;
//     box.color = 'Blue';

//     delete box.size;


// console.log(box);


// const rectangle = {
//     radius: 1,
//     draw:function(){
//         console.log('draw');
//     }
// }

// for (let key in rectangle)
//     console.log(key, rectangle[key])

// // clonning of an Object

// const another = Object.assign({}, rectangle)
// console.log(another);

// const simpleClone = {...rectangle};

// const another1 = JSON.stringify(rectangle);
// console.log(another)


const pyraId = document.getElementById('pyraId');

for(let i = 0; i < 10; i++){
    for(let k = i; k>=0;k--){
        pyraId.append(k + ' ');
    }
    let br = document.createElement('br');
        pyraId.appendChild(br)
}