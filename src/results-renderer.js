import {getState} from "./state-manager.js";
import {getAllParks} from './data/all-parks.js';
import getDomFromString from './get-dom-from-string.js';
import getParkContent from './get-park-content.js';

const DIV_ID = 'results';

const initialRender = () => {
	const resultsDiv = document.getElementById(DIV_ID);
	getAllParks().forEach(park => {
		const element = getDomFromString(getParkContent(park));
		resultsDiv.append(element);
	});
};

const renderResults = () => {
	const {parks} = getState();
	const parkElements = document.querySelectorAll('[data-park-id]');
	const shownParkIds = parks.map(park => park.id);
	parkElements.forEach(park => {
		const id = park.getAttribute('data-park-id');
		const shouldShow = shownParkIds.includes(id);
		park.style.display =  shouldShow ? 'flex' : 'none';
	});

	const markVisitedButtons = document.querySelectorAll('[data-mark-visited-button-id]');
	const visitedIds = getAllParks().filter(park => park.visited).map(park => park.id);
	markVisitedButtons.forEach(button => {
		const id = button.getAttribute('data-mark-visited-button-id');
		const visited = visitedIds.includes(id);
		button.disabled = visited;
	});
};

initialRender();

export default renderResults;