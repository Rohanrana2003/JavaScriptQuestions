





const data = [
    {buy:1, user:"Rohan"},
    {buy:5, user:"Rashmeet"},
    {buy:9, user:"Rohan"},
    {buy:7, user:"Rashmeet"},
    {buy:15, user:"Rohan"},
    {buy:3, user:"Rashmeet"},
]

function calculate(name){

    let total = data.myReduce((acc, item)=>{
        
        if(item.user === name){
            acc += item.buy;
        }
        if(!name){
            acc+=item.buy;
        }
        return acc;

    }, 0)
    console.log(total);
}

calculate('');


Array.prototype.myReduce = function(callback, initial=0){

    let total = initial;

    for(let i=0; i<this.length; i++){
        total = callback(total, this[i], i, this );
    }

    return total;
}