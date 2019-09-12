import {loadMapAndData} from './loadMapAndData.js';
import {setRoomIndex} from './setRoomIndex.js';
import {setPlayers} from './setPlayers.js';
import {displayGame} from './displayGame.js';
import {drawPopUp} from './drawPopUp.js';
import {playerTurn} from './playerTurn.js';
import {fillInfos} from './fillInfos.js';
import {setEvidenceList} from './setEvidenceList.js';

export class Method {
	constructor(that) {
		this.displayGame = displayGame.bind(that);
		this.drawPopUp = drawPopUp.bind(that);
		this.fillInfos = fillInfos.bind(that);
		this.loadMapAndData = loadMapAndData.bind(that);
		this.playerTurn = playerTurn.bind(that);
		this.setEvidenceList = setEvidenceList.bind(that);
		this.setPlayers = setPlayers.bind(that);
		this.setRoomIndex = setRoomIndex.bind(that);
	}			
}