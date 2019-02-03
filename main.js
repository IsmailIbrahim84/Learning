//Functions:
// function parametersAsFunction(func) {
//     func();
// }

// parametersAsFunction (hellowWorld);

// function hellowWorld() {
//     alert("Hello, function!!!")
    
// }
//-------------------------------------


//Anonymous function:
// var isAdult = function (age) {
//     if (age >= 18) {
//         return "Yes";
//     }

//     else
//     {
//         return "No";
//     }
// };
// alert (isAdult(19));
///------------------------------

//Auto Invoke Operator
// (function (x,y) {
// alert("Sum of x&y is"+(x+y));
// })(10,20); 
// /////////////////

// var s = "hello";
// alert(typeof(s));

//Object Constructor
//var person = new object();
// person.firstName="Ismail";
// person.lastName="Ibrahim";
// person.age="20";0
// person.fullName = function( ){
//     return (person.firstName +" "+person.lastName);
// }
//alert(person.fullName);
//Create an Object using an object constructor:
// class Person {
//     constructor(fName, lName, age) {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//         this.fullName = function () { return (this.firstName + " " + this.lastName); };
//     }
// }

// var myBrother = new Person("Ismail","Ibrahim",20);
// alert(myBrother.fullName);

// var user = {
// name:"Ismail",
// age:20,
// size : {
//     top:90,
//     middle:50
// }
// };
// alert(user.name);

//Function as an Object:
// var functionAsObject = new Function("a","b","return a+b");
// var x = functionAsObject(10,25);
// alert(x);
// ///--------------------

//Array of Objects:
var myCars = [{model:"BMW",year:2016},
{model:"Honda",year:2018}
];

for (var k=0;k<myCars.length;k++)
{
    var myC="";
    for (var cp in myCars[k])
    {
        myC = myC + myCars[k][cp];
    }
    document.write(myC+ " <br/>");
}
///-----------------------
//Java Script BOM (Browser Object Model)
// Window
//-- Document
//-- Screen
//-- Navigator
//-- History
//-- Location

console.write("Cookies Enabled: " + window.navigator.cookieEnabled+"<br/>");




///---------------------------------------------------------------------------------------------------





///-----------------------------------