import {updateParksBasedOnState} from "./state-manager.js";

const SEARCH_BAR_ID = 'search-bar';

const searchBar = document.getElementById(SEARCH_BAR_ID);
searchBar.addEventListener('change', (e) => {
	const searchText = e.target.value.trim();
	updateParksBasedOnState({searchText});
})