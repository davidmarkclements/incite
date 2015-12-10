# incite

Simple, synchronous CLI prompt.

## API

```
require('incite') => (question = '') => String => answer
```

## Usage

```js
var prompt = require('incite')

var name = prompt('...name? ')

console.log('howdydoodydiddlyooo ' + name)
```

## Synchronous by Design

`incite` is synchronous on purpose - in a CLI like environment there's
little need for a prompt to be asynchronous (unless we wanted to do
something in the background, in which case `incite` doesn't match your
requirements). 

## Credit

* Sponsored by nearForm