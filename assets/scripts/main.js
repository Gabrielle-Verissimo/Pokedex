// function searchPokemon(){
//     const pokemon = document.querySelector('#barra-pesquisa').value.toLowerCase();
//     const api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
//     fetch(api) //recebe um array de 1125 pokemons
//     .then(response => response.json())
//     .then(json => findApi(json, pokemon)) //procura a api do pokemon dentro do array
//     .catch(e => console.log(e));
// }

import { arrTypes } from "./typesObject.js";

const showAll = document.querySelector('.btn-all');
showAll.addEventListener('click', () => showAllPokemons());

var urls = [];
let counter = 4;
let i;

function showAllPokemons(){

    const content = document.querySelector('.conteudo');
    content.parentNode.removeChild(content);  
    const api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    fetch(api)
    .then(response => response.json())
    .then(json => getAll(json))
    .catch(e => console.log(e));
}

function getAll(json){
    
    const tela = document.querySelector('.tela');
    const divAll = document.createElement('div');
    divAll.classList.add('div-all');

    json.results.map(item => urls.push(item.url));

    for(i = 0; i < counter; i++) {
        fetch(urls[i])
            .then(response => response.json())
            .then(json => customizeAll(json, tela, divAll))
            .catch(e => console.log(e));
    }
    
}

const btnSkip = document.querySelector('#skip');

btnSkip.addEventListener('click', () => skip());

function skip() {
    const tela = document.querySelector('.tela');
    const divAll = document.querySelector('.div-all');
    const cards = document.querySelectorAll('.card');

    for(let y = 0; y < cards.length; y++) {
        cards[y].classList.add('passed');
    }

    i = counter;
    counter += 4;

    for(let x = i; x < counter; x++) {

        fetch(urls[x])
            .then(response => response.json())
            .then(json => customizeAll(json, tela, divAll))
            .catch(e => console.log(e));
    }
}

function customizeAll(json, tela, divAll){

    const imgPokemon = json.sprites.front_default;
    const pokemonId = '#' + [json.id];
    const name = [json.name];
    let types = [];
    json.types.map(item => types.push(item.type.name));

    const divCard = document.createElement('div');
    const img = document.createElement('img');
    const id = document.createElement('span');
    const tagName = document.createElement('h1');
    const divTypes = document.createElement('div');
    const titleTypes = document.createElement('h3');
    const listTypes = document.createElement('ul');
    
    titleTypes.innerHTML = 'Tipo: ';
    listTypes.classList.add('list-types');
    divTypes.appendChild(titleTypes);

    for(let i = 0; i < types.length; i++){
        const type = document.createElement('li');
        for(let item of arrTypes){
            if(types[i] == item.type){
                type.style.backgroundColor = `${item.color}`;
                type.innerHTML = `${item.typePtbr}`;
            }  
        }
        
        listTypes.appendChild(type);          
    }

    if(imgPokemon == null){
        img.setAttribute('src', '../assets/pokebola.png');
    }
    else{
        img.setAttribute('src', imgPokemon);
    }

    divTypes.appendChild(listTypes);
    id.innerHTML = `${pokemonId}`;
    tagName.innerHTML = `${name}`;
    divTypes.classList.add('div-types');
    divCard.appendChild(img);
    divCard.appendChild(id);
    divCard.appendChild(tagName);
    divCard.appendChild(divTypes);
    divCard.classList.add('card');
    divAll.appendChild(divCard);
    tela.appendChild(divAll);

}

// function findApi(json, pokemon){

//     json.results.map(item => {
//         if(pokemon == item.name){
//             fetch(item.url)
//                 .then(response => response.json())
//                 .then(json => {
//                     customizePokemon(json);
//                 })
//                 .catch(e => console.log(e));
//         }
//     })
// }

// function customizePokemon(json){
//     // let types = [];
//     // let abilities = [];
//     let name = json.name;
//     let PokeName = name[0].toUpperCase() + name.slice(1);
    
//     const div = document.querySelector('.pokebola');
//     const typeAndAbility = document.createElement('div');
//     const types = document.createElement('ul');
//     const abilities = document.createElement('ul');
//     const titleTypes = document.createElement('h1');
//     const titleAbilities = document.createElement('h1');
//     const imgPokemon = json.sprites.front_default;
//     const h1 = document.createElement('h1');
//     const img = document.querySelector('.pokebola > img');
//     const btn = document.querySelector('.btn');

//     titleTypes.innerHTML = "Tipo";
//     titleAbilities.innerHTML = "Habilidades";
//     types.appendChild(titleTypes);
//     abilities.appendChild(titleAbilities);

//     json.types.map(item => {
//         const type = document.createElement('li');
//         type.innerHTML = `${item.type.name}`;
//         types.appendChild(type);
//     });

//     json.abilities.map(item => {
//         const ability = document.createElement('li');
//         ability.innerHTML = `${item.ability.name}`;
        
//         abilities.appendChild(ability); 
//     });

//     typeAndAbility.classList.add('type-ability');
//     types.classList.add('class-types');
//     abilities.classList.add('class-abilities');
//     typeAndAbility.appendChild(types);
//     typeAndAbility.appendChild(abilities);
//     div.classList.remove('pokebola');
//     div.classList.add('info-pokemon')
//     h1.innerHTML = `${PokeName}`;
//     img.setAttribute('src', imgPokemon);
//     img.setAttribute('alt', 'imagem do pokemón pesquisado');
//     div.appendChild(h1);
//     div.appendChild(img);
//     div.appendChild(typeAndAbility);

//     btn.addEventListener('click', () => {
//         div.classList.add('pokebola');
//         div.classList.remove('info-pokemon');
//         typeAndAbility.parentNode.removeChild(typeAndAbility);
//         h1.innerHTML = ''
//         img.setAttribute('src', '/assets/pokebola.png');
//     });
// }
