//1.do the below programs  in annoymous functions & iife
//A.print odd numbers in an array
//using IIFE function
(function(num) {
    let element = []
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) { ///conditions
            element.push(i)

        }
        console.log(element);
    }
})(30);
///***********output ************
// [
//     1, 3, 5, 7, 9, 11,
//     13, 15, 17, 19, 21, 23,
//     25, 27, 29
// ]
//using annoymous functions
let Oddsdata = function(num) {
    let element = []
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) { ///conditions
            element.push(i)

        }
        console.log(element);
    }
}
Oddsdata(30);
//************output********* */
// [
//     1, 3, 5, 7, 9, 11,
//     13, 15, 17, 19, 21, 23,
//     25, 27, 29
// ]
//****************************/
//b.convert all the strings to the title caps in string array
//using annoymous functions


let titleCase = function(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}


console.log([titleCase("hi amar!")]);
console.log([titleCase("how are you?")]);
//output:
['Hi Amar!']
['How Are You?']

//c.sum of all numbers in an array
//using annoymous functions
let calculateSum = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// try it
console.log(calculateSum([1, 2, 3, 4]));

//********output*********/
//10///

//d.Return all the prime numbers in an array
const newArray = [1, 3, 2, 5, 10];
const isPrime = function(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};


const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);


//*********output******* */
//[ 3, 2, 5 ]
//E.Return all the palindromes in an array 
const list = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = function(el) {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
const findPalindrome = function(list) {
    return list.filter(el => isPalindrome(el));
};
console.log(findPalindrome(list));
//***********output******** */
//[ 12321, 'did' ]
//G. remove duplicates from an array
var arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"
];

let removeDuplicates = function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) == index);
}

console.log(removeDuplicates(arr));
//////***********output******* */
//[ 'apple', 'mango', 'orange' ]

//////////*****************************/
//2.do the below programs  in arrow function
//A.print odd numbers in an array

//using arrow functions
let Odddata = (num) => {
    let element = []
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) { ///conditions
            element.push(i)

        }
        console.log(element);
    }
}
Oddsdata(30);
//************output********* */
// [
//     1, 3, 5, 7, 9, 11,
//     13, 15, 17, 19, 21, 23,
//     25, 27, 29
// ]
//****************************/
//b.convert allthe strings to the title caps in string array
//using arrow functions


let title2Case = (str) => {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}


console.log([title2Case("hi amar!")]);
console.log([title2Case("how are you?")]);
//output:
['Hi Amar!']
['How Are You?']

//c.sum of all numbers in an array
//using arrow functions
let calculateSum2 = (arr) => {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// try it
console.log(calculateSum2([1, 2, 3, 4]));

//********output*********/
//10

//D. return all the prime number in an array
const newArray2 = [1, 3, 2, 5, 10];
const isPrimes = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};


const myPrimeArrays = newArray2.filter(element => isPrimes(element));
console.log(myPrimeArrays);
//***********output******** */
//[ 3, 2, 5 ]
//E.Return all the palindromes in an array 
const list2 = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome2 = el => {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i] === str[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
};
const findPalindrome2 = list2 => {
    return list2.filter(el => isPalindrome2(el));
};
console.log(findPalindrome2(list2));
//*************output************ */
//[ 12321, 'did' ]
