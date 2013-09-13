mongify
=======

mongify your objects.

## how

`> npm install mongify`

```javascript
Mongify = rquire('mongify');

Mongify('523396be6a51026f63000001').should.eql(new Mongodb.ObjectID('523396be6a51026f63000001'));

Mongify("not a mongodb ObjectID").should.eql("not a mongodb ObjectID");

Mongify({a: {b: '523496be6a51026f63000001'}, c:32})
.should.eql({a: {b: new Date('523496be6a51026f63000001')}, c:32});
```

## test
```sh
> npm install
> make test
```
