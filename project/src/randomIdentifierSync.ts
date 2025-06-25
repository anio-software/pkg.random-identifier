import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

export function __implementation(
	contextOptions: EnkoreJSRuntimeContextOptions,
	length: number
) : string {
	const context = createContext(contextOptions, 0)

	let str = ""
	let bytes = []

	context.log.trace(`generating ${length} random bytes`)

	if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
		// @ts-ignore:next-line
		bytes = new Uint8Array(length)

		// @ts-ignore:next-line
		crypto.getRandomValues(bytes)
	} else {
		for (let i = 0; i < length; ++i) {
			// will never exceed 255
			bytes.push(Math.floor(Math.random() * 256))
		}
	}

	for (let i = 0; i < length; ++i) {
		str += (bytes[i]).toString(16).slice(0, 1)
	}

	// sanity check output
	if (str.length !== length) {
		throw new Error(`randomIdentifierSync(${length}) failed for unknown reasons.`)
	}

	return str
}
