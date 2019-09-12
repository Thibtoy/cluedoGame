export function setEvidenceList() {
	for (let i = 0, l = this.state.players.length; i < l; i++) {
		let player = this.state.players[i];
			for (let type in player.state.evidenceList) {
				for (let j = 0, k = player.state.evidenceList[type].length; j < k; j++) {
					for (let m = 0, n = player.state.hand.length; m < n; m++) {
						if(player.state.evidenceList[type][j].name === player.state.hand[m]) {
						player.state.evidenceList[type][j].evidence = 2;
					}
				}
			}
		}
	}
}