export function randomIdentifierSync(len) {
	let str = ""
	let bytes = []

	if (typeof crypto === "object" && typeof crypto.getRandomValues === "function") {
		bytes = new Uint8Array(len)

		crypto.getRandomValues(bytes)
	} else {
		for (let i = 0; i < len; ++i) {
			// will never exceed 255
			bytes.push(Math.floor(Math.random() * 256))
		}
	}

	for (let i = 0; i < len; ++i) {
		str += (bytes[i]).toString(16).slice(0, 1)
	}

	// sanity check output
	if (str.length !== len) {
		throw new Error(`randomIdentifierSync(${len}) failed for unknown reasons.`)
	}

	return str
}
