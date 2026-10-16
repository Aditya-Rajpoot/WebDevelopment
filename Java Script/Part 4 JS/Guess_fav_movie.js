const fav_movie = "avatar";

let guess = prompt("Guess my fav Movie!")

while(guess != fav_movie && guess != "quit"){
    guess = prompt(" Wrong Guess - Please try Again !")
}
if (guess == fav_movie){
    console.log("congratulations");
}else{
    console.log("you quit");
}
