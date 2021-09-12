import {readFromBin} from "./json-management.js";
import {getAllParks, setAllParks} from "./data/all-parks.js";
import {updateParksBasedOnState} from "./state-manager.js";

const updateStateBasedOnBin = () => {
	readFromBin().then((response) => {
		response.json().then((response) => {
			const data = response.record;
			const allParks = getAllParks();
			const visitedIds = data.map(d => d.id);
			const updatedParks =allParks.map(park => ({...park, visited: visitedIds.includes(park.id)}));
			setAllParks(updatedParks);
			updateParksBasedOnState({
				jsonBinData: data
			});
		});
	})
};

export default updateStateBasedOnBin;