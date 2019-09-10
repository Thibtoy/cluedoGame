import {Character} from './character.js';
import {Player} from './player.js';
import {playerTurn} from './playerTurn.js';
import {drawPopUp} from './drawPopUp.js';
import {Game} from './game.js';

const game = new Game();

game.loadMapAndData();
game.setRoomIndex();

const DIRECTION = {
	"DOWN": 0,
	"LEFT": 1,
	"RIGHT": 2,
	"TOP": 3
}

game.state.characterMap.addCharacter(new Character("mmeLeblanc", 9, 0, DIRECTION.DOWN));
game.state.characterMap.addCharacter(new Character("mmeLeblanc", 0, 17, DIRECTION.RIGHT));
// frontUpstairs.addCharacter(new Character("characterTileset", 14, 0, 4, 0));
// frontUpstairs.addCharacter(new Character("characterTileset", 23, 6, 10, 5));
// frontUpstairs.addCharacter(new Character("characterTileset", 23, 19, 4, 5));
// frontUpstairs.addCharacter(new Character("characterTileset", 7, 24, 7, 3));

game.state.players.push(new Player(game.state.characterMap.state.characters[0], 'Thibault'));
game.state.players.push(new Player(game.state.characterMap.state.characters[1], 'Arnaud'));


game.initGame();
game.cardDistribution();

console.log(game);
window.onload = function() {
	const state = game.state;
	const canva = document.getElementById('Canva');
	const ctx = canva.getContext('2d');

	canva.width = state.groundMap.getWidth()*32;
	canva.height = state.groundMap.getHeight()*32;

	setInterval(() => {
		state.groundMap.drawMap(ctx);
		state.wallMap.drawMap(ctx);
		state.upstairMap.drawMap(ctx);
		state.characterMap.drawMap(ctx);
		if (game.state.popUp.visibility) {
			drawPopUp(ctx, canva, game.state.popUp);
		}	
	}, 30);

	playerTurn(game.state.players[0], game);
}