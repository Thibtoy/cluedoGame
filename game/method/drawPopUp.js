export function drawPopUp() {
	let state = this.state;
	state.ctx.fillStyle = 'white';
	state.ctx.fillRect(((state.canva.width / 2) - 64), ((state.canva.height / 2) - 64), 160, 96);
	state.ctx.lineWidth = 3;
	state.ctx.strokeStyle = 'blue';
	state.ctx.strokeRect(((state.canva.width / 2) - 64), ((state.canva.height / 2) - 64), 160, 96);
	state.ctx.fillStyle = 'black';
	state.ctx.textAlign = 'center';
	state.ctx.fillText(state.popUp.content, (((state.canva.width / 2)-64) + 80), (((state.canva.height / 2) - 64) + 48));
	if (state.popUp.list.length > 0) {
		for (let i = 0, l = state.popUp.list.length; i < l; i++) {
			state.ctx.fillText(state.popUp.list[i].title, (((state.canva.width/2)-64)+((160/ l)*i)+((160-(l*20))/(l+1))), (((state.canva.height/2)-64)+64) )
			if (state.popUp.selected === i) {
				state.ctx.lineWidth = 2;
				state.ctx.strokeStyle = 'blue';
			}
			else {
				state.ctx.lineWidth = 0.5;
				state.ctx.strokeStyle = 'black';
			}
			state.ctx.strokeRect((((state.canva.width/2)-64)+((160/ l)*i)+((160-(l*20))/(l+1))-10), (((state.canva.height/2)-64)+64-8), 20, 10)
		}
	}
}