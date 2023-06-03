<template>
    <div>
        <div v-for="message in messages" :key="message.id">
            {{ message.sender }}: {{ message.text }}
        </div>

        <input v-model="newMessage" type="text" placeholder="Entrez votre message" />
        <button @click="sendMessage">Envoyer</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Message {
    id: string;
    sender: string;
    text: string;
}

export const messages = ref<Message[]>([]);
export const newMessage = ref('');

export const sendMessage = () => {
    const message: Message = {
        id: generateUniqueId(),
        sender: 'Utilisateur',
        text: newMessage.value,
    };
    messages.value.push(message);
    newMessage.value = '';
};

const generateUniqueId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};
</script>
