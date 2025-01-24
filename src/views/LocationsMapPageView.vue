<template>
    <section class="locations-section">
        <h1 class="outline-title">LOCATIONS</h1>
        <div class="map-container">
            <GoogleMap :center="mapCenter" :markers="clubMarkers" :zoom="13" />
        </div>
    </section>
</template>

<script>
import GoogleMap from '../components/GoogleMaps.vue'

export default {
    name: 'LocationsMapPage',
    components: {
        GoogleMap
    },
    data() {
        return {
            mapCenter: { lat: 52.5200, lng: 13.4050 }, // Berlin center
            clubMarkers: [
                {
                    position: { lat: 52.5097, lng: 13.4577 },
                    title: "Berghain",
                    description: "Legendary techno club housed in a former power plant, known for its striking industrial architecture and world-class sound system.",
                    address: "Am Wriezener Bhf, 10243 Berlin",
                    image: "https://i0.wp.com/wonderlandinrave.com/wp-content/uploads/2022/01/urn-newsml-dpa.com-20090101-200827-99-329795-v3-s2048.jpeg?resize=618%2C468&ssl=1"
                },
                {
                    position: { lat: 52.4973, lng: 13.4530 },
                    title: "Tresor",
                    description: "Historic techno club in a former power plant basement, featuring three floors of electronic music.",
                    address: "Köpenicker Str. 70, 10179 Berlin",
                    image: "https://lh3.googleusercontent.com/ci/AL18g_SUAajrDcNGrUpUBcVXmTOxH1E42zktrUNrsWsxWj0uPGdf0l5szt-NYfKfmubREqEFesF5MQ"
                },
                {
                    position: { lat: 52.5007, lng: 13.4519 },
                    title: "Watergate",
                    description: "Two-floor club on the Spree River with panoramic windows and an LED ceiling installation.",
                    address: "Falckensteinstraße 49, 10997 Berlin",
                    image: "https://i.guim.co.uk/img/media/708e45be1c21eeef2792a3885b3c81c0a26268c0/0_497_7499_4500/master/7499.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5ccca1a9b7fc73959f332f37b4c43690"
                },
                {
                    position: { lat: 52.5369, lng: 13.4217 },
                    title: "://about blank",
                    description: "Underground club with indoor and outdoor spaces, known for marathon techno parties.",
                    address: "Markgrafendamm 24c, 10245 Berlin",
                    image: "https://novafuture.blog/wp-content/uploads/2019/06/aboutblank_pic1.jpg"
                },
                {
                    position: { lat: 52.5112, lng: 13.4549 },
                    title: "Sisyphos",
                    description: "Sprawling former dog food factory turned techno wonderland with multiple dance floors and outdoor spaces.",
                    address: "Hauptstraße 15, 10317 Berlin",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNu4dYQwakbUU1bKRVHpOjba7TrXNKU-K4w&s"
                }
            ]
        }
    }
}
</script>

<style scoped>
.locations-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 48px;
    overflow-x: hidden;
    position: relative;
}

.outline-title {
    font-size: clamp(6rem, 10vw, 10rem);
    line-height: 1.2;
    font-family: Aspekta800, sans-serif;
    color: transparent;
    -webkit-text-stroke: 3px var(--gray200);
    margin: 48px auto;
    text-align: center;
    width: max-content;
    white-space: nowrap;
}

.map-container {
    width: 100%;
    height: 700px;
    border-radius: 16px;
    overflow: hidden;
    margin: 32px 0 96px;
}

@media (max-width: 991px) {
    .outline-title {
        font-size: 4rem;
        -webkit-text-stroke: 2px var(--gray200);
    }

    .map-container {
        height: 500px;
        margin: 24px 0 48px;
    }
}
</style>