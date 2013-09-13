var Mongify = require('./');
var Mongodb = require('mongodb');
var Lab = require('lab');
var Chai = require('chai');

Chai.should();
var it = Lab.test;

Lab.experiment('mongify', function(){
	it('should convert an ObjectID string to the Mongodb.ObjectID', function(done){
		Mongify('523396be6a51026f63000001').should.eql(new Mongodb.ObjectID('523396be6a51026f63000001'));
		done();
	}),

	it('should keep the string "a message" unchanged', function(done){
		Mongify('a message').should.eql("a message");
		done();
	});

	
});