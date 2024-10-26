// CLOSURES


// [Question 1]
    // function makeFunc(){
    //     var name = 'Rohan';

    //     function printName(){
    //         console.log(name);
    //     }
    //     return printName;
    // }
    // var myFunc = makeFunc();
    // myFunc();

// [Question 2]
    // let count = 0;
    // (function printCount(){
    //     if(count ===0){
    //         let count = 1;
    //         console.log(count)
    //     }
    //     console.log(count);
    // })()

// [Question 3, Write a function that allow us to do this ]
//  var addSix = createBase(6);
//  addSix(10) //returns 16
//  addSix(21) // returns 27

    // function createBase(num){
    //     return function add(num1){
    //         console.log(num + num1);
    //     }
    // }
    // var addSix = createBase(6);
    // addSix(10) //returns 16
    // addSix(21) // returns 27

// [Question 3]
    // function a(){
    //     for(var i=0; i<3; i++){
    //         function log1(x){
    //             setTimeout(function log(){
    //                 console.log(x)
    //             }, i*1000)
    //         } 
    //         log1(i);
    //     }
    // }
    // a();

// [Question 4, How can we use closure to create a private counter]
    // function privateCounter(){
    //     var _Counter = 0;

    //     function add(increment){
    //         _Counter += increment; 
    //     }

    //     function retrive(){
    //         console.log(_Counter);
    //     }
    //     return{
    //         add,
    //         retrive
    //     }
    // }

    // let c = privateCounter();
    // c.add(20);
    // c.add(1);
    // c.retrive();

// [Question 5, What is a module pattern]
    // var Module = (function(){
    //     function privateMethod(){
    //         console.log('Private')
    //     }

    //     return {
    //         publicMethod: function(){
    //             console.log('Public');
    //         },
    //     }
    // })()

    // Module.publicMethod();
    // Module.privateMethod()

// [Question 6, Make this run only once] 
    // let view;
    // function runner(){
    //     let called = 0;

    //     return function limit(){
    //         if(called === 0){
    //             called = called + 1;
    //             view = 'Good Job';
    //             console.log(view);
    //         }
    //         else{
    //             console.log('Already Executed');
    //         }
    //     }
    // }
    // let test = runner();
    // test();
    // test();

// [Question 7, Polyfill for memoization]
    // function memoized(fn, context){
    //     const res ={};
    //     return function(...args){
    //         let result = JSON.stringify(args);
    //         if(!res[result]){
    //             res[result] = fn.call(context || this, ...args);  
    //         }
    //         return res[result];
    //     }
    // }

    // const clumsyProduct = (num1, num2) =>{
    //     for(let i=0; i<100000; i++){}
    //     return num1*num2;
    // }

    // let memoizedResult = memoized(clumsyProduct);

    // console.time('FIRST');
    // console.log(memoizedResult(1000, 2000))
    // console.timeEnd('FIRST');

    // console.time('SECOND');
    // console.log(memoizedResult(1000, 2000))
    // console.timeEnd('SECOND');


