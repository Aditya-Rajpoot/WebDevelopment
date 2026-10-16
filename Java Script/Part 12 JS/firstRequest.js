let url = "https://catfact.ninja/fact";

fetch(url)
.then((response)=>{
    console.log("Response -",response);
    return response.json();
})
.then((data)=>{
    console.log(data.fact);
})
.catch((error)=>{
    console.log("Error -", error)
})