// let odd = function(n){
//     console.log(!(n%2==0));
// }

// let even = function(n){
//     console.log(n%2==0);
// }


function OddorEvenfactory(request){
    if(request =="odd"){
      let odd = function(n){
         console.log(!(n%2==0));
      }
      return odd;
    }else if (request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong request");
    }
}

// let request = "odd";
let request = "even";