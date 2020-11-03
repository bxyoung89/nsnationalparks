import {setState, subscribe, updateParksBasedOnState} from "./state-manager.js";
import renderResults from "./results-renderer.js";
import './listen-to-hide-visited.js';
import './listen-to-search-bar.js';
import {readFromBin} from "./json-management.js";
import {getAllParks, setAllParks} from "./data/all-parks.js";


setState({
	parks: getAllParks(),
	hideVisited: true,
	searchText: '',
});

readFromBin().then((response) => {
	response.json().then((data) => {
		const allParks = getAllParks();
		const visitedIds = data.map(data => data.id);
		const updatedParks =allParks.map(park => ({...park, visited: visitedIds.includes(park.id)}));
		setAllParks(updatedParks);
		updateParksBasedOnState({
			jsonBinData: data
		});
	});
})


const render = () => {
	renderResults();
};

subscribe(() => render());
