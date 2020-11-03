import {setState, subscribe} from "./state-manager.js";
import allParks from './data/parks.js';
import renderResults from "./results-renderer.js";
import './listen-to-hide-visited.js';
import './listen-to-search-bar.js';



setState({
	parks: allParks,
	hideVisited: true,
	searchText: '',
});

const render = () => {
	renderResults();
};

subscribe(() => render());

render();

console.log('hell0');