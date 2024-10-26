//Currying in javascript

// [Question 1]
    // function f(a){
    //     return function(b){
    //         return function(c){
    //             return function(d){
    //                 console.log(a, b, c, d);
    //             }
    //         }
    //     }
    // }
    // f(1)(2)(3)(4);

// [Question 2]
//evaluate('sum')(4)(2)
//evaluate('multiply')(4)(2)
//evaluate('divide')(4)(2)
//evaluate('substract')(4)(2)

    // function evaluate(operation){
    //     return function(a){
    //         return function(b){
    //             if(operation == 'sum') return a+b;
    //             else if(operation == 'multiply') return a*b;
    //             else if(operation == 'divide') return a/b;
    //             else if(operation == 'substract') return a-b;
    //             else return 'Invalid operator'
    //         }
    //     }
    // }

    // console.log(evaluate('sum')(2)(2));
    // console.log(evaluate('multiply')(4)(2));
    // console.log(evaluate('divide')(4)(2));
    // console.log(evaluate('substract')(4)(2));


// [Question 3, Infinite currying]
    // function add(a){
    //     return function(b){
    //         if(b) return add(a+b);
    //         return a;
    //     }
    // }
    // console.log(add(1)(2)(2)(5)())


// [Question 4, Currying vs Partial Application]
// Partial Application
    // function add(a){
    //     return function(b, c){
    //         console.log(a+b+c);
    //     }
    // }
    // add(10)(2,3);

//Currying
    // function add(a){
    //     return function(b){
    //         return function(c){
    //             console.log(a+b+c);
    //         }
    //     }
    // }
    // add(10)(2)(3);

//[Questtion 5, Implement DOM Manipulation with currying]
    // function updateElement(id){
    //     return function(content){
    //         return document.getElementById(id).innerText = content;
    //     }
    // }
    // updateElement('heading')('updated')


//[Question 6, Write a function to convert normal function into currying function]

    // function curry(fn){
    //     return function curriedFunc(...args){
    //         if(args.length >= fn.length){
    //             return fn(...args)
    //         }
    //         else{
    //             return function(...next){
    //                 return curriedFunc(...args, ...next);
    //             }
    //         }
    //     }
    // }
    // const sum =(a, b, c, d)=> a + b + c + d;
    // const total = curry(sum);
    // console.log(total(1)(2)(10)(20));
