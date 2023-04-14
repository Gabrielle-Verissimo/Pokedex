export const arrTypes = [
    {type: 'normal', typePtbr: 'normal', color: '#a9a978'},
    {type: 'fire', typePtbr: 'fogo', color: '#f08131'},
    {type: 'fighting', typePtbr: 'lutador', color: '#c03028'},
    {type: 'water', typePtbr: 'água', color: '#6990f1'},
    {type: 'flying', typePtbr: 'voador', color: '#a990f1'},
    {type: 'grass', typePtbr: 'planta', color: 'green'},
    {type: 'poison', typePtbr: 'venenoso', color: '#9a3a91'},
    {type: 'electric', typePtbr: 'elétrico', color: '#f9d031'},
    {type: 'ground', typePtbr: 'terra', color: '#e0c169'},
    {type: 'psychic', typePtbr: 'psíquico', color: '#f85888'},
    {type: 'rock', typePtbr: 'pedra', color: '#cda530'},
    {type: 'ice', typePtbr: 'gelo', color: '#99d9d8'},
    {type: 'bug', typePtbr: 'inseto', color: '#a8b820'},
    {type: 'dragon', typePtbr: 'dragão', color: '#7039f9'},
    {type: 'ghost', typePtbr: 'fantasma', color: '#705898'},
    {type: 'dark', typePtbr: 'sombrio', color: '#715948'},
    {type: 'steel', typePtbr: 'metal', color: '#b8b8d0'},
    {type: 'fairy', typePtbr: 'fada', color: '#ed978f'}
];

// function getAll(json){
    
//     const content = document.querySelector('.conteudo');
//     const h2 = document.querySelector('.conteudo > h2');
//     const divAll = document.createElement('div');
//     h2.parentNode.removeChild(h2);
//     divAll.classList.add('div-all');

//     json.results.map(item => {
//         console.log(item.url);
//         fetch(item.url)
//             .then(response => response.json())
//             .then(json => customizeAll(json, content, divAll))
//             .catch(e => console.log(e));
//     })
// }