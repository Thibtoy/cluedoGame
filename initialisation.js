import {Game} from './game/game.js';

const game = new Game();

game.method.loadMapAndData();
game.method.setRoomIndex();
game.method.setPlayers();
game.method.initGame();
game.method.cardDistribution();
game.method.setEvidenceList();

console.log(game);
window.onload = game.method.displayGame();