// Array iteration methods

let arr = [1, 2, 3, 4, 5, 6];

// forEach
arr.forEach((item, index) => {
    console.log(item, index);
})

// map()

const doubled = arr.map((element, index) => {
    return element * 2;
})
console.log(doubled);

// filter()
const evens = arr.filter((element, index) => {
    return element%2===0;
})
console.log(evens);

// reduce()
const sum = arr.reduce((acc, item, index) => {
    return acc + item;
}, 0)
console.log(sum);

arr.push(-1);
console.log(arr);
// some
const hasNegativeNumber = arr.some((item) => {
    return item < 0;
})
console.log(hasNegativeNumber);

// every
const hasNegativeNumbers = arr.every((item) => {
    return item < 0;
})
console.log(hasNegativeNumbers);

// find
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
let item = objects.find((element) => {
    return element.id == 'd';
})
console.log(item);

item = objects.find((element) => {
    return element.id == 'a';
})

console.log(item);

// findIndex

itemIndex = objects.findIndex((element) => {
    return element.id == 'b';
})

console.log(itemIndex);

