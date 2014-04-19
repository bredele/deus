
/**
 * Module dependencies
 * @api private
 */

var index = require('indexof');


/**
 * Expose 'deus'
 */

module.exports = deus;


/**
 * deus constructor.
 * @api public
 */

function deus(one, two, fn) {
  var types = [one, two];
  var args = [,,];
  var type = function(arg) {
    var idx = index(types, typeof arg);
    if(idx > -1) args[idx] = arg;
  };

  return function(uno, dos) {
    type(uno);
    type(dos);
    fn.apply(this, args);
  };
}
