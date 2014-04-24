
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
 * Make two arguments function flexible.
 *
 * @param {String} one 
 * @param {String} two
 * @return {Function}
 * @api public
 */

function deus(one, two, fn) {
  var types = [one, two];
  var args = [,,];
  var type = function(arg) {
    var idx = index(types, typeof arg);
    if(idx > -1 && !args[idx]) args[idx] = arg;
    else args.splice(args.length,0,arg);
  };

  return function() {
    for(var i = 0, l = arguments.length; i < l; i++) {
      type(arguments[i]);
    }
    return fn.apply(this, args);
  };
}
