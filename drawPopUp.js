export function drawPopUp(ctx, canva, popUp) {
	ctx.fillStyle = 'white';
	ctx.fillRect(((canva.width / 2) - 64), ((canva.height / 2) - 64), 160, 96);
	ctx.lineWidth = 3;
	ctx.strokeStyle = 'blue';
	ctx.strokeRect(((canva.width / 2) - 64), ((canva.height / 2) - 64), 160, 96);
	ctx.fillStyle = 'black';
	ctx.textAlign = 'center';
	ctx.fillText(popUp.content, (((canva.width / 2)-64) + 80), (((canva.height / 2) - 64) + 48));
	if (popUp.list.length > 0) {
		for (let i = 0, l = popUp.list.length; i < l; i++) {
			ctx.fillText(popUp.list[i].title, (((canva.width/2)-64)+((160/ l)*i)+((160-(l*20))/(l+1))), (((canva.height/2)-64)+64) )
			if (popUp.selected === i) {
				ctx.lineWidth = 2;
				ctx.strokeStyle = 'blue';
			}
			else {
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = 'black';
			}
			ctx.strokeRect((((canva.width/2)-64)+((160/ l)*i)+((160-(l*20))/(l+1))-10), (((canva.height/2)-64)+64-8), 20, 10)
		}
	}
}