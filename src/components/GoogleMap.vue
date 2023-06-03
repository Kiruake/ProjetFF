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


function initMap(): void {
  const myLatLng = { lat: -25.363, lng: 131.044 };

  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 4,
      center: myLatLng,
    }
  );

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};

</script>

