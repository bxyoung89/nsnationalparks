export default str => {
	const div = document.createElement('div');
	div.innerHTML = str;
	return div.firstElementChild;
};