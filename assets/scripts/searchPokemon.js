export function searchPokemon(api){

    const pokemon = document.querySelector('#barra-pesquisa').value.toLowerCase();

    fetch(api) //recebe um array com as api de cada pokemon
    .then(response => response.json())
    .then(json => findApi(json, pokemon)) //procura a api do pokemon dentro do array
    .catch(e => console.log(e));
}

function findApi(json, pokemon){

    json.results.map(item => {
        if(pokemon == item.name){
            fetch(item.url)
                .then(response => response.json())
                .then(json => {
                    renderPokemon(json);
                })
                .catch(e => console.log(e));
        }
    })
}

function renderPokemon(json){
    // let types = [];
    // let abilities = [];
    let name = json.name;
    let PokeName = name[0].toUpperCase() + name.slice(1);
    
    const div = document.querySelector('.pokebola');
    const typeAndAbility = document.createElement('div');
    const types = document.createElement('ul');
    const abilities = document.createElement('ul');
    const titleTypes = document.createElement('h1');
    const titleAbilities = document.createElement('h1');
    const imgPokemon = json.sprites.front_default;
    const h1 = document.createElement('h1');
    const img = document.querySelector('.pokebola > img');
    const btn = document.querySelector('.btn');

    titleTypes.innerHTML = "Tipo";
    titleAbilities.innerHTML = "Habilidades";
    types.appendChild(titleTypes);
    abilities.appendChild(titleAbilities);

    json.types.map(item => {
        const type = document.createElement('li');
        type.innerHTML = `${item.type.name}`;
        types.appendChild(type);
    });

    json.abilities.map(item => {
        const ability = document.createElement('li');
        ability.innerHTML = `${item.ability.name}`;
        
        abilities.appendChild(ability); 
    });

    typeAndAbility.classList.add('type-ability');
    types.classList.add('class-types');
    abilities.classList.add('class-abilities');
    typeAndAbility.appendChild(types);
    typeAndAbility.appendChild(abilities);
    div.classList.remove('pokebola');
    div.classList.add('info-pokemon')
    h1.innerHTML = `${PokeName}`;
    img.setAttribute('src', imgPokemon);
    img.setAttribute('alt', 'imagem do pokemón pesquisado');
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(typeAndAbility);

    btn.addEventListener('click', () => {
        div.classList.add('pokebola');
        div.classList.remove('info-pokemon');
        typeAndAbility.parentNode.removeChild(typeAndAbility);
        h1.innerHTML = ''
        img.setAttribute('src', '/assets/pokebola.png');
    });
}