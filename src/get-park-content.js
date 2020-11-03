export default (park) => {
	return `
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
					<button class="mark-visited-button" onclick="markAsVisited('${park.id}')" data-mark-visited-button-id="${park.id}" ${park.visited ? 'disabled' : ''}>
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
};