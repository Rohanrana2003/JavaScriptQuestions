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