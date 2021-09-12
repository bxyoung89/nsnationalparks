import {setState, subscribe} from "./state-manager.js";
import renderResults from "./results-renderer.js";
import renderMap from "./map-renderer.js";
import renderMode from "./mode-renderer.js";
import './mark-as-visited.js';
import './change-results-mode.js';
import './listen-to-hide-visited.js';
import './listen-to-search-bar.js';
import updateStateBasedOnBin from "./update-state-based-on-bin.js";
import {getAllParks } from "./data/all-parks.js";


setState({
	parks: getAllParks(),
	hideVisited: true,
	searchText: '',
	resultsMode: 'map'
});

updateStateBasedOnBin();



const render = () => {
	renderMap();
	renderResults();
	renderMode();
};

subscribe(() => render());
