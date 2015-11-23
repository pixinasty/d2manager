

game.run ();

game.create.canvas =
{
	id: 'hud',
	layer: 10
};

game.mode.main = function ()
{
	game.canvas.background.draw.scene = [];
	game.log = 'main mode';
	game.canvas.hud.draw.style =
	{
		color: '#fff'
	};
	game.canvas.hud.draw.box (0, 0, 0.1, 0.1, true, 'panel_up');
};

game.mode.loading = function ()
{
	game.canvas.background.draw.sprite =
	{
		h: 100,
		src: 'logo.png',
		w: 100,
		x: (game.canvas.width/2 - 50) / game.canvas.width,
		y: (game.canvas.height/2 - 50) / game.canvas.height
	};

	game.mode.change = 'main';
};

game.mode.type = 'loading';