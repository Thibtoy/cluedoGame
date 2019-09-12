import {Character} from '../class/character.js';
import {Player} from '../class/player.js';


const DIRECTION = {
	"DOWN": 0,
	"LEFT": 1,
	"RIGHT": 2,
	"TOP": 3
}

export function setPlayers() {
	this.state.characterMap.addCharacter(new Character("mmeLeblanc", 9, 0, DIRECTION.DOWN));
	this.state.characterMap.addCharacter(new Character("drOlive", 0, 17, DIRECTION.RIGHT));
	this.state.players.push(new Player(this.state.characterMap.state.characters[0], 'Thibault'));
	this.state.players.push(new Player(this.state.characterMap.state.characters[1], 'Arnaud'));
	for (let i = 0, l = this.state.players.length; i < l; i++) {
		this.state.players[i].state.evidenceList = new Object();
		for (let type in this.state.cards) {
			this.state.players[i].state.evidenceList[type] = new Array();
			for (let j = 0, k = this.state.cards[type].length; j < k; j++) {
				let item = {name: this.state.cards[type][j], evidence: 0};
				this.state.players[i].state.evidenceList[type].push(item);
			}
		}
	}
}

// frontUpstairs.addCharacter(new Character("characterTileset", 14, 0, 4, 0));
// frontUpstairs.addCharacter(new Character("characterTileset", 23, 6, 10, 5));
// frontUpstairs.addCharacter(new Character("characterTileset", 23, 19, 4, 5));
// frontUpstairs.addCharacter(new Character("characterTileset", 7, 24, 7, 3));