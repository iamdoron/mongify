mongify
=======

mongify your objects.

[![Build Status](https://travis-ci.org/iamdoron/mongify.png?branch=master)](https://travis-ci.org/iamdoron/mongify)

## how
```sh
> npm install mongify
```

```javascript
Mongify = rquire('mongify');

Mongify('523396be6a51026f63000001').should.eql(new Mongodb.ObjectID('523396be6a51026f63000001'));

Mongify("not a mongodb ObjectID").should.eql("not a mongodb ObjectID");

Mongify({a: {b: '523496be6a51026f63000001'}, c:32})
.should.eql({a: {b: new Mongodb.ObjectID('523496be6a51026f63000001')}, c:32});
```

## why
Suppose you are building an API, and you receive a JSON. You want to have a query by ID:
```javascript
collection.find(Mongify(JSON.parse(query)), function(document){ /* do something*/ });
```


## test
```sh
> npm install
> make test
```
