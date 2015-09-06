var MemoryGUI = (function () {
	function GuiCtor(container,game) {
		game.gui(this); // link game to this gui

		this.reset = function() {
		for (var i = 0; i < game.size(); i++) {
			var div = document.createElement('div');
			div.setAttribute('id', i);
			div.classList.add('faceDown');
			div.addEventListener('click', function() { var id = this.getAttribute('id');
		game.lift((id*1));
	});
			document.getElementById(container).appendChild(div);
		}
	};

	this.show = function(where,displayString) {
			var showCard = document.getElementById(where);
			showCard.classList.remove('faceDown');
			showCard.classList.add('faceUp');
			showCard.innerHTML = displayString;
		};

	this.removeSoon = function(whereArr) {
		window.setTimeout(function() {
			whereArr.forEach(function(where) {
				var removeCard = document.getElementById(where);
				removeCard.innerHTML = '';
				removeCard.classList.remove('faceUp');
				removeCard.classList.add('removed');
			});
		}, 1000);
	};
	this.hideSoon = function(whereArr) {
		window.setTimeout(function() {
			whereArr.forEach(function(where) {
				var hideCard = document.getElementById(where);
				hideCard.innerHTML = '';
				hideCard.classList.remove('faceUp');
				hideCard.classList.add('faceDown');
			});
		}, 1000);
	};
	this.reset();
}
return GuiCtor;
})();
