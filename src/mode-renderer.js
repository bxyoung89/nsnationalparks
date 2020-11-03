import {getState} from "./state-manager.js";

const MAP_BUTTON_ID = 'map-view-button';
const LIST_VIEW_BUTTON_ID = 'list-view-button';
const MAP_ID = 'map-results';
const LIST_ID = 'results';

const renderMode = () => {
	const {resultsMode} = getState();
	const mapButton = document.getElementById(MAP_BUTTON_ID);
	const listButton = document.getElementById(LIST_VIEW_BUTTON_ID);
	const map = document.getElementById(MAP_ID);
	const list = document.getElementById(LIST_ID);
	if(resultsMode === 'map'){
		mapButton.disabled = true;
		listButton.disabled = false;
		map.style.display = 'block';
		list.style.display = 'none';
		return;
	}
	mapButton.disabled = false;
	listButton.disabled = true;
	map.style.display = 'none';
	list.style.display = 'block';
};

export default renderMode;