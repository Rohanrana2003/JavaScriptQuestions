let x = [1, 2, 3, 4, 5];

// Map
    // let mapCopy = x.map((element,i, arr) => element*2);
    // console.log('mapCopy => ' + mapCopy);

//Polyfill for map
    // Array.prototype.myMap = function(cb){
    //     let temp = [];
    //     for(let i=0; i<this.length; i++){
    //         temp.push(cb(this[i], i, this))
    //     }
    //     return temp;
    // }

    let mapPolyfill = x.myMap((element,i, arr) => element*2);
    console.log('mapPolyfill => ' + mapPolyfill);



// Filter
    // let filterCopy = x.filter((element, i, arr)=> element > 2);
    // console.log('filterCopy => ' + filterCopy); 

    
//Polyfill for filter
    // Array.prototype.myFilter = function(cb){
    //     let temp = [];
    //     for(let i = 0; i<this.length; i++){
    //         if(cb(this[i], i, this)) temp.push(this[i]);
    //     }
    //     return temp;
    // }

    // let filterPolyfill = x.myFilter((element, i, arr)=> element > 2);
    // console.log('filterPolyfill => ' + filterPolyfill);



// Reduce
    // let reduceCopy = x.reduce((acc, num, i, arr)=>(acc + num), 0);
    // console.log('reduceCopy => ' + reduceCopy);


// Reduce Polyfill
    // Array.prototype.myReduce = function(cb, initialValue){
    //     let accumulator = initialValue;

    //     for(let i=0; i<this.length; i++){
    //         accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i]; 
    //     }
    //     return accumulator;
    // }
    // let reducePolyfill = x.myReduce((acc, num, i, arr)=>(acc + num), 0);
    // console.log('reducePolyfill => ' + reducePolyfill);



// Questions 
let students = [
    {name:'rohan', rollNumber:1, marks:80},
    {name:'mohan', rollNumber:2, marks:69},
    {name:'sohan', rollNumber:3, marks:35},
    {name:'lohan', rollNumber:4, marks:55}
]
//using map
    // let updatedNames = students.map((student)=>(
    //     student.name.toUpperCase()
    // ))
//using forEach
    // students.forEach((student, i)=>(
    //     students[i] = student.name.toUpperCase()
    // ))
// console.log(students)
// console.log(updatedNames)

// name of the students who scored more than 60
    let weakStudents = students.map(student =>{
        if(student.marks < 60){
            student.marks += 20;
        }
        return student;
    })
    .filter(student => student.marks > 60)
    .reduce((acc, stu)=>(
        acc + stu.marks
    ), 0)

    // console.log(weakStudents);