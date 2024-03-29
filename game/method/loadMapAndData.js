import {Map} from '../class/map.js';
import {handleObstacle} from '../method/obstacle.js';

export function loadMapAndData() {
	const xhr = new XMLHttpRequest();

	xhr.open("GET", './game/data/data.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) {
		throw new Error("Impossible de charger la carte (code HTTP : " + xhr.status + ").");
	}
	else {
		const JsonData = xhr.responseText;
		const data = JSON.parse(JsonData);
		for (let type in data) {
			if (data[type].tileset) {
				this.state[type] = new Map(data[type].tileset, data[type].field);
			}
			else this.state[type] = data[type];
		}
		var characterField = new Array();
		characterField = handleObstacle(characterField, this.state.groundMap.state.field, [1,2,3,4,5,6,7]);
		characterField = handleObstacle(characterField, this.state.wallMap.state.field, [13]);
		this.state.characterMap = new Map('groundTileset', characterField);
	}
}