
// 1. Given a String Reverse each word in a sentence
        // let name = 'Rohan bhai kese ho';
        // let arr = name.split([' ']).map(element => {
        //         return element.split(['']).reverse().join('');
        // }).join(' ')
        // console.log(arr)

// 2. How to check an object is array or not
        // let obj = []
        // Array.isArray(obj) ? console.log('true') : console.log('false');

// 3. How to empty an array without reseting it and running any loop
        // let arr = [1, 2, 3, 4];
        // arr.length = 0;
        // console.log(arr)

// 4. How would you check a number is an Integer
        // function checkNum(num) {
        //         return typeof (num) === 'number';
        // }
        // OR
        // function checkNum(num) {
        //         if (num % 1 === 0) {
        //                 return true;
        //         }
        //         return false;
        // }
        // console.log(checkNum(17));

// 5. Duplicate Array
        // function duplicateArray(arr){
        //         arr.forEach(element => {
        //            arr.push(element);     
        //         });
        //         return arr;
        // }

        // OR

        // function duplicateArray(arr){
        //         return arr.concat(arr);
        // }
        // console.log(duplicateArray([1, 2, 3, 4, 5]));

// 6. Write a function to reverse a number
        // function reverseNum(num){
        //         return Number(num.toString().split('').reverse().join(''));
        // }
        // OR
        // function reverseNum(num){
        //         let result = 0;
        //         while(num > 0){
        //                 var a = num%10;
        //                 result =  result * 10 + a;
        //                 num = Math.floor(num/10);
        //         }
        //         return result;
        // }
        // console.log(reverseNum(1234567890))

// 7. Function to check palindrome or not
        // function checkPalindrome(word){
        //         return word.split('').reverse().join('') === word;
        // }
        // console.log(checkPalindrome('ama'));

// 8. Function return passed string in alphabetical orders
        // function returnAplhabetically(word){
        //         return  word.split('').sort().join('')
        // }

        // console.log(returnAplhabetically("nmlkjihgfedcba"));

// 9. Function that takes a string and convert each word firstletter as uppercase
        // function convertUpperCase(word){
        //         return word.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
        // }
        // console.log(convertUpperCase('hello my name is rohan rana'))

// 10. Function to get no. of occurences of each word in a string
        // function findOccurences(word){
        //         let obj =  {}
        //         word.split('').forEach(e=> {
        //                 if(obj.hasOwnProperty(e)) obj[e]++;
                        
        //                 else obj[e] = 1;
        //         })
        //         return obj;
        // }
        // console.log(findOccurences('harsh'))

// 11. Loop an array and add all members of it
        // function addAll(arr){
        //         let sum = 0;
        //         arr.forEach(e => sum += e);
        //         return sum;
        // }
        // console.log(addAll([1,2,3,4,5]))

// 12. Loop an array and remove the objects which do not have gender's value male
        // function saveMale(arr){
        //         return arr.filter(elem=>elem['gender'] !== 'female');
        // }
        // OR
        // function saveMale(arr){
        //         var count = 0;
        //         arr.forEach(element => {
        //                 if(element.gender === 'female') count++;
        //         })
        //         for(var i=1; i<=count; i++){
        //                 for(var j=0; j<arr.length;  j++){
        //                         if(arr[j].gender === 'female'){
        //                                 arr.splice(j,1);
        //                         }
        //                 }
        //         }
        //         return arr;
        // }
        // console.log(saveMale([
        //         {name:'rohan', gender:'male'},
        //         {name:'yashika', gender:'female'},
        //         {name:'anuj', gender:'male'},
        //         {name:'palki', gender:'female'},
        // ]))

// 13. JavaScript function to clone an array
        // function cloneArray(arr){
        //         return [...arr] 
        // }
        // let newArr = cloneArray([1, 2, 3, 4, 5])
        // console.log(newArr);

// 14. Function that accept an argument as args and return data type
        // function typeTeller(input){
        //         return typeof(input);
        // }
        // console.log(typeTeller())
        // console.log(typeTeller(12))
        // console.log(typeTeller([]))
        // console.log(typeTeller(()=>{}))

// 15. Write a javaScript function to get the first element of an array. Passing a parameter n will return the first 'n' elements of an array.
        // function returnElements(arr, n){
        //         return arr.splice(0, n)
        // }
        // console.log(returnElements([1, 2, 3, 4, 5], 3))

// 15. Write a javaScript function to get the last elements of an array. Passing a parameter n will return the last 'n' elements of an array.
        // function returnElements(arr, n=1){
        //         return arr.splice(-n)
        // }
        // console.log(returnElements([1, 2, 3, 4, 5], 2))

