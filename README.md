# @aniojs/random-ident

Attempts to create a random identifier of any length using the Crypto API `crypto.getRandomValues`, falling back to `Math.random`.

```js
import {
	randomIdentifierSync
} from "@aniojs/random-ident"

const identifier = randomIdentifierSync(16) // create a random identifier of length 16

console.log(identifier) // 84b6af1d1572de65
```
