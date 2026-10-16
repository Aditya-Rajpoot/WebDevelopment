// let numbers = [1,2,3,4,5];

// let finalvalue = numbers.reduce((rel , el) => rel+el);
// console.log(finalvalue);


// finding maximum number ;

let nums = [1,2,6,3,5,8,9,4,];

let result = nums.reduce((max , el) =>{
    if(el > max){
        return el;
    }else{
        return max;
    }
});

console.log(result);
