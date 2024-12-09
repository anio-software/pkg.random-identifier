# @aniojs/random-ident

Attempts to create a random identifier of any length using the Crypto API `crypto.getRandomValues`, falling back to `Math.random`.

```js
import createRandomIdentifier from "@aniojs/random-ident"

const identifier = createRandomIdentifier(16) // create a random identifier of length 16

console.log(identifier) // 84b6af1d1572de65
```
