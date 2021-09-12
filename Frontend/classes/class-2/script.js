// let obj = {
//     1: 2,
//     2: 3,
//     3: 4,
//     'abc': {
//         'abc': "1234"
//     }
// };

// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

let input1 = [
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
];

function rainDance(arr) {
    arr = arr.map((data, index)=> {
        let sum = 0;
        for(i in data.rainfall){
            sum+=data.rainfall[i];
        }
        let avg = sum/data.rainfall.length;
        return(
            {
                name: data.name,
                avgRainfall: avg
            }
        );
    });

    return arr;
}

rainDance(input1);
console.log(input1);