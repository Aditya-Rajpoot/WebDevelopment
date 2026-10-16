const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function getJokes() {
    try{
        const config = {Headers : {Accept : "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
}