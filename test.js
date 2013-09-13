var Mongify = require('./');
var Mongodb = require('mongodb');
var Lab = require('lab');
var Chai = require('chai');

Chai.should();
var it = Lab.test;

Lab.experiment('mongify', function(){
	it('should convert an ObjectID string (24hex string) to a Mongodb.ObjectID', function(done){
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

	it('should convert an object with a 24-hex string to an ObjectID', function(done){
		var anObject = {
			content: { },
			_id: '523396be6a51026f63000001'
		}
		Mongify(anObject).should.eql({
			content: { },
			_id: new Mongodb.ObjectID('523396be6a51026f63000001')
		});

		done();
	}),

	it('should return a different object then the one it was converting', function(done){
		var anObject = {
			content: { },
			_id: '523396be6a51026f63000009'
		}
		Mongify(anObject).should.not.equal(anObject);

		done();
	}),

	it('should convert an object with nested 24-hex strings to an object with ObjectIDs', function(done){
		var anObject = {
			number: 3441,
			_id: new Mongodb.ObjectID(),
			content: { content_id: '523396be6a51026f63000009', i: {am: {losing: {it_id: '523396be6a51026f63000009', yep: "i am"}}}},
			super_id: '523396be6a51026f63000009'
		}
		Mongify(anObject).should.eql({
			number: 3441,
			_id: anObject._id,
			content: { content_id: new Mongodb.ObjectID('523396be6a51026f63000009'), i: {am: {losing: {it_id: new Mongodb.ObjectID('523396be6a51026f63000009'), yep: "i am"}}}},
			super_id: new Mongodb.ObjectID('523396be6a51026f63000009')
		});

		done();
	});
});