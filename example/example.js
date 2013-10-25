var maybe = require('../')
var log = console.log.bind(console, '=>')


var something = maybe.of('Hello ').map(function(v) { return v + 'world!' })

log(something.isSomething())
// => true

log(something.value)
// => 'Hello world!'


var nothing = maybe.nothing('Hello ').map(function(v) { return v + 'world!' })

log(nothing.isSomething())
// => false

log(nothing.value)
// => null  (never use this, it not a value!)

