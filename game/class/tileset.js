export class Tileset {
	constructor(url) {
		this.image = new Image();
		this.image.src = url;
		this.largeur = this.image.width/32;
		this.image.onload = function() {
			if(!this.complete) throw new Error("Erreur de chargement du tileset nommé \"" + url + "\".");
		}
	}

	drawTile = (index, context, xPosition, yPosition) => {
		let tileRow = Math.ceil(index / this.largeur);
		let tileCol = index % this.largeur;
		if (tileCol === 0) tileCol = this.largeur;
		let xSource = (tileCol - 1)*32;
		let ySource = (tileRow - 1)*32;
		context.drawImage(this.image, xSource, ySource, 32, 32, xPosition, yPosition, 32, 32);
	}
}