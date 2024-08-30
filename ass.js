// Creating and declaring Variables
var firstName="Parimala";
let lastName="Tompala";
console.log(`FirstName ${firstName}
LastName ${lastName}`);
const age=19;
console.log(`My Age is ${age}`)
// Variable scope
var salary=50000
let worksas="Desginer";
const rent=500
console.log(`Salary=${salary}`)
console.log(`Works as=${worksas}`)
console.log(`Rent=${rent}`)

function variable()
{
var salary=50000
let worksas="Desginer";
const rent=500
var A=100
let B=200
const C=500
console.log(`Salary=${salary}`)
console.log(`Works as=${worksas}`)
console.log(`Rent=${rent}`)
console.log(`A=${A}`)
console.log(`B=${B}`)
console.log(`C=${C}`)
};
variable()
//console.log(`A=${A}`)
//console.log(`B=${B}`)
//console.log(`C=${C}`)
//Arithematic operators
var a=10
var b=20

console.log(`Addition=${a+b}`)
console.log(`Subtraction=${a-b}`)
console.log(`Mul=${a*b}`)
console.log(`Div=${a/b}`)
console.log(`Mod=${a%b}`)
console.log(`sum=${(a+b)/a}`)
//Comparison operators
console.log(`${a==b}`)
console.log(`${a!=b}`)
console.log(`${a===b}`)
console.log(`${a!==b}`)
console.log(`${a<b}`)
console.log(`${a>b}`)
console.log(`${a<=b}`)
console.log(`${a>=b}`)
//Logical operators
console.log(a<b && a<=b)
console.log(a<b || a<=b)
console.log(!(a<b && a<=b))
// Datatypes (primitive)
var num=99
var str="Siri"
var bool=true
var value=null
var value1
console.log(`${num}`)
console.log(`${str}`)
console.log(`${bool}`)
console.log(`${value}`)
console.log(`${value1}`)
//types
console.log(`${typeof num}`)
console.log(`${typeof str}`)
console.log(`${typeof bool}`)
console.log(`${typeof value1}`) 
console.log(`${typeof value}`)
//Type conversion and coercion
var f=23.4
console.log(Number(f))
let x = 20;
let y = "30";
let z = a>b;
console.log(Number(y));
console.log(String(20));
console.log(Boolean(z));
console.log(Number(true+20));
console.log(String(1.0));
console.log(String(5>6));

//.implicit coercion
 console.log(100+'10');//10010
console.log('20'*3); 
console.log(45 =='45');


 //string manipulation
let name="parimala";
let initial="tompala";
var fullName= name +''+initial;
console.log(fullName);// parimalatompala
//accesssing
let stri='Welcometojs'
console.log(stri[0]);
console.log(stri[4]);
//length
console.log(stri.length);
//substrings
console.log(stri.substring(1,6));
console.log(stri.slice(10));

//template Literals
const sum="Helloworld";
console.log(`the sum is ${sum}.`);
const str1=`vizag is a beautiful place
`;
console.log(stri);

//DECISION STATEMENTS
var age1=19;
if(age1>=18)
{
    console.log("you are eligible to write 10th board exams");

}
else if(age<=10)
{
    console.log("you are  not eligible to write 10th board exams");

}

 else{
    console.log("if you are abnormal person to write the exams with help of your juniour");

}

//switch statements
let val=3;
switch(val)
{
    case 1:
        console.log("val is 1");
         break;
    case 2:
        console.log("the val is 2");
        break;
        case 3:
            console.log("the val is 3");
            break;
            default:
                console.log("val is not 1,2 or 3");
                break;
}

//use 
//without using use
 hi=4
//with use 
//"use strict";
   // prop=90// error :for using the duplicate
/*"use strict";
 x=10;  //error:: x is not defined
console.log(x);*/
 //function declaration and call
 function details(name,age,address)
 {
    console.log(`hello, i'm ${name} and i'm ${age} years old.And my hometown is in ${address} `);
 }
 details("pravallika",10,"vizag");
 
 //passing arguments
 function college(fee,tax=0.09)
 {
    const total=fee*(1+tax);
    return total;

 }
 const totalBill=college(1000.15);
 console.log(totalBill); 

 //Using return
 function rectArea(width,height)
 {
      if(width >0 && height > 0 )
        {
return width*height;
        }
      
 }
 console.log(rectArea(14,90));
 console.log(rectArea(-3,-4)); 
  //chaining
  let add= x=>x+2;
  var mul=x=>x*2;
  var sub=x=>x-9;
  var res=sub(add(mul(90)));
  console.log(res);    //173
