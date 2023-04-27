//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and apply the algorithm to assign it the corresponding temperature in Fahrenheit.
function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }

// Reverse a String
// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".
//solution-1
function reverseString(str) {
    let revstr=''
    for(let i=str.length-1;i>=0;i--){
         revstr+=str[i]
    }
    return revstr;
  }
//solution-2
function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }
//   Return the factorial of the provided integer.

//   If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
  
//   Factorials are often represented with the shorthand notation n!
  
//   For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
  
//   Only integers greater than or equal to zero will be supplied to the function.

//Solution-1
function factorialize(num) {
    //head-recursive method
    if(num===0)return 1;
    return num*factorialize(num-1);
  //using trinary operator
  // return num===0 ?  1 :  num*factorialize(num-1);
  }
  //solution-2
  function factorialize(num) {
    //you can fill array with any element
    const final=new Array(num).fill(4).reduce((element,_,index)=>element*(index+1),1);
  
   return num<0?1:final;
  }
  //solution-3
  function factorialize(num) {
  let prod=1;
  for(let i=2;i<=num;i++){
    prod*=i;
  }
  return prod;
  }
  //solution-4
  function factorialize(num, fact=1) {
    //tail-recursive method - optimize memory
    if(num===0) return fact;
    return factorialize(num-1, fact*num)
  }

//Return the length of the longest word in a given string

//solution-1
function findLongestWordLength(str) {
  let wordsArr=str.split(' '),longest=0;
  //we can use for-loop also
  wordsArr.forEach( ele=>{
      ele.length>longest?longest=ele.length :null
  })
  return longest;
}
//solution-2
function findLongestWordLength(str) {
    let wordsArr=str.split(' ');
   return wordsArr.reduce((acc,word)=>Math.max(acc, word.length),0)
  }
//solution-3
function findLongestWordLength(str) {
let wordsArr=str.split(' ');
return Math.max(...wordsArr.map(w=>w.length))
}
// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//solution-1
// function largestOfFour(arr) {
//   ///without using Math.max method
//   return arr.map(e=>e.reduce((prev,cur)=>{return cur>prev?cur:prev}))
     
// }

// function largestOfFour(arr) {
//   return arr.map(Function.prototype.apply.bind(Math.max, null))
     
// }
function largestOfFour(arr, final=[]) {
    return !arr.length? final: largestOfFour(arr.slice(1), final.concat(Math.max(...arr[0])))    
  }

//Check if a string (first argument, str) ends with the given target string (second argument, target).
// function confirmEnding(str, target) {
//   let len=str.length-target.length;
//   return str.substring(len)===target
// }
// function confirmEnding(str, target) {
//   return str.slice(-target.length)===target
// }
function confirmEnding(str, target) {
    let re=new RegExp(target+'$',"i") 
    return re.test(str);
  }  



  // function repeatStringNumTimes(str, num) {
//   //don't use " str.repeat(num) "
//   let strstr='';
//     if(num<0) return ''
//     else{
//         while(num>0){
//     strstr+=str;
//     num--;
//   }
//     }

//   return strstr;
// }

// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
    if(num<1) return ''
    return str+repeatStringNumTimes(str, num-1)
  }

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if(str.length>num){
        return str.substr(0,num)+'...'
    }
    return str;
  }
//Finders- Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
// function findElement(arr, func) {
//   return arr.find(func); 
// }

// function findElement(arr, func) {
//   return arr[arr.map(func).indexOf(true)]
// }
// function findElement(arr, func) {
//   if(arr.length>0 && !func(arr[0])){
//   return findElement(arr.slice(1), func)
//   }
//   return arr[0]; 
// }

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
   
      if (func(arr[i])) {
        return arr[i];
      }
    }
  
    return undefined;
  }
  //Eg: findElement([1, 2, 3, 4], num => num % 2 === 0);

  //Boo Who
  //Check if a value is classified as a boolean primitive. Return true or false.

  function booWho(bool) {
    return typeof bool==='boolean'
  }


  //Title case a sentence
  //Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

  // function titleCase(str) {
//   // return str.split(' ').map(e=>e[0].toUpperCase()+e.slice(1).toLowerCase()).join(' ')

//   return str.toLowerCase().split(' ').map(e=>e.replace(e.charAt(0), e.charAt(0).toUpperCase())).join(' ');
// }

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, e=>e.toUpperCase())
  }
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }


  // function frankenSplice(arr1, arr2, n) {
//   let copy1=[...arr1], copy2=arr2.slice();
//   //return copy2.splice(n, ...copy1)
//   for(let k in copy1){
//      copy2.splice(n,0,copy1[k]);
//      n++;
//   }
//   return copy2;
// }


// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//   let copy1=[...arr1], copy2=arr2.slice();
//   //return copy2.splice(n, ...copy1)
//   for(let k in copy1){
//      copy2.splice(n,0,copy1[k]);
//      n++;
//   }
//   return copy2;
// }

function frankenSplice(arr1, arr2, n) {
    let copy2=arr2.slice();
       copy2.splice(n,0,...arr1);
       return copy2;
  }
  function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  }
  //Falsy Bouncer
//   Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// function bouncer(arr) {
//   return arr.filter(e=> Boolean(e))
//   //can write like this : arr.filter(Boolean) - this takes boolean function which accepts single parameter, gives true or false
// }

function bouncer(arr) {
    let newArr=[];
    for(let i=0;i<arr.length;i++){
      Boolean(arr[i]) ?newArr.push(arr[i]): null;
    }
    console.log(newArr)
    return newArr;
  }
  //Where do I belong
//   Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
//   The returned value should be a number.

// function getIndexToIns(arr, num) {
//   arr.sort((a,b)=>a-b);
// for(let i=0;i<arr.length;i++){
//      if(arr[i]>=num) return i;
// }
//  return arr.length;
// }


// function getIndexToIns(arr, num) {
//  //return arr.concat(num).sort((a,b)=>a-b).indexOf(num)
//  return arr.filter(ele=> ele<num).length
// }
function getIndexToIns(arr, num) {
    arr.sort((a,b)=>a-b);
   let ind=arr.findIndex(ele => (ele>=num));
   return ind===-1 ?arr.length :ind
  }
  //Mutations
  //Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
  function mutation(arr) {
    return arr[1].toLowerCase().split('').every(
      ele=>{
       return arr[0].toLowerCase().indexOf(ele)!==-1
      }
    )
  }
  function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
//Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// function chunkArrayInGroups(arr, size) {
//   let res=[],i=0;
//   while(i<arr.length){
//      res.push(arr.slice(i,i+size))
//     i+=size;
//   }
//   return res;
// }

function chunkArrayInGroups(arr, size) {
    let res=[];
    while(arr.length>0){
       res.push(arr.splice(0,size))
    }
    return res;
  }
