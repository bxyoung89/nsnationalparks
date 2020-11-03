const fs = require('fs');
const path = require('path');
const parks = JSON.parse(`${fs.readFileSync(path.join(__dirname, './parks-orig.json'))}`);

const cleanedParks = parks.data.map(({url, fullName, id, description, latitude, longitude, contacts, images})=>
({
	url,
	fullName,
	id,
	description,
	latitude,
	longitude,
	phoneNumber: contacts.phoneNumbers.filter(num => num.type === 'Voice').map(num => num.phoneNumber)[0],
	image: images.length > 0 ? images[0].url : ''
}));

fs.writeFileSync(path.join(__dirname, './parks.json'), JSON.stringify(cleanedParks, null, 2));

/*
url
fullName
id
description
latitude
longitude
contacts.phoneNumbers where type === "Voice"

 */