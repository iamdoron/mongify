(function(){
	var Traverse = require('traverse');
	var MongoDb = require('mongodb');

	var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

	module.exports = mongify;

	function mongify(raw){
		return Traverse.map(raw, function(value){
			if (typeof value === 'string'){
				this.update(mongifyString(value));
			}
		});
	};	

	function mongifyString(raw){
		if (isValidID(raw)) {
			return new MongoDb.ObjectID(raw);
		}
		else {
			return raw;
		}
	}

	function isValidID(id){
		if (id.length !== 24 || typeof id !== 'string') {
			return false;
		}
		return checkForHexRegExp.test(id);
	}
})()
