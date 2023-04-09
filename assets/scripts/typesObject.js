export const arrTypes = [
    {type: 'normal', color: 'grey'},
    {type: 'fire', color: 'orange'},
    {type: 'fighting', color: 'red'},
    {type: 'water', color: 'blue'},
    {type: 'flyng', color: 'purple'},
    {type: 'grass', color: 'green'},
    {type: 'poison', color: 'purple'},
    {type: 'eletric', color: 'yellow'},
    {type: 'ground', color: 'brown'},
    {type: 'psychic', color: 'magenta'},
    {type: 'rock', color: 'brown'},
    {type: 'ice', color: 'blue'},
    {type: 'bug', color: 'green'},
    {type: 'dragon', color: 'blue'},
    {type: 'ghost', color: 'purple'},
    {type: 'dark', color: 'black'},
    {type: 'steel', color: 'grey'},
    {type: 'fairy', color: 'pink'}
];

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