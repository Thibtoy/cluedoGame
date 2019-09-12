export function playerTurn() {
	let state = this.state;
	let player = state.players[state.turn];
	var selected = 0;
	this.method.fillInfos();

	var accusationList = new Array();

	for (let type in player.state.evidenceList) {
		let list = [];
		for (let i = 0, l = player.state.evidenceList[type].length; i < l; i++) {
			if (player.state.evidenceList[type][i] != 1) {
				list.push({
					title: player.state.evidenceList[type][i].name, 
					method: () => {
						player.state.accusation[type] = player.state.evidenceList[type][i];
					}
				});
			}
		}
		accusationList.push(list);
	}

	const list = [
		{
			title:'Enter',
			method: () => {
				let room = this.state.roomIndex['room'+this.state.roomToEnter];
				let placed = false;
				selected = 0;
				for (let i = 0, l = room.length; i < l; i++) {
					if(room[i].empty && !placed) {
						let state = player.state.character.state;
						room[i].empty = false;
						placed = true;
						state.x = room[i].x;
						state.y = room[i].y;
						state.direction = 0;
					}
				}
				nextTurn();
			},
		},
		{
		 	title:'Continue',
		 	method: () => {
		 		selected = 0
		 		window.addEventListener('keydown', mouve);
		 	}
		},
		{
			title: 'Accuse',
			method: () => {
				let room = this.state.roomIndex['room'+this.state.roomToEnter]
				let placed = false;
				selected = 0
				for (let i = 0, l = room.length; i < l; i++) {
					if(room[i].empty && !placed) {
						let state = player.state.character.state;
						state.x = room[i].x;
						state.y = room[i].y;
						state.direction = 0;
					}
				}
				action(list);
				window.addEventListener('keydown', choice);
			},
		}
	];

	const throwDices = event => {
		if(event.keyCode === 13) {
			this.removePopUp();
			player.throwDice(2);
			this.showPopUp('Jet de dés: '+ player.state.dices[0] +', '+ player.state.dices[1]+'.');
			window.removeEventListener('keydown', throwDices);
			window.addEventListener('keydown', startTurn);
		}
	};

	const startTurn = event => {
		if (event.keyCode === 13) {
			this.removePopUp();
			window.removeEventListener('keydown', startTurn);
			window.addEventListener('keydown', mouve);
		}
	};

	const action = (list, selection) => {
		this.showPopUp('What do you want to do?', list, selected);
	}

	const select = (increase, list) => {
		if (increase) {
			selected++
			if (selected >= list.length) selected = 0;
		}
		else {
			selected--
			if (selected < 0) selected = list.length-1;
		}
		action(list, selected);
	}

	const choice = event => {
		switch (event.keyCode) {
			case 13:
				window.removeEventListener('keydown', choice);
				this.removePopUp();
				list[selected].method();
				break;
			case 37:
				select(false, list); 
				break;
			case 39:
				select(true, list);
				break;
		}
	}

	const mouve = event => {
		let character = player.state.character;
		if (event.keyCode === 13) {
			window.removeEventListener('keydown', mouve);
			nextTurn();
		}
		else if (player.state.mouve > 0) {
			character.mouve(event.keyCode, this.state.characterMap, this, (result, state) => {
				if(result) {
					player.state.mouve -= 1;
					if (state != 0) {
						window.removeEventListener('keydown', mouve);
						this.state.roomToEnter = state;
						action(list);
						window.addEventListener('keydown', choice);
					}
				}
			});
		}
		return false;
	}

	const nextTurn = () => {
		player.state.mouve = 0;
		this.state.turn++
		if (this.state.turn >= this.state.players.length) this.state.turn = 0;
		this.method.playerTurn();
	}

	this.showPopUp('tour de' + player.state.name);
	window.addEventListener('keydown', throwDices);
};