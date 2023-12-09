export{}
let msg = "welcome back";
console.log(msg);
let x = 10;
let y = 20;

const title = "hello there";

// Variable types

// 1) boolean
// 2) number
// 3) string

let isBeginner:boolean = true;
let total:number = 10;
let name:string = "Gouse";

// template strings

let sentance:string = `My name is ${name}
i am a ${isBeginner} in typeScript.`;

console.log(sentance);

// sub Types
let n:null = null;
let u:undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// sysntax for defining a list in ts

let list1: number[] = [1,2,34,5];
let list2: Array<number> = [1,2,34,5];

// if we want to have an array with mutiple types then we have to go with touple type
let person: [string,number] = ["Gouse",16];

enum Color {RED=5,GREEN,BLUE};

let c:Color = Color.BLUE;
console.log(c);

// if your are not the data type that your receing then use type "any"
let myVariable:unknown = 10;
myVariable = true;
myVariable = "Hey this is a string";


// there is a type called unknow
// which is used when we are not sure about the type of data
// that we are going to get
// note: type Assersion is similar to type casting in other languages

let s:string = (myVariable as String).toUpperCase();
console.log(s);

// type infrance and union type
// multi types
let multiType: number | string;
multiType = 10;
multiType = "Gouse";

// funcitons

function add(a:number,b?:number):number {
    if(b) return a+b;
    return a;
}

// let ans:number = add(10,20);
let ans:number = add(10);
console.log(ans);

// add(10,'23')
// optinal paramenter
// in function defination if we add "?" at the right of the parameter it will become optional
// note: optional paramenters should after required paramenter

// default patamenter
// in function defination if we add "=" at the right of the parameter and give a value then it will become 
// default parameter

// interface










  









