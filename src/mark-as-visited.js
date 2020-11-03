import {getState, updateParksBasedOnState} from "./state-manager.js";
import {getAllParks, setAllParks} from './data/all-parks.js';
import {writeToBin} from './json-management.js';

window.markAsVisited = (id) => {
	const {jsonBinData} = getState();
	const newJSONBinData = [
		...jsonBinData,
		{
			id,
			time: (new Date()).toISOString()
		}
	];
	writeToBin(newJSONBinData).then(() => {
		const allParks = getAllParks();
		setAllParks(allParks.map(park => {
			if(park.id !== id){
				return park;
			}
			return {
				...park,
				visited: true,
			};
		}))
		updateParksBasedOnState({});
	});
};