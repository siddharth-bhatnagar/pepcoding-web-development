// let - block scope, cannot be redeclared but can be reassigned.
// var - functional scope, can be redeclared as well as reassigned.
// const - block scope, cannot be redeclared or reassigned.


// const a = 10;
// const a = 20;

// console.log(a);

// let a = 20;
// let a = 10;
// console.log(a);

// var a = 20;
// var a = 10;
// console.log(a);

// let a = 10;
// {
//     let a = 20;
//     console.log(a);
//     {
//         let a = 30;
//         console.log(a);
//     }
// }

// Arrays 

let arr = [];
arr[0] = 1;
arr.push(2);
arr[2] = 3;
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);

let arr1 = [1,2,3,4,5]
arr1.pop();
console.log(arr1);

arr[100] = 25;
console.log(arr);
arr.pop();
console.log(arr);

// creating an array of fixed size
let arr2 = new Array(4);


