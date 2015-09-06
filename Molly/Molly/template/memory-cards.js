// See cardset-example.js for examples

var MemoryCards = (function() {
	var instaCats = [['Nala', 1], [document.nala, 1],
								['Maru', 2],[document.maru, 2],
								['Grumpy', 3],[document.grumpy, 3],
								['Elfie & Gimli', 4], [document.gimli, 4],
								['Lil Bub', 5], [document.lilbub, 5],
								['Hamilton', 6], [document.hamilton, 6] ];

	function Ctor() {
		this.values = function() {
			return instaCats.slice(); //return copy of values
		};
		this.match = function(str1,str2) {
			return (str1[1]===str2[1]); //match if same initial letter
		};
		this.display = function(val) {
			return val[0]; //display value is just card val
		};
	}

	return Ctor;

})();
