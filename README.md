# @anio-js-foundation/create-random-identifier

Attempts to create a random identifier of any length using the Crypto API `crypto.getRandomValues`, falling back to `Math.random`.

```js
import createRandomIdentifier from "@anio-js-foundation/create-random-identifier"

const identifier = createRandomIdentifier(16) // create a random identifier of length 16

console.log(identifier) // 84b6af1d1572de65
```
