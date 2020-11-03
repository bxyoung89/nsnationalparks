import {getState} from "./state-manager.js";
import getDomFromString from './get-dom-from-string.js';

const DIV_ID = 'results';

const renderResults = () => {
	const resultsDiv = document.getElementById(DIV_ID);
	resultsDiv.innerHTML = '';
	const {parks} = getState();
	parks.forEach(park => {
		const elementString = `
			<div class="park">
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
					<button class="mark-visited-button" onclick="alert('not working yet')">
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
	})
};

export default renderResults;