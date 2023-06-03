/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Defis = "defis",
	Events = "events",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type DefisRecord = {
	image?: string
	date?: IsoDateString
	nombre?: number
	points?: number
	nom_defis?: string
	defis1?: string
	defis2?: string
}

export type EventsRecord = {
	date?: IsoDateString
	football?: boolean
	image?: string
	nom_event?: string
	lieu_event?: string
	membre_actuel?: number
	prive?: boolean
	membre_max?: number
	description?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type DefisResponse = Required<DefisRecord> & BaseSystemFields
export type EventsResponse = Required<EventsRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	defis: DefisRecord
	events: EventsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	defis: DefisResponse
	events: EventsResponse
	users: UsersResponse
}