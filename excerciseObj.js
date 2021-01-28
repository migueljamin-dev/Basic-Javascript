// street
// city
// zipCode
let address = {
     street:'a',
      city:'b',
    zipCode:'c'   
};
function showAddress(address){
   for (let key in address)
    console.log(key, address[key]);
}
showAddress(address);

//factory function
let address1 = createAddress('a','b','c');
    console.log(address1)
function createAddress(street,city,zipCode){
    return {
        street,
        city,
        zipCode
    };
}
    
//constructor function
let address2 = new Address('a','b','c');
console.log(address2)


function Address(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


//excercise 3
let address3 = new Address('a','b','c');
let address4 = new Address('a','b','c');

function Bahay(street,city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
console.log(areSame(address3,address4))

function areEqual(address3,address4){
    return address3.street === address4.street &&
            address3.city === address4.street &&
            address3.zipCode === address4.zipCode;
}

function areSame(address3,address4){
    return address3 === address4;
}


// excercise 4 

let post = new Post('a','b','c');

//etoo ng papalit sa taas ginamitan ng constructor
// {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         {author:'a',body:'b'},
//         {author:'c',body:'d'}
//     ],
//     isLive:true
// };

//this is constructor function
function Post(title,body,author){
    this.title = 'a',
    this.body = 'b',
    this.author = 'c',
    this.views = 0,
    this.comments= [],
    this.isLive = false
}
console.log(post);


//excercise 5 

let priceRanges = [
    {label: '$', tooltip:'Inexpensive',minPerPerson: 0, maxPerPerson:10},
    {label: '$$', tooltip:'Moderate',minPerPerson: 11, maxPerPerson:20},
    {label: '$$$', tooltip:'Expensive',minPerPerson: 21, maxPerPerson:30}
]

let restaurant = [
    {averagePerson:5}
]