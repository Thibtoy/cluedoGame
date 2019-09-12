import {loadMapAndData} from '../method/loadMapAndData.js';
import {setRoomIndex} from '../method/setRoomIndex.js';
import {setPlayers} from '../method/setPlayers.js';
import {displayGame} from '../method/displayGame.js';
import {drawPopUp} from '../method/drawPopUp.js';
import {playerTurn} from '../method/playerTurn.js';
import {fillInfos} from '../method/fillInfos.js';
import {setEvidenceList} from '../method/setEvidenceList.js';
import {copyArray} from '../method/copyArray.js';
import {randomPick} from '../method/randomPick.js';
import {initGame} from '../method/initGame.js';
import {cardDistribution} from '../method/cardDistribution.js';
import {showPopUp} from '../method/showPopUp.js';
import {removePopUp} from '../method/removePopUp.js';

export class Method {
	constructor(that) {
		this.cardDistribution = cardDistribution.bind(that);
		this.displayGame = displayGame.bind(that);
		this.drawPopUp = drawPopUp.bind(that);
		this.fillInfos = fillInfos.bind(that);
		this.initGame = initGame.bind(that);
		this.loadMapAndData = loadMapAndData.bind(that);
		this.playerTurn = playerTurn.bind(that);
		this.removePopUp = removePopUp.bind(that);
		this.setEvidenceList = setEvidenceList.bind(that);
		this.setPlayers = setPlayers.bind(that);
		this.setRoomIndex = setRoomIndex.bind(that);
		this.showPopUp = showPopUp.bind(that);
		this.copyArray = copyArray;
		this.randomPick = randomPick;
	}		
}