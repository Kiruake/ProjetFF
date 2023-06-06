

<template>
    <div class="mt-14 h-[690px] lg:h-[720px] lg:mt-0 " id="map"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

declare global {
    interface Window {
        google: any;
        initMap: () => void;
    }
}

function initMap(): void {
    const arena = { lat: 47.510356, lng: 6.798466 };

    const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 12,
            center: arena,
        }
    );

    

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 class="text-2xl text-center underline pb-2">Arena</h1>' +
        '<div id="bodyContent">' +
        '<p class="text-lg"><b>Lieu</b>,: Montbéliard' +
        '<p class="text-lg"><b>Date</b>: 24/06' +
        '<p class="text-lg"><b>Sport</b>: Football' +
        '<p class="text-lg pb-2"><b>Membres</b>: 6/10'  +
        '<a class="font-semibold mt-2 flex justify center pl-7 border-md text-lg  border-2 " href="/events/356ki36p1zmcslp">Rejoindre <a> ' +
        "</div>" 
        "</div>";

    const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
    });

    const marker = new window.google.maps.Marker({
        position: arena,
        map,
        title: "Arena",
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
        });
    });
}

onMounted(() => {
    if (window.google) {
        initMap();
    } else {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDPwVIFcSXJl6aPuZTxl_juBsZqsefjQho&callback=initMap';
        script.defer = true;
        script.async = true;
        script.onerror = () => {
            console.error('Erreur lors du chargement de l\'API Google Maps.');
        };
        document.head.appendChild(script);
    }
});




</script>




