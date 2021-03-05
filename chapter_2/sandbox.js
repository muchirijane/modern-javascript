//
const user = new Object();
user.firstName = "Tracy";
user.lastName = "Muthoni";

console.log(user, user.firstName);

const person ={
  name: 'Tracy',
  job: 'Programmer',
  age:25,
}

console.log(person, person.age, person['job']);

let a = 25;
let b;
b = a;
console.log(a,b)
a= 40;
console.log(a,b);


var c = {greeting: 'Hey!'}
var d;

d = c;
console.log(c,d);

c.greeting = 'Halo!!'
console.log(c,d)
d.greeting = 'Sasa!!'

console.log(c,d)

let arr = [
  1,
  "Hello",
  {premiumUser:10},
  function(user){
    return`How many premium users ${user}`
  }
  ];
  
  console.log(arr[3](arr[2].premiumUser));
  
 ( function (name,job,language='en'){
    console.log (name,job,language);
  })('Tracy', 'Swe', 'English ');
  
  
  function newUser (username){
    return function(greet){
      console.log(`${username} ${greet}`);
    }
  }
  
  let currentResult = newUser('Tracy');
  currentResult('Welcome back again!!');
  
 function isAnAdult (age){
   return function (name){
     if(age => 18 ){
       console.log(`Hey ${name} you can drive but you have to be 21 yrs to drink !!`);
     }
     
     if(age >= 18 && age >= 21){
       console.log (`Yeah, ${name} you are legal enough to drink 🍻. But don't drink and drive. `);
     }
   }
 }
 
 let jane = isAnAdult(18);
 let tracy = isAnAdult(21);
 
 tracy ('Tracy');
 jane('Jane');
