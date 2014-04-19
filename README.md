deus
====
 
  > arguments convention over configuration

  A little bit of functional programming to have a single function implementation whatever the arguments exists or their order.

	
## Installation

with [component](http://github.com/component/component):

   $ component install bredele/deus

with [nodejs](http://nodejs.org):

   $ npm install deus


## Usage

  It's a bit complicated to explain with words, so hopefully the example below speaks for itself.

create a function with deus:

```js
// specify the arguments types (have to be different)
var init = deus('string', 'object', function(name, data) {
	console.log('name:', name);
	console.log('data:', data.github);
});
```

deus preserves the arguments:

```js
init('olivier', { github : 'bredele'});
// => name: olivier
// => data: bredele
```

deus doesn't care if an argument is missing:

```js
init({ github : 'bredele'});
// => name: undefined
// => data: bredele
```

deus allows you to switch the arguments order:

```js
init({ github : 'bredele'}, 'olivier');
// => name: olivier
// => data: bredele
```

  Deus decreases the number of decisions the developer needs to make because the implementation is the same whatever the arguments are. The returned function is flexible and yet simple. 
