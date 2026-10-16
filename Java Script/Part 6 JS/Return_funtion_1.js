function cal_sum (n){
    let sum = 0;
    for(let i = 0; i<= n; i++){
        sum = sum +i;
    }
    return sum;
}
console.log(cal_sum(7))


// practice question....
let str = ["adi","tya"," ","raj","poot"];

function concatenation(str){
    let result = "";

    for(let i = 0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(concatenation(str));