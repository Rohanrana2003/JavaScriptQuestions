//Objects

// [Question 1]
    // const user = {
    //     name:'Rohan',
    //     class:'12th',
    //     section:'b'
    // }
    // delete user['name'];
    // console.log(user)


// [Question 2, How to access keys and values in object]
    // const user = {
    //     name:'Rohan',
    //     age:24,
    //     isAlive:true
    // }
    // for(key in user){
    //     console.log(user[key]);
    // }
    // console.log(Object.keys(user)); 

// [Question 3, Create a function multiplyByTwo(obj) that multiplies all numeric property values by two]
    // const test = {
    //     name:'rohan',
    //     num1:12,
    //     num2:23,
    // }
    // function multiplyByTwo(obj){
    //     for(key in obj){
    //         if(typeof(obj[key]) === 'number'){
    //             obj[key] *= 2;
    //         }
    //     }
    // }

    // multiplyByTwo(test);
    // console.log(test)

// [Question 4]
    // const a = {}

    // const b = {key:'b'};
    // const c = {key:'c'};

    // a[b] = 123, 
    // a[c] = 456,
    // console.log(a[b]);

// [Question 5, Diff b/w JSON.stringify and JSON.parse]
    // let obj = {
    //     name:'Rohan',
    //     age:21
    // }
    // let stringifyObj = JSON.stringify(obj);
    // let parseObj = JSON.parse(stringifyObj);
    // console.log(stringifyObj);
    // console.log(parseObj);

//[Question 6]
    // let user = {name:'rohan', age:21};
    // let admin = {admin:true, ...user};
    // console.log(admin)


// [Question 7]
    // let obj = {
    //     name:'Rohan',
    //     age:21,
    //     gender:'Male'
    // }
    // let stringifyObj = JSON.stringify(obj, ['name', 'age']);
    // console.log(stringifyObj);

// [Question 8]
    // function getItems(fruitList, favouriteFruit, ...args){
    //     return [fruitList, ...args, favouriteFruit]
    // }
    // console.log(getItems(['Banana', 'Apple'], 'Orange', 'Papaya'));

// [Question 9]
    // let a = {purpose:'Greeting'}
    // let b = a;
    // b.purpose = 'Formality';
    // console.log(a)

// [Questions 10]
    // console.log({a:1} == {a:1});

// [Questions 11, How to deep copy and shallow copy]
    // let user = {
    //     name:'Rohan',
    //     age:21
    // }
    // // Three ways: 
    //     // let user1 = Object.assign({}, user);
    //     // let user1 = JSON.parse(JSON.stringify(user));
    //     // let user1 = {...user};
    // user1.name = 'Rajat'
    // console.log(user)
    // console.log(user1)