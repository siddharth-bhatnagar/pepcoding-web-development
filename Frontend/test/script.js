

// const fs = require('fs');
// let file = process.argv[2];

// let data = fs.readFileSync(file, "utf-8");
// let dataArr = data.split("n");
// console.log(dataArr.length - 1);

// let char = data.split("");
// let count = 0;
// for(i of char) {
//     if(i=='n'){
//         count++;
//     }
// }

// console.log(count);

let x = {
    newObj:{
        obj2:{
            obj5:{
                one: 1,
                two: {
                    objlast: 123
                }
            }
        }
    },
    obj3:{
        obj4:{
            two:2
        }
    }
}
  
function flatten(ob) { 
    let result = {}; 
  
    for (let i in ob) { 

        if (typeof(ob[i]) == 'object') { 
            const temp = flatten(ob[i]); 
            for (const j in temp) { 
  
                result[i + '.' + j] = temp[j]; 
            } 
        }   
        else { 
            result[i] = ob[i]; 
        } 
    } 
    return result; 
}; 
  
console.log(flatten(x));
