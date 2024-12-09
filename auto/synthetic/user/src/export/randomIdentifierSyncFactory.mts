import {implementation} from "#~src/randomIdentifierSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

declare function randomIdentifierSync(
	length: number
) : string

/**
 * @brief
 * Create an instance of the function 'randomIdentifierSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'randomIdentifierSync'.
 */
export function randomIdentifierSyncFactory(context: RuntimeWrappedContextInstance) : typeof randomIdentifierSync {
	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return function randomIdentifierSync(length: number) : string {
		return implementation(local_context, length)
	}
}
