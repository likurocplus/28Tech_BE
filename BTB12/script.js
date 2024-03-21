import { average as avg } from "./average.js";
console.log(avg(1,2,3,4,5,6));

// //JS Object
var objectJS = {
    mem3: "Luong Vo Khoi Hung",
    mem4: "Luong Vo My Ngan",
    mem5: "Luong Vo Viet Khanh"
};
// //JSON Object
var objectJSON = `{
        "mem3": "Luong Vo Khoi Hung",
        "mem4": "Luong Vo My Ngan",
        "mem5": "Luong Vo Viet Khanh"
    }
`
// //ObjectJSON -> ObjectJS
var obJS = JSON.parse(objectJSON);
console.log(obJS)

//ObjectJS -> ObjectJSON
var obJSON = JSON.stringify(objectJS);
console.log(obJSON)


// //JS Number
// var num = 10;
// //JSON Number
// var numJSON = `10`;
// //numberJSON -> numbertJS
// var numJS = JSON.parse(numJSON);
// console.log(numJS)
// //numberJS -> numberJSON
// var numnJSON = JSON.stringify(num);
// console.log(typeof numnJSON)


var arrJSON = `{
    "animals": [
       {
             "type": "dog",
             "name": "Bernie",
             "age": 3
       },
       {
             "type": "cat",
             "name": "Draco",
             "age": 2
       }
    ]
 }`
 console.log(JSON.parse(arrJSON));
