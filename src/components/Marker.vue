
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

<template>
    <div id="map"></div>
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
    const uluru = { lat: 47.510356, lng: 6.798466 };

    const map = new window.google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 12,
            center: uluru,
        }
    );

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";

    const infowindow = new window.google.maps.InfoWindow({
        content: contentString,
        ariaLabel: "Uluru",
    });

    const marker = new window.google.maps.Marker({
        position: uluru,
        map,
        title: "Uluru (Ayers Rock)",
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




