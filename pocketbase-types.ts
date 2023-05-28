/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Users = "users",
	Event = "events",
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

export type EventsRecord = {
	nom_event: string
	lieu_event: string
	membre_actuel?: number
	membre_max?: number
	prive:boolean
	football:boolean
}


export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	event: EventsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	event: EventsRecord
	users: UsersResponse
}