import {getState, updateParksBasedOnState} from "./state-manager.js";
import {getAllParks, setAllParks} from './data/all-parks.js';
import getDomFromString from './get-dom-from-string.js';
import {writeToBin} from './json-management.js';

const DIV_ID = 'results';

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

const initialRender = () => {
	const resultsDiv = document.getElementById(DIV_ID);
	getAllParks().forEach(park => {
		const elementString = `
			<div class="park" data-park-id="${park.id}">
				<div class="park-image-wrapper">
					<img src="${park.image}" />
				</div>
				<div class="park-content">
					<div class="park-title">
						${park.fullName}
					</div>
					<div class="park-description">
						${park.description}
					</div>
					<button class="mark-visited-button" onclick="markAsVisited('${park.id}')" data-mark-visited-button-id="${park.id}">
						Mark visited!
					</button>
					<div class="park-info">
						<a class="park-url" href="${park.url}" target="_blank">
							Park Website
						</a>
						<div class="park-phone">
							Phone #: ${park.phoneNumber}
						</div>
						<div class="park-lat-long">
							${park.latitude}, ${park.longitude}
						</div>
					</div>
				</div>
			</div>`;
		const element = getDomFromString(elementString);
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