
var cards,game,gui; //global vars can been inspected in console, making debugging easier
function go() {
	// you'll need to study the modules to understand how to plug them in...
	cards = new MemoryCards();
	game  = new MemoryGame(cards);
	gui   = new MemoryGUI('memorygame', game); //'memorygame' is the id of div where gui should be inserted'

};

window.addEventListener("load",go);
