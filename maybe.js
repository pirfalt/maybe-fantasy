module.exports = Maybe

function Maybe(val, nothing) {
	if (!(this instanceof Maybe))
		return new Maybe(val)

	this.nothing = nothing ? true : false
	this.value = nothing ? null : val
}

Maybe.of = function(val) {
	return new Maybe(val, false)
}

Maybe.nothing = function() {
	return new Maybe(null, true)
}

var p = Maybe.prototype
p.chain = function(fn) {
	// Should test if fn returns a Maybe
	return this.nothing
		? this
		: fn(this.value)
}

p.map = function(fn) {
	return this.nothing
		? this
		: new Maybe(fn(this.value))
}

p.join = function() {
	// Should check that this.value is a Maybe
	return this.nothing
		? this
		: this.value
}

p.isNothing = function() {
	return this.nothing ? true : false
}

p.isSomething = function() {
	return this.nothing ? false : true
}
