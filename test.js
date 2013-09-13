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
	}),

	it('should keep a Mongo.ObjectID unchanged', function(done){
		Mongify(new Mongodb.ObjectID('523396be6a51026f63000001')).should.eql(new Mongodb.ObjectID('523396be6a51026f63000001'));
		done();
	}),

	it('should convert an object with an ISO date string to an object with Date', function(done){
		var anObject = {
			content: { },
			createdAt: '523396be6a51026f63000001'
		}
		Mongify(anObject).should.eql({
			content: { },
			createdAt: new Mongodb.ObjectID('523396be6a51026f63000001')
		});

		done();
	}),

	it('should return a different object then the one it was converting', function(done){
		var anObject = {
			content: { },
			createdAt: '523396be6a51026f63000009'
		}
		Mongify(anObject).should.not.equal(anObject);

		done();
	});
});