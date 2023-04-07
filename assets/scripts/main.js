function searchPokemon(){
    var pokemon = document.querySelector('#barra-pesquisa').value;
    let api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    fetch(api) //recebe um array de 1125 pokemons
    .then(response => response.json())
    .then(json => findApi(json, pokemon)) //procura a api do pokemon dentro do array
    .catch(e => console.log(e));
}

// function pokemonExist(json, pokemon){

// }

function findApi(json, pokemon){

    json.results.map(item => {
        if(pokemon == item.name){
            fetch(item.url)
                .then(response => response.json())
                .then(json => {
                    customizePokemon(json);
                });
        }
    })
    // if(pokemonExist(json, pokemon)){;

    // }
}

function customizePokemon(json){
    let types = [];
    let abilities = [];

    json.types.map(item => types.push(item.type.name));
    json.abilities.map(item => abilities.push(item.ability.name));
 

    const div = document.querySelector('.pokebola');
    const imgPokemon = json.sprites.front_default;
    const h1 = document.createElement('h1');
    const img = document.querySelector('.pokebola > img');
    const btn = document.querySelector('.btn');
    
    div.classList.remove('pokebola');
    div.classList.add('info-pokemon')
    h1.innerHTML = `${json.name}`;
    img.setAttribute('src', imgPokemon);
    img.setAttribute('alt', 'imagem do pokemón pesquisado');
    div.appendChild(h1);
    div.appendChild(img);

    btn.addEventListener('click', () => {
        div.classList.add('pokebola');
        div.classList.remove('info-pokemon');
        h1.innerHTML = ''
        img.setAttribute('src', '/assets/pokebola.png');
    });
}
