<template>
    <div ref="mapDiv" class="google-map"></div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader';

export default {
    name: 'GoogleMap',
    props: {
        center: {
            type: Object,
            required: true
        },
        zoom: {
            type: Number,
            default: 13
        },
        markers: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        this.initializeMap();
    },
    methods: {
        async initializeMap() {
            const loader = new Loader({
                apiKey: 'AIzaSyDlMCkqHR2FiFEWbDABtZmP0I9_FiGtwqY',
                version: 'weekly'
            });

            const google = await loader.load();
            const map = new google.maps.Map(this.$refs.mapDiv, {
    center: this.center,
    zoom: this.zoom,
    styles: [
        {
            elementType: "geometry",
            stylers: [{ color: "#242f3e" }]
        },
        {
            elementType: "labels.text.fill",
            stylers: [{ color: "#746855" }]
        },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#242f3e" }]
        },
        {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }]
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }]
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }]
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }]
        },
        {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#373737" }]
        },
        {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#2b3038" }]
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#283442" }]
        },
        {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }]
        }
    ]
});

            const infoWindow = new google.maps.InfoWindow({
                maxWidth: 300
            });

            this.markers.forEach(marker => {
                const markerInstance = new google.maps.Marker({
                    position: marker.position,
                    map: map,
                    title: marker.title,
                    icon: {
                        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
        <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="40" height="38" rx="8" fill="#010306"/>
            <path d="M28 38L20 46L12 38H28Z" fill="#010306"/>
            <text x="20" y="26" text-anchor="middle" font-family="Aspekta200" font-size="35" fill="none" stroke="white" stroke-width="0.4">ø</text>
        </svg>
    `),
                        anchor: new google.maps.Point(20, 46),
                        scaledSize: new google.maps.Size(40, 46)
                    }
                });

                markerInstance.addListener("click", () => {
                    const content = `
        <div class="info-window">
            <img src="${marker.image}" alt="${marker.title}" class="info-window-image"/>
            <h3>${marker.title}</h3>
            <p class="info-window-address">${marker.address}</p>
            <p>${marker.description}</p>
        </div>
    `;

                    infoWindow.setContent(content);
                    infoWindow.open(map, markerInstance);
                });
            });
        }
    }
}
</script>

<style scoped>
.google-map {
    width: 100%;
    height: 100%;
}

:deep(.info-window) {
    padding: 12px;
    color: #242f3e;
}

:deep(.info-window-image) {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
}

:deep(.info-window-address) {
    color: var(--gray400);
    font: 14px Aspekta300, sans-serif;
    margin: 4px 0;
}

:deep(.info-window h3) {
    margin: 0 0 8px;
    font-family: Aspekta600, sans-serif;
    font-size: 18px;
}

:deep(.info-window p) {
    margin: 0 0 12px;
    font-family: Aspekta300, sans-serif;
}
</style>