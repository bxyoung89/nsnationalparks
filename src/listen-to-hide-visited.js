import {updateParksBasedOnState} from "./state-manager.js";

const HIDE_VISITED_ID = 'hide-visited';

const hideVisitedCheckbox = document.getElementById(HIDE_VISITED_ID);
hideVisitedCheckbox.addEventListener('change', (e) => {
	const hideVisited = e.target.checked;
	updateParksBasedOnState({hideVisited});
})