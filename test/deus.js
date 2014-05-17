
/**
 * Test dependencies.
 */

var assert = require('assert');
var deus = require('..');

describe('arguments type', function() {

	describe('2', function() {

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

		it('should preserve the other arguments', function() {
			var fn = deus('function', 'object', function(name, data, other) {
				assert.equal(other.name, 'bredele');
			});
			fn({
				foo: 'bar'
			}, {
				name: 'bredele'
			})
		});

		it('should preserve the arguments length', function() {
			var fn = deus('function', 'object', function(name, data, other) {
				assert.equal(arguments.length, 3);
				assert.equal(other, 'bredele');
			});
			fn(undefined, undefined, 'bredele');
			//fn(undefined, undefined, undefined, 'bredele');
			// after 2 arguments, we should preserve the order
		});

	});

	// describe('> 2', function() {

	// 	it('returns function with all arguments', function() {
	// 		var fn = deus('string', 'object', 'boolean', function(name, data, exist) {
	// 			assert(exist);
	// 			assert.equal(name, 'olivier');
	// 			assert.equal(data.foo, 'bar');
	// 		});
	// 		fn('olivier', {
	// 			foo: 'bar'
	// 		}, true);
	// 	});

	// 	it('returns function with only second argument', function() {
	// 		var fn = deus('string', 'object', 'boolean', function(name, data, exist) {
	// 			assert.equal(data.foo, 'bar');
	// 			assert.equal(name, undefined);
	// 			assert(exist);
	// 		});

	// 		fn({
	// 			foo: 'bar'
	// 		}, true);
	// 	});


	// });

	
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
