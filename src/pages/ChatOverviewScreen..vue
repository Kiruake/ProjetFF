<!-- <script setup lang="ts">
import {pb} from '@/backend'
import { newMessage } from '@/components/Cards/TchatUser.vue';
import {ChatResponse, MessagesResponse, UsersResponse} from '@/pocketbase-types'
import { ref } from 'vue';

const currentUser = ref();
const username = ref("");


function getChatWithUsers() {
    try {
        return pb.collection('chat').getFullList<ChatResponse>(200, {
            sort: 'created',
            expand: 'users',
            filter: `users ~ '${username.id}'`,
        });
    }
    catch (e) {

        console.error();
        (e);
        return [];
    }
}


onMount(async () => {
    allChat = await getChatWithUsers();

    pb.collection('chat').subscribe('*', async (e) => {
        allChat = await getChatWithUsers();
    });
})

onDestroy(() => {
    pb.collection('chat').unsubscribe('*');
})


function onMount(arg0: () => Promise<void>) {
throw new Error('Function not implemented.');
}


async function createChatWithUser() {
    try {
        const otherUser = await pb.collection('users').getFirstListItem<UsersResponse>(`email = '${newUserEmail}'`);

        await pb.collection('chat').create({
            users: [currentUser.id, otherUser.id]
        });
    }
    catch (e) {
        errorMessage(e);
    }
}


function errorMessage(e: any) {
throw new Error('Function not implemented.');
}


function getAllMessages() {
    try {
        return pb.collection("messages").getFullList<MessagesResponse>(200, {
            sort: "created",
            filter: `chat = '${chatId}'`,
        });
    }
    catch (e) {
        errorMessage(e);
        return [];
    }
}

onMount(async () => {
    allMessages = await getAllMessages();

    pb.collection("messages").subscribe("*", async (e) => {
        allMessages = await getAllMessages();
    });
});

onDestroy(() => {
    pb.collection("messages").unsubscribe("*");
});


function onDestroy(arg0: () => void) {
throw new Error('Function not implemented.');
}

async function sendMessage() {
    try {
        await pb.collection("messages").create({
            chat_id: chatId,
            author_id: $currentUser.id,
            content: newMessage,
        });
    } catch (e) {
        errorMessage(e);
    }
}


</script> -->