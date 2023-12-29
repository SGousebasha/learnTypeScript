"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var msg = "welcome back";
console.log(msg);
var x = 10;
var y = 20;
var title = "hello there";
// Variable types
// 1) boolean
// 2) number
// 3) string
var isBeginner = true;
var total = 10;
var name = "Gouse";
// template strings
var sentance = "My name is ".concat(name, "\ni am a ").concat(isBeginner, " in typeScript.");
console.log(sentance);
// sub Types
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// sysntax for defining a list in ts
var list1 = [1, 2, 34, 5];
var list2 = [1, 2, 34, 5];
// if we want to have an array with mutiple types then we have to go with touple type
var person = ["Gouse", 16];
var Color;
(function (Color) {
    Color[Color["RED"] = 5] = "RED";
    Color[Color["GREEN"] = 6] = "GREEN";
    Color[Color["BLUE"] = 7] = "BLUE";
})(Color || (Color = {}));
;
var c = Color.BLUE;
console.log(c);
// if your are not the data type that your receing then use type "any"
var myVariable = 10;
myVariable = true;
myVariable = "Hey this is a string";
// there is a type called unknow
// which is used when we are not sure about the type of data
// that we are going to get
// note: type Assersion is similar to type casting in other languages
var s = myVariable.toUpperCase();
console.log(s);
// type infrance and union type
// multi types
var multiType;
multiType = 10;
multiType = "Gouse";
// funcitons
function add(a, b) {
    if (b)
        return a + b;
    return a;
}
// let ans:number = add(10,20);
var ans = add(10);
console.log(ans);
// add(10,'23')
// optinal paramenter
// in function defination if we add "?" at the right of the parameter it will become optional
// note: optional paramenters should after required paramenter
// default patamenter
// in function defination if we add "=" at the right of the parameter and give a value then it will become 
// default parameter

//gouse
