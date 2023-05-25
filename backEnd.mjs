import Pocketbase from "pocketbase";
const pb = new Pocketbase("http://127.0.0.1:8090") ;

try {
    const records = await pb.collection('events').getFullList();
    console.log(JSON.stringify(records));
} catch (e) {
    console.error(e);
}