// 16. Function to return most frequent item of an array
        // function arrayShuffle(arr){
        //         let totalShuffleArea = arr.length;

        //         while(totalShuffleArea > 0){
        //                 totalShuffleArea--;
        //                 let randomNo = Math.floor(Math.random()*arr.length)
        //                 var temp = arr[totalShuffleArea];
        //                 arr[totalShuffleArea] = arr[randomNo];
        //                 arr[randomNo] = temp;
        //         }
        //         return arr;
        // }
        // console.log(arrayShuffle([1, 2, 3, 4, 5, 6]))

// 17. Function to write array union
        // function arrayUnion(arr1, arr2){
        //         return [...new Set(arr1.concat(arr2))];
        // }
        // console.log(arrayUnion([1, 2, 3], [2, 3, 4, 5, 6]))

// 18. Move all Zeros to end
        // function shiftZeros(arr){
        //         let count = 0;
        //         let temp = [];
        //         arr.forEach(e=>{
        //                 if(e===0) count++;
        //                 else temp.push(e)
        //         })
        //         for(let i=0; i<count; i++){
        //                 temp.push(0);
        //         }
        //         return temp;
        // }
        // OR
        // function shiftZeros(arr){
        //         let c = 0;
        //         const n = arr.length;
        //         for(let i=0; i<n; i++){
        //                 if(arr[i]!==0){
        //                         [arr[i], arr[c]] = [arr[c], arr[i]]
        //                         c++;
        //                 }
        //         }
        //         return arr;
        // }
        // console.log(shiftZeros([0, 1, 2, 0, 3 , 0, 5, 0]))

// 19. Check if sum is present in pair in array
        // function checkPairSum(arr, sum){
        //         const n = arr.length;
        //         for(let i=0; i<n-1; i++){
        //                 if (arr[i] + arr[i+1] === sum) return true;
        //         }
        //         return false;
        // }
        // console.log(checkPairSum([2, 2, 3, 4, 5], 10))

// 20. Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested       properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
        // function returnNestedObj(obj){
        //         return obj?.a?.b;
        // }

        // console.log(returnNestedObj({a:{b:{c:3}}}))

// 21. Write a function that takes an object (a) as argument. Return the sum of all object values.
        // function returnObjSum(obj){
        //         return Object.values(obj).reduce((a,b)=>a+b);
        // }
        // console.log(returnObjSum({a:1,b:2,c:3}))

// 22. Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'
        // function removeObjProperty(obj){
        //         delete(obj.b);
        //         return obj;
        // }
        // console.log(removeObjProperty({ e: 6, f: 4, b: 5, a: 3 }))

// 23. Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'
        // function changeB(x, y){
        //         const {b, ...rest} = y;
        //         return {...x, ...y, d:y.b};
        // }
        // console.log(changeB({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }))
        // console.log(changeB({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }))

// 24. Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
        // function multiplyValue(x, y){
        //         Object.keys(x).forEach(k=>{
        //                 x[k] = x[k] * y;
        //         })
        //         return x;
        // }
        // console.log(multiplyValue({w:15,x:22,y:13},6))

/*-------------------------[DATES]-------------------------*/

// 25. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.
        // function checkEqualDates(x, y){
        //         return x.getTime() === y.getTime();
        // }
        // console.log(checkEqualDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
        // console.log(checkEqualDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// 26. Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.
        // function daysDifference(x, y){
        //         let timeDiff = Math.abs(x.getTime() - y.getTime());
        //         let days  = timeDiff/ (1000 * 60 * 60 * 24);
        //         return days;
        // }
        // console.log(daysDifference(new Date('2020-06-11'), new Date('2020-06-01')));
        // console.log(daysDifference(new Date('2000-01-01'), new Date('2020-06-01')));

// 25. Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.
        // function checkEqualDay(x, y){
        //         return x.getDay() === y.getDay();
        // }
        // console.log(checkEqualDay(new Date('2000/01/01'), new Date('2000/01/01')))
        // console.log(checkEqualDay(new Date('2000/01/01'), new Date('2000/01/02')))

// 26. Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.
        // function checkTimeDiff(a, b){
        //         return  Math.abs(a - b) <= 1000 * 60 * 60;
        // }
        // console.log(checkTimeDiff(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));

// 27. Write a function that takes two date instances (a and b) as arguments. It should return true if a is earlier than b. It should return false otherwise.
        // function checkEarlierDate(a, b){
        //         return a- b < 0
        // }
        // console.log(checkEarlierDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))
        // console.log(checkEarlierDate(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')))
