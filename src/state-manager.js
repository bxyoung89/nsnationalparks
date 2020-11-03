import {getAllParks} from './data/all-parks.js';
let state = {};
const subscribers = [];

export const getState = () => state;
export const setState = (newState) => {
	state = {...state, ...newState};
	subscribers.forEach(subscriber => subscriber());
};
export const subscribe = (subscriber) => subscribers.push(subscriber);
export const updateParksBasedOnState = (stateUpdate) => {
	const updatedState = {
		...state,
		...stateUpdate
	};
	const {hideVisited, searchText} = updatedState;
	const parks = getAllParks().filter(park => {
		return park.fullName.toLowerCase().indexOf(searchText) !== -1 && (!park.visited || (!hideVisited && park.visited));
	})
	setState({
		...updatedState,
		parks
	})
};