# incite

Simple, synchronous CLI prompt.

## API

```
require('incite') => (question = '') => String => answer
```

We also supply methods (`init, `prompt`, `save`)
directly from [`prompt-sync`][], for advanced usage. 


## Usage

```js
var prompt = require('incite')

var name = prompt('...name? [y/N] ')

console.log('howdydoodydiddlyooo ' + name)
```

## About

Layer on top of of [`prompt-sync`][], for more functionality 
use [`prompt-sync`][] (either via methods on `incite` or as
it's own module).

## Synchronous by Design

`incite` is synchronous on purpose - in a CLI like environment there's
little need for a prompt to be asynchronous (unless we wanted to do
something in the background, in which case `incite` doesn't match your
requirements). 

## Credit

* Sponsored by nearForm

[`prompt-sync`]: http://npmjs.com/prompt-sync