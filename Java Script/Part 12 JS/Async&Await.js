let url = "https://catfact.ninja/fact";

async function get() {
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.fact);
    }catch(error){
        console.log("error", error);
    }
    
}