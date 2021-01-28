




// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input){
//     if(typeof input !== 'number'){
//        return 'Not a Number';
//     }
//     if((input % 3 === 0)&&(input % 5 === 0)){
//         return "fizzBuzz";
//     }
//     if(input % 3 === 0){
//        return "Fizz";
//     }
//     if(input % 5 === 0){
//         return "Buzz";
//     }
//    return input;


// }

//  checkSpeed(80)


// function checkSpeed(speed){
//     const speedLimit = 70;
//     const addPoints = 5

//     if(speed < speedLimit + addPoints){
//     console.log('ok');
//     return;
//     }
//        const total = Math.floor((speed - speedLimit) / addPoints) 
//        if(total >= 12)
//            console.log('Suspended')
       
//        else
//            console.log('total:', total)
       
    
    
// }

// console.log(showNumbers(10));

// function showNumbers(limit){
//     for(i=0; i<limit; i++){
   

//     const message = (i% 2 === 0) ? 'Even' : 'Odd';
//     console.log(message, i)

//     }
// }

// const array = [0,1,3];
// console.log(countTruthy(array));
// function countTruthy(array){
//     let count = 0;
//     for (let value of array)
//         if(value)
//         count++;
//         return count;
// }

// console.log(sum(10));


// function sum(limit){
//     let sum=0;

//      for(i=0;i<=limit;i++)
//         if(i % 3 === 0 || i % 5 === 0)
//             sum += i;

//     return sum;
   
// }

// const marks = [80,80,50];

//average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: a
// console.log(calculateGrade(marks))

// function calculateGrade(marks){
//    let average =  calculateAverage(marks)
//         if (average < 60) return 'F'; 
//         if (average < 70) return 'd'; 
//         if (average <80) return 'c'; 
//         if (average < 90) return 'b'; 
//         return 'A';

// }


// function calculateAverage(array){
//     let score = 0;

//     for(let mark of array)
//        score += mark;
//     return score / marks.length;
// }

// showStar(10);

// function showStar(rows){
//    for(let row=1; row <= rows; row++){
//     let pattern = '';
//     for(let i=0;i<row; i++ )
//         pattern += '*';
//         console.log(pattern);
//     }

// }


// const output = fizzBuzz('awe')
// console.log(output);

// function fizzBuzz(input){
    
//     if((input % 3 === 0 )&& (input % 5 === 0)){
//         return 'FizzBuss';
//     }
//     if(input % 3 === 0){
//         return 'Fizz';
//     }
//     if(input % 5 === 0){
//         return 'Buzz'
//     }
//     if(typeof input !== 'Not a number'){
//         return 'not number';

//     }
//     return input
// }

// seeNumber(19);

// function seeNumber(val){
//     for(let i = 0;i<val;i++){

   

//     const message =  (i % 2 === 0) ? 'Even' : 'Odd';
//         console.log(message, i)
//     }
// }



// function row(rows){
//     for(let i=0; i<=rows; i++){
//         let pattern = '';
//         for(let j=0; j<i; j++)
//             pattern += '*'
//             console.log(pattern)

//     }
    

// }

// row(5)


// for(let x='*';x.length < 10; x+='*'){
//     console.log(x)
// }

function decimalToBinary(val){
    let bin ="";
    while(val > 0){
        bin=val%2 + bin;
        val = Math.floor(val / 2);
    }
    return bin;
}

console.log(decimalToBinary(17))


// function decToBin(val){
//     let remainder=0;

//     for(let i=1; i>val; i++){
//        val /= 2;
//        remainder = val % 2;
      
//     }
//     console.log(remainder);


    
// }

// console.log(decToBin(20));


function addNumber(num1,num2){
    let total =  num1 + num2;
    
    for(let i=0;i<10;i++){
        console.log('count', i)
        for(total = i; total<10; total += i)
        console.log(total)    
    }
           
}

console.log(addNumber(9,2))


function primeNumber(number){
    for(let i=2;i <= number/i;i++){
        console.log(i + " X " + number);
            while(number % i === 0){
                number=number/i;
                console.log(i);
            }
    }
    if(number > 1) console.log(number);

}

primeNumber(50);


function sqrt(number){
    var start = number;
    var error = 0.00001;
    while((start - number/start) > error) {
    start = (start + number/start)/2;
   
    }
    return start;
    }
 var result = sqrt(100);
    console.log('final result = ' + result);