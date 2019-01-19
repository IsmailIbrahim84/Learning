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
var isAdult = function (age) {
    if (age >= 18) {
        return "Yes";
    }

    else
    {
        return "No";
    }
};
alert (isAdult(19));