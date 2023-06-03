<template>
    <div class="mt-16 h-[600px]" id="map"></div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const map = ref(null);

        onMounted(() => {
            const google = window.google;
            const mapOptions = {
                center: { lat: 47.510356, lng: 6.798466 }, 
                zoom: 12, 
            };
            map.value = new google.maps.Map(document.getElementById('map'), mapOptions);
        });

        return {
            map,
        };
    },
};
</script>

