export function playerTurn(player, game) {
	var selected = 0;

	var accusationList = new Array();

	for (let type in game.state.cards) {
		let list = [];
		for (let i = 0, l = game.state.cards[type].length; i < l; i++) {
			list.push({
				title: game.state.cards[type][i], 
				method: () => {
					player.state.accusation[type] = game.state.cards[type][i];
				}
			});
		}
		accusationList.push(list);
	}

	const list = [
		{
			title:'Enter',
			method: () => {
				let room = game.state.roomIndex['room'+game.state.roomToEnter];
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
				let room = game.state.roomIndex['room'+game.state.roomToEnter]
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
			game.removePopUp();
			player.throwDice(2);
			game.showPopUp('Jet de dés: '+ player.state.dices[0] +', '+ player.state.dices[1]+'.');
			window.removeEventListener('keydown', throwDices);
			window.addEventListener('keydown', startTurn);
		}
	};

	const startTurn = event => {
		if (event.keyCode === 13) {
			game.removePopUp();
			window.removeEventListener('keydown', startTurn);
			window.addEventListener('keydown', mouve);
		}
	};

	const action = (list, selection) => {
		game.showPopUp('What do you want to do?', list, selected);
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
				game.removePopUp();
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
			character.mouve(event.keyCode, game.state.characterMap, game, (result, state) => {
				if(result) {
					player.state.mouve -= 1;
					if (state != 0) {
						window.removeEventListener('keydown', mouve);
						game.state.roomToEnter = state;
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
		game.state.turn++
		if (game.state.turn >= game.state.players.length) game.state.turn = 0;
		playerTurn(game.state.players[game.state.turn], game);
	}

	game.showPopUp('tour de' + player.state.name);
	window.addEventListener('keydown', throwDices);
};