// CLOSURES

function makeFunc(){
    var name = 'Rohan';

    function printName(){
        console.log(name);
    }
    return printName;
}

var myFunc = makeFunc();
myFunc();