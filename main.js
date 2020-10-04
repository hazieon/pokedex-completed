
let spriteImage = document.querySelector("#pokeball-image");
let nextButton = document.querySelector("#next");
let backButton = document.querySelector("#back");
let randomButton = document.querySelector("#random");
let pokemonName = document.querySelector("#poke-name");
let pokemonData = document.querySelector("#poke-data");
let pokemonType = document.querySelector("#poke-types");

i=0;
async function fetchPokemon (){
let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
let data = await response.json();

console.log(data);

let pokeType = data["types"]["0"]["type"].name;
let pokeNumber =  data["id"];
let {name, weight, height} = data;
let sprite = data.sprites.front_default;

pokemonType.innerText = `types: ${pokeType}`;
pokemonData.innerText = `#${pokeNumber} weight:${weight} | height: ${height}`;

pokemonName.innerText=name;
spriteImage.src = sprite;
console.log(sprite);
return data;
}



nextButton.addEventListener("click", nextPokemon);
backButton.addEventListener("click", previousPokemon);

function nextPokemon(){

    i++
    fetchPokemon();
    return;
}


function previousPokemon(){

    i--;
    fetchPokemon();
    return;
}

randomButton.addEventListener("click", randomPokemon)

function randomPokemon(){
    let randomNum = Math.floor(Math.random() * 800);
    i = randomNum;
    fetchPokemon(i);
}





