import { arrTypes } from "./typesObject.js";

var urls = [];
let counter = 4;
let i;

export function showAllPokemons(api){

    const content = document.querySelector('.conteudo');
    content.parentNode.removeChild(content);  
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
    // let passedCounter = 0;
    // let top = -150;
    // let myInterval = setInterval(() => {   
    //     top -= 123;
    //     for(let y = 0; y < cards.length; y++) {
    //         cards[y].style.marginTop = `${top}px`; 
    //     }
    //     passedCounter++;
    //     if(passedCounter == 2){
    //         console.log('entrou aqui', cards[0].style.marginTop);
    //         clearInterval(myInterval);
    //     }    
    // }, 500);

    let myTime = setTimeout(() => {
        i = counter;
        counter += 4;
    
        for(let x = i; x < counter; x++) {
    
            fetch(urls[x])
                .then(response => response.json())
                .then(json => customizeAll(json, tela, divAll))
                .catch(e => console.log(e));
        }
    }, 1000);


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