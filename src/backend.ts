import Pocketbase from "pocketbase";

var pocketbase_ip=''
if (import.meta.env.MODE === 'production')
    pocketbase_ip='http://193.168.146.10:80'
else 
    pocketbase_ip='http://127.0.0.1:8090'
alert (pocketbase_ip)

export const pb = new Pocketbase(pocketbase_ip) ;
import { type EventsResponse,type EventsRecord, type DefisResponse, Collections, } from '@/pocketbase-types'


    export async function allEvents() {
    const listeEvents = await pb.collection("events").getFullList<EventsResponse>() ;
    return listeEvents;

}


export async function getAllEvents() {
    return await pb.collection('events').getFullList<EventsResponse>({
      sort: 'created'
    });
} 

export async function getAllDefis() {
    return await pb.collection('defis').getFullList<DefisResponse>({
      sort: 'created'
    });
} 


export async function oneIDEvent(id: string) {
  return await pb.collection(Collections.Events).getOne<EventsResponse>(id)
}


export async function oneIDDefis(id: string) {
  return await pb.collection(Collections.Defis).getOne<DefisResponse>(id)
}


export async function createEvent(eventData: EventsRecord) {
  try {
    const response = await pb.collection('events').create(eventData);
    console.log('Événement à été créé avec succès', response);
    return response;
  } catch (error) {
    console.error('Erreur lors de la création', error);
    throw error;
  }
}

