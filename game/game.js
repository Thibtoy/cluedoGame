import {Method} from './class/method.js';

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
}