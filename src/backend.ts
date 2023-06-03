import Pocketbase from "pocketbase";
import type { EventsResponse } from '@/pocketbase-types';

var pocketbase_ip=''
if (import.meta.env.MODE === 'production')
    pocketbase_ip='http://193.168.146.10:80'
else 
    pocketbase_ip='http://127.0.0.1:8090'
alert (pocketbase_ip)

export const pb = new Pocketbase(pocketbase_ip) ;

export async function getallEvents() {
    const events = await pb.collection('events').getFullList<EventsResponse>();
    return events}

