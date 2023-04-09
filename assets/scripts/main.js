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

function showAllPokemons(){
    const pokebola = document.querySelector('.pokebola');
    const divBtn = document.querySelector('.all');
    pokebola.parentNode.removeChild(pokebola);
    divBtn.parentNode.removeChild(divBtn);
    const api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    fetch(api) //recebe um array de 1125 pokemons
    .then(response => response.json())
    .then(json => getAll(json))
    .catch(e => console.log(e));
}

function getAll(json){
    
    const content = document.querySelector('.conteudo');

    json.results.map(item => {
        fetch(item.url)
            .then(response => response.json())
            .then(json => customizeAll(json, content))
            .catch(e => console.log(e));
    })
}

function customize(){
    const pokebola = document.querySelector('.pokebola');
    const divBtn = document.querySelector('.all');
    pokebola.parentNode.removeChild(pokebola);
    divBtn.parentNode.removeChild(divBtn);
    const content = document.querySelector('.conteudo');
    const api = 'https://pokeapi.co/api/v2/pokemon/1/';
    fetch(api)
        .then(response => response.json())
        .then(json => {
            const imgPokemon = json.sprites.front_default;
            const pokemonId = '#' + [json.id];
            const names = [json.name];
            let types = [];
            json.types.map(item => {
                types.push(item.type.name);
            })

            const div = document.createElement('div');
            const img = document.createElement('img');
            const id = document.createElement('span');
            const name = document.createElement('h1');
            const divTypes = document.createElement('div');
            const h3 = document.createElement('h3');
            const listTypes = document.createElement('ul');
            h3.innerHTML = 'Tipo:';
            listTypes.classList.add('list-types');
            divTypes.appendChild(h3);
            for(let i = 0; i < types.length; i++){
                const type = document.createElement('li');
                for(let item of arrTypes){
                    if(types[i] == item.type){
                        type.style.backgroundColor = `${item.color}`;
                    }
                }
                type.innerHTML = `${types[i]}`;
                listTypes.appendChild(type);
            }

            divTypes.appendChild(listTypes);
            img.setAttribute('src', imgPokemon);
            id.innerHTML = `${pokemonId}`;
            name.innerHTML = `${names}`;
            divTypes.classList.add('div-types');
            div.appendChild(img);
            div.appendChild(id);
            div.appendChild(name);
            div.appendChild(divTypes)
            div.classList.add('card');
            content.appendChild(div);
        })
        .catch(e => console.l(e));                                                                                                                                                                                                               
}

function customizeAll(json, content){

    const divAll = document.createElement('div');
    const imgPokemon = [json.sprites.front_default];
    const pokemonId = [json.id];
    const names = [json.name];
    let types = [];
    json.types.map(item => types.push(item.type.name));

    for(let i = 0; i < names.length; i++){
 
        const divCard = document.createElement('div');
        const img = document.createElement('img');
        const id = document.createElement('h2');
        const name = document.createElement('h1');
        const divTypes = document.createElement('div');
        const titleTypes = document.createElement('h2');
        const listTypes = document.createElement('ul');
        const itemList = document.createElement('li');
        //img.setAttribute('src', imgPokemon[i]);
        id.innerHTML = `${pokemonId[i]}`;
        name.innerHTML = `${names[i]}`;
        titleTypes.innerHTML = 'Tipo:';
        listTypes.appendChild(itemList);
        divTypes.appendChild(titleTypes);
        divTypes.appendChild(listTypes);
        div.appendChild(img);
        divCard.appendChild(id);
        divCard.appendChild(name);
        //divCard.appendChild(divTypes);
        listTypes.classList.add('list-types');
        divTypes.classList.add('div-types');
        divCard.classList.add('card');
        
    }

    content.appendChild(divCard);
    // btn.addEventListener('click', () => {
    //     typeAndAbility.parentNode.removeChild(typeAndAbility);
    //     h1.innerHTML = ''
    //     img.setAttribute('src', '/assets/pokebola.png');
    // });
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
