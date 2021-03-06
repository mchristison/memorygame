var MemoryGUI = (function () {
	function GuiCtor(container,game) {
		game.gui(this); // link game to this gui

		var _reset = this.reset = function() {
			var containerEl = document.getElementById(container);

			containerEl.innerHTML = '';

		for (var i = 0; i < game.size(); i++) {
			var div = document.createElement('div');
			div.setAttribute('id', i);
			div.classList.add('faceDown');
			div.addEventListener('click', function() { var id = this.getAttribute('id');
		game.lift((id*1));
		showCard.innerHTML = "<img src='photos/" + displayString + ".jpg'>";
	});
			containerEl.appendChild(div);
		}
		var button = document.createElement('button');
		button.addEventListener('click', _reset);
		button.innerHTML = 'Start Over';
		containerEl.appendChild(button);
	};

	this.show = function(where,displayString) {
			var showCard = document.getElementById(where);
			showCard.classList.remove('faceDown');
			showCard.classList.add('faceUp');
			showCard.innerHTML = "<img src='photos/" + displayString + ".jpg'>";
		};

	this.removeSoon = function(whereArr) {
		window.setTimeout(function() {
			whereArr.forEach(function(where) {
				var removeCard = document.getElementById(where);
				removeCard.innerHTML = '';
				removeCard.classList.remove('faceUp');
				removeCard.classList.add('removed');
			});
		}, 680);
	};
	this.hideSoon = function(whereArr) {
		window.setTimeout(function() {
			whereArr.forEach(function(where) {
				var hideCard = document.getElementById(where);
				hideCard.innerHTML = '';
				hideCard.classList.remove('faceUp');
				hideCard.classList.add('faceDown');
			});
		}, 680);
	};
	this.reset();
}
return GuiCtor;
})();
