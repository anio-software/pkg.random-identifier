import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

export default {
	realm: {
		name: "js",
		type: "package"
	},

	autogenerate: {
		...generateFactoryFiles({
			source_file: "src/randomIdentifierSync.mts",
			export_name: "randomIdentifierSync",
			destination: "src/export"
		})
	}
}
