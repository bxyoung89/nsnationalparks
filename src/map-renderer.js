import {getState} from './state-manager.js';
import getParkContent from './get-park-content.js';

const myMap = window.L.map('map-results').setView([31.51073, -96.4247], 4);
window.L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiYnh5b3VuZzg5IiwiYSI6ImNraDFkbXE3NzBlNXgyeGxxNjlxbjN1ODcifQ.JN6ohMF3Q14KZejZubwonw'
}).addTo(myMap);

// const market = window.L.marker([lat, long]).addTo(myMap);

const unvisitedIcon = window.L.icon({
	iconUrl: './images/unvisited-marker.png',
	iconSize: [30,30]
});

const visitedIcon = window.L.icon({
	iconUrl: './images/visited-marker.png',
	iconSize: [30,30]
});

let layerGroup;

const renderMap = () => {
	const {parks} = getState();
	// todo clear
	if(layerGroup){
		layerGroup.clearLayers();
	}
	const markers = [];
	parks.forEach((park) => {
		const latitude = Number.parseFloat(park.latitude);
		const longitude = Number.parseFloat(park.longitude);
		if(Number.isNaN(latitude) || Number.isNaN(park.longitude)){
			return;
		}
		const marker = window.L.marker([latitude, longitude], {
			icon: park.visited ? visitedIcon : unvisitedIcon,
		});
		marker.bindPopup(getParkContent(park));
		markers.push(marker);
	});

	layerGroup = window.L.layerGroup(markers).addTo(myMap);
};

export default renderMap;