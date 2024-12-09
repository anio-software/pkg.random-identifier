import {createContext} from "@fourtune/realm-js/v0/runtime"

import {randomIdentifierSyncFactory as factory} from "#~synthetic/user/export/randomIdentifierSyncFactory.mts"

const fn = factory(createContext())

export function randomIdentifierSync(length: number) : string {
	return fn(length)
}
