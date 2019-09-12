import {Method} from './method/method.js';

export class Game {
	constructor() {
		this.state = {
			library: new Array(),
			players: new Array(),
			popUp: new Object(),
			truth: new Object(),
			turn: 0,		
		};
		this.method = new Method(this);
	}

	copyArray = array => {
		let copy = new Array();
		for (let i = 0, l = array.length; i < l; i++){
			copy[i] = array[i];
		}
		return copy;
	}

	initGame = () => {
		let state = this.state;
		let copy = {};
		let shuffled = new Array();
		for (let type in state.cards) {
			copy[type] = this.copyArray(state.cards[type]);
		}
		for (let type in copy) {
			let index = Math.floor(Math.random()*copy[type].length);
			state.truth[type] = copy[type][index];
			copy[type].splice(index, 1);
		}
		for (let type in copy) {
			this.randomPick(copy[type], this.state.library);
		}
		this.randomPick(state.library, shuffled);
		this.state.library = shuffled;
	}

	randomPick = (array, pile) => {
		for(let i = 0, l = array.length; i < l; i++) {
			let index = Math.floor(Math.random()*array.length);
			pile.push(array[index]);
			array.splice(index, 1);
		}
	}

	cardDistribution = () => {
		let state = this.state;
		for (let l = state.library.length, i = (l-1), j = 0, n = state.players.length; i >= 0; i--) {
			if (j >= n) j = 0;
			state.players[j].state.hand.push(state.library[i]);
			state.library.splice(i, 1);
			j++
		}
	}

	showPopUp = (content, list = [], selected = 0) => {
		let popUp = this.state.popUp;
			popUp.visibility = true;
			popUp.content = content;
			popUp.list = list;
			popUp.selected = selected
	}

	removePopUp = () => {
		let popUp = this.state.popUp;
			delete popUp.visibility;			
			delete popUp.selected;
			delete popUp.content;
			delete popUp.list;
	}
}