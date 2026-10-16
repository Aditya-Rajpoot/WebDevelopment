let input =  document.querySelector("input");

input.addEventListener("keydo", function(event){
    console.log("key = "+ event.key);
    console.log("code = "+event.code);
    console.log("key pressed");
});