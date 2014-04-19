
/**
 * Test dependencies.
 */

var assert = require('assert');
var deus = require('..');

describe('arguments type', function() {

	it('returns function with both arguments', function() {
		var fn = deus('string', 'object', function(name, data) {
			assert.equal(data.foo, 'bar');
			assert.equal(name, 'olivier');
		});
		fn('olivier', {
			foo: 'bar'
		});
	});

	it('returns function with only second argument', function() {
		var fn = deus('string', 'object', function(name, data) {
			assert.equal(data.foo, 'bar');
			assert.equal(name, undefined);
		});
		fn({
			foo: 'bar'
		});
	});

	it('keep arguments order', function() {
		var fn = deus('string', 'object', function(name, data) {
			assert.equal(data.foo, 'bar');
			assert.equal(name, 'olivier');
		});
		fn({
			foo: 'bar'
		}, 'olivier');
	});
	
});

// describe('arguments instance', function() {

// 	var instance, Test;
// 	beforeEach(function() {
// 		Test = function Test() {
// 			this.foo = 'bar';
// 		};
// 		instance = new Test();
// 	});

// 	it('returns function with both arguments', function() {
// 		var fn = deus('string', Test, function(name, data) {
// 			assert.equal(data.foo, 'bar');
// 			assert.equal(name, 'olivier');
// 		});
// 		fn('olivier', instance);
// 	});

// 	it('returns function with only second argument', function() {
// 		var fn = deus('string', 'object', function(name, data) {
// 			assert.equal(data.foo, 'bar');
// 			assert.equal(name, undefined);
// 		});
// 		fn(instance);
// 	});
// });
