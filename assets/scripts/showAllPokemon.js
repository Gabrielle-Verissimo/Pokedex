import { arrTypes } from "./typesObject.js";
//Consertar função Back
var urls = [];
let counter = 20;
let i = 10;

export function showAllPokemons(api){

    const content = document.querySelector('.conteudo');
    content.parentNode.removeChild(content); 
    fetch(api)
        .then(response => response.json())
        .then(json => getAll(json))
        .catch(e => console.log(e));
}

function getAll(json){

    const divAll = document.createElement('div');
    divAll.classList.add('div-all');

    json.results.map(item => urls.push(item.url));

    for(let x = 0; x < 10; x++) {
        fetch(urls[x])
            .then(response => response.json())
            .then(json => createCard(json, divAll))
            .catch(e => console.log(e));
    }
  
}

var scrollSkip = 0;
var scrollBack = 0;
var page = 0;
var cards = [];
const btnSkip = document.querySelector('#skip-page');

btnSkip.addEventListener('click', () => skipPage());

function skipPage() {

    const divAll = document.querySelector('.div-all');

    for(let x = i; x < counter; x++) {
        fetch(urls[x])
            .then(response => response.json())
            .then(json => createCard(json, divAll))
            .catch(e => console.log(e));
    }

    i = counter;
    counter += 10;
    scrollSkip += 505;
    page++;
    //scrollBack += 505;
    // const scrollY = window.pageYOffset;
    // console.log(scrollY);

}

const btnBack = document.querySelector('#back-page');

btnBack.addEventListener('click', () => backPage());

function backPage() {
    const divAll = document.querySelector('.div-all');
    divAll.scrollBy(0, -505);
}

function createCard(json, divAll){

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
    divCard.setAttribute('id', `${json.id}`);
    divCard.classList.add('card');
    cards.push(divCard);
    renderCard(divAll);

}

function renderCard(divAll) {
    const tela = document.querySelector('.tela');
    
    cards.sort((a, b) => {
        return a.id - b.id;
    });

    cards.map(item => divAll.appendChild(item));
    tela.appendChild(divAll);
    divAll.scrollTo(0, scrollSkip);
}