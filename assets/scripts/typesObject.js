export const arrTypes = [
    {type: 'normal', color: '#a9a978'},
    {type: 'fire', color: '#f08131'},
    {type: 'fighting', color: '#c03028'},
    {type: 'water', color: '#6990f1'},
    {type: 'flyng', color: '#a990f1'},
    {type: 'grass', color: '#78c850'},
    {type: 'poison', color: '#9a3a91'},
    {type: 'electric', color: '#f9d031'},
    {type: 'ground', color: '#e0c169'},
    {type: 'psychic', color: '#f85888'},
    {type: 'rock', color: '#cda530'},
    {type: 'ice', color: '#99d9d8'},
    {type: 'bug', color: '#a8b820'},
    {type: 'dragon', color: '#7039f9'},
    {type: 'ghost', color: '#705898'},
    {type: 'dark', color: '#715948'},
    {type: 'steel', color: '#b8b8d0'},
    {type: 'fairy', color: '#ed978f'}
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