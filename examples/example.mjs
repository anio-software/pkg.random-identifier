import {
	randomIdentifierSync
} from "../products/project/dist/default/index.min.mjs"

const identifier = randomIdentifierSync(16) // create a random identifier of length 16

console.log(identifier) // 84b6af1d1572de65
