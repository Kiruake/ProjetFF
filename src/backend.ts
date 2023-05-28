import Pocketbase from "pocketbase";
import type { EventsResponse } from '../pocketbase-types';
export const pb = new Pocketbase("http://127.0.0.1:8090") ;

export async function getallEvents() {
    const events = await pb.collection('events').getFullList<EventsResponse>();
    return events}

