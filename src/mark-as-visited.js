import {getState } from "./state-manager.js";
import {writeToBin} from './json-management.js';
import updateStateBasedOnBin from "./update-state-based-on-bin.js";

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
		updateStateBasedOnBin();
	});
};