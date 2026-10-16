// query selector
// console.dir(document.querySelector('p'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.oldImg'));
// console.dir(document.querySelectorAll('.oldImg'));

// properties and method...


let links = document.querySelectorAll(".box a");

// for(let i = 0 ; i < links.length; i++){
//     links[i].style.color = "green";

// }

for(link of links){
    link.style.color = "yellow";
}
