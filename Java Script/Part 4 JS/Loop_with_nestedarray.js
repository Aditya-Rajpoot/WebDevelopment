let heroes = [ 
    ["ironman", "spiderman","thor"],
     ["superman", "batman","flash"]
    ];
for(let i = 0; i <heroes.length ; i++){
    console.log(`${i} List #${heroes[i]} `);
    for (let j = 0; j < heroes[i].length; j++){
        console.log( `${j} ` , heroes[i][j]);
    }
}