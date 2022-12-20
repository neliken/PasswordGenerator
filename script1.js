// // let map = new Map(); // collections of key-value pairs

// // map.set('name', 'Alex');
// // map.set('name', 'Alex');
// // map.set('age', '2');

// // console.log(map);
// // console.log(map.size);
// // console.log(typeof map);

// // let set = new Set([1, 1, 2, 3, 4, 4]); // collections of unique values
// // let a = {"name": "1"};
// // // set.add(a);
// // set.add(a);
// // set.add("1");
// // set.add(1);
// // set.add("2");
// // set.add("3");

// // // console.log(set.has("3"));
// // // set.delete("3");

// // console.log(set);
// // console.log(set.size);
// // console.log(typeof set);

// // obj = Object.create(null) // Creates an object that doesn't inherit anything.

// // var obj = {} // Creates an object that inherits the properties and methods from Object.

// // // console.log(Object.create(null) == {})

// // const numbers = [45, 4, 9, 16, 25];

// // for (let x in numbers) {
// // //     console.log(x);
// // // }
// //
// let nums = [3, 2, 4, 3];
// let target = 6;

// var twoSum = function(nums, target) {
//    let set = new Set();
//    for(let i=0;i < nums.length; i++){
//     for(let j=i+1;j < nums.length; j++){
//         if(nums[i] +nums[j] == target)
//             set.add([i, j]);
//      }
//     }
//    return set;
// };


var twoSum = function (nums, target) {
    let map = new Map();
    let pair = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const result = target - num; // 6 - 3 = 3

        if (map[result] != null) {
            pair = [...pair, [map[result], i]];
        }
        else {
            map[num] = i;
        }
    }
    return pair;
};

// // twoSum(nums, target);
// console.log(twoSum(nums, target))

// //
// // let arr = [32, 33, 45, 7];
// //
// // const filtredResult = arr.filter( el => {
// //     return el >= 33;
// // })
// //
// // console.log(filtredResult);
// //
// // const findResult = arr.find( el => {
// //     return el >= 33;
// // })
// //
// // console.log(findResult);
// //
// // const reduceResult = arr.reduce( (total, el)=> {
// //     return total + el;
// // })
// //
// // console.log(reduceResult);
// //
// // const mapResult = arr.map( el => {
// //     return el * 2;
// // })
// //
// // console.log(mapResult);
// //
// // console.log(arr.indexOf(33));
// x = '121';
var isPalindrome = function(x) {
    let len = x.length;
    for(let i = 0; i < len/2; i++) {
        if(x[i] !== x[len-i-1]) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome('-121'));