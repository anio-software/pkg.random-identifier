# @anio-software/pkg.random-identifier

Attempts to create a random identifier of any length using the Crypto API `crypto.getRandomValues`, falling back to `Math.random`.

```js
import {
	randomIdentifierSync
} from "@anio-software/pkg.random-identifier"

const identifier = randomIdentifierSync(16) // create a random identifier of length 16

console.log(identifier) // 84b6af1d1572de65
```
