// See cardset-example.js for examples

var MemoryCards = (function() {
	var instaCats = [['Nala', 1], ['nala', 1],
				['Maru', 2],['maru', 2],
				['Grumpy', 3],['grumpy', 3],
				['Gimli', 4], ['gimli', 4],
				['LilBub', 5], ["lilbub", 5],
				['Hamilton', 6], ["hamilton", 6] ];

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
