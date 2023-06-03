import Pocketbase from "pocketbase";

var pocketbase_ip=''
if (import.meta.env.MODE === 'production')
    pocketbase_ip='http://193.168.146.10:80'
else 
    pocketbase_ip='http://127.0.0.1:8090'
alert (pocketbase_ip)

export const pb = new Pocketbase(pocketbase_ip) ;
import { type EventsResponse,type DefisResponse, Collections, } from '@/pocketbase-types'


export async function getallEvents() {
    const events = await pb.collection('events').getFullList<EventsResponse>();
    return events}

    export async function allEvents() {
    const listeEvents = await pb.collection("events").getFullList<EventsResponse>() ;
    return listeEvents;
}

export async function oneIDEvent(id: string) {
  return await pb.collection(Collections.Events).getOne<EventsResponse>(id)
}

