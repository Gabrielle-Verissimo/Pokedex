import { showAllPokemons } from "./showAllPokemon.js";
import { searchPokemon } from "./searchPokemon.js";

const api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
const search = document.querySelector('#btn-pesquisar');
const showAll = document.querySelector('.btn-all');

search.addEventListener('click', () => searchPokemon(api));
showAll.addEventListener('click', () => showAllPokemons(api));