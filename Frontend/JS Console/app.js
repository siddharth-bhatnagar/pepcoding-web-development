// Traditional bind

let name = {
    firstname: "Siddharth",
    lastname: "Bhatnagar"
}

// function printInfo(city, state, country) {
//     console.log(this.firstname, this.lastname, city, state, country);
// }

// let printMyInfo = printInfo.bind(name, "Agra", "Uttar Pradesh");
// printMyInfo("India");

// Polyfill -- A piece of code or plugin which provides a functionality which is not provided by the native environment. 
// Eg -- Older browsers don't support ES6 bind methods in JS, so we can write substitute functions which behave exactly the same
// Polyfill for bind

Function.prototype.myBind = function (context, ...args) {
    let ref = this;
    return function (...args2) {
        ref.apply(context, [...args, ...args2]);
    }
}

function printInfo(city, state, country) {
    console.log(this.firstname, this.lastname, city, state, country);
}

let printMyInfo = printInfo.myBind(name, "Agra", "UP");
printMyInfo("India");

// Function currying is a technique using which we can fix one of the paramters of a function and create mupltiple functions out of it
// Can be implemented using bind() and also using closures

function multiply(x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

function multiply2(x) {
    return function (y) {
        console.log(x * y);
    }
}

multiplyByThree = multiply2(3);
multiplyByThree(5);

// async vs defer
// order of exec of scripts cant be determined using async attribute, not wise to use when one script is dependent on other
// Mostly wise to use defer as it offers the best of both worlds.