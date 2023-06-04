/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Chat = "chat",
	Defis = "defis",
	Events = "events",
	Messages = "messages",
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

export type ChatRecord = {
	users?: RecordIdString[]
}

export type DefisRecord = {
	image?: string
	date?: IsoDateString
	nombre?: number
	points?: number
	nom_defis?: string
	defis1?: string
	defis2?: string
	users_participation?: RecordIdString[]
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
	user_participation?: RecordIdString[]
}

export type MessagesRecord = {
	chat?: RecordIdString
	users?: RecordIdString
	content?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
	points_defis?: RecordIdString[]
	participation_events?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type ChatResponse<Texpand = unknown> = Required<ChatRecord> & BaseSystemFields<Texpand>
export type DefisResponse<Texpand = unknown> = Required<DefisRecord> & BaseSystemFields<Texpand>
export type EventsResponse<Texpand = unknown> = Required<EventsRecord> & BaseSystemFields<Texpand>
export type MessagesResponse<Texpand = unknown> = Required<MessagesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	chat: ChatRecord
	defis: DefisRecord
	events: EventsRecord
	messages: MessagesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	chat: ChatResponse
	defis: DefisResponse
	events: EventsResponse
	messages: MessagesResponse
	users: UsersResponse
}