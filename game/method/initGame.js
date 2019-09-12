export function initGame() {
	let state = this.state;
	let copy = {};
	let shuffled = new Array();
	for (let type in state.cards) {
		copy[type] = this.method.copyArray(state.cards[type]);
	}
	for (let type in copy) {
		let index = Math.floor(Math.random()*copy[type].length);
		state.truth[type] = copy[type][index];
		copy[type].splice(index, 1);
	}
	for (let type in copy) {
		this.method.randomPick(copy[type], this.state.library);
	}
	this.method.randomPick(state.library, shuffled);
	this.state.library = shuffled;
}