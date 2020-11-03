import {setState} from "./state-manager.js";

window.changeResultsMode = (mode) => {
	setState({
		resultsMode: mode
	});
};