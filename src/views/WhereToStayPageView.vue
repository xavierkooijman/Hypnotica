<template>
    <section class="hotels-section">
        <h1 class="outline-title">WHERE TO STAY</h1>
        <div class="hotels-content">
            <!-- First Block -->
            <article class="transport-block">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">martas Hotel Berlin-Mitte</h2>
                        <p class="section-description">
                            This boutique hotel is housed in a beautiful historic building on a quiet street in the
                            heart of Berlin's Mitte district, close to many galleries, restaurants and tourist
                            attractions. The martas Hotel Berlin Mitte is within walking distance of the Hackescher
                            Markt cultural district, the UNESCO-listed Museum Island, Alexanderplatz, the historic Unter
                            den Linden boulevard, the Brandenburg Gate and the Friedrichstrasse shopping street.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at martas Hotel Berlin-Mitte</button>
                </div>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f3/50/dc/exterior-view-top-vch.jpg?w=700&h=-1&s=1"
                    class="transport-image" alt="Martas Hotel Berlin" loading="lazy" />
            </article>

            <!-- Middle Block -->
            <article class="transport-block">
                <img src="https://static.toiimg.com/thumb/msid-44859223,width=1200,height=900/44859223.jpg"
                    class="transport-image" alt="nhow Berlin" loading="lazy" />
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">nhow Berlin</h2>
                        <p class="section-description">
                            Located right on the bank of the Spree, the nhow Berlin is just a short distance from Berlin
                            Tegel Airport and Berlin Central Station. The nhow Berlin has many nearby attractions.
                            Guests will find that the Oberbaumbrücke, the Arena Badeschiff, and the Ratibortheater are
                            all within walking distance.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at nhow Berlin</button>
                </div>
            </article>

            <!-- Third Block -->
            <article class="transport-block">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">Hotel Palace Berlin</h2>
                        <p class="section-description">
                            The Hotel Palace Berlin, situated in the bustling City West district, offers luxurious rooms
                            and suites designed for both business and leisure travelers. With over 2,600 square meters
                            of event space and 18 conference rooms, sixteen of which have natural daylight, the hotel is
                            perfect for events of all sizes.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at Hotel Palace Berlin</button>
                </div>
                <img src="https://static-new.lhw.com/HotelImages/Final/LW0734/lw0734_88698852_720x450.jpg"
                    class="transport-image" alt="Hotel Palace Berlin" loading="lazy" />
            </article>

            <!-- Map Section -->
            <section class="map-section">
                <h2 class="section-title">Hotel Locations</h2>
                <div class="map-container">
                    <GoogleMap :center="mapCenter" :markers="hotelMarkers" :zoom="13" />
                </div>
            </section>
        </div>
    </section>
</template>

<script>
import GoogleMap from '../components/GoogleMaps.vue'

export default {
    name: 'WhereToStayPage',
    components: {
        GoogleMap
    },
    data() {
    return {
        mapCenter: { lat: 52.5200, lng: 13.4050 },
        hotelMarkers: [
            {
                position: { lat: 52.5244, lng: 13.4049 },
                title: "martas Hotel Berlin-Mitte",
                description: "This boutique hotel is housed in a beautiful historic building on a quiet street in the heart of Berlin's Mitte district...",
                address: "Linienstraße 136, 10115 Berlin, Germany",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f3/50/dc/exterior-view-top-vch.jpg?w=700&h=-1&s=1",
                bookingLink: "#"
            },
            {
                position: { lat: 52.5027, lng: 13.4446 },
                title: "nhow Berlin",
                description: "Located right on the bank of the Spree...",
                address: "Stralauer Allee 3, 10245 Berlin, Germany",
                image: "https://static.toiimg.com/thumb/msid-44859223,width=1200,height=900/44859223.jpg",
                bookingLink: "#"
            },
            {
                position: { lat: 52.5054, lng: 13.3387 },
                title: "Hotel Palace Berlin",
                description: "The Hotel Palace Berlin, situated in the bustling City West district...",
                address: "Budapester Str. 45, 10787 Berlin, Germany",
                image: "https://static-new.lhw.com/HotelImages/Final/LW0734/lw0734_88698852_720x450.jpg",
                bookingLink: "#"
            }
        ]
    }
}
}
</script>

<style scoped>
.hotels-section {
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

.hotels-content {
    display: flex;
    flex-direction: column;
    gap: 96px;
    margin: 96px 0;
    width: 100%;
}

.transport-block {
    display: flex;
    align-items: center;
    gap: 96px;
    width: 100%;
    padding: 0 96px;
}

.content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 50%;
}

.text-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.section-title {
    color: var(--mainWhite);
    font: 64px Aspekta600, sans-serif;
    margin: 0;
}

.section-description {
    color: var(--gray100);
    font: 24px Aspekta300, sans-serif;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 0;
}

.action-button {
    align-self: flex-start;
    border-radius: 12px;
    border: 1px solid var(--gray400);
    padding: 16px 32px;
    font: 20px Aspekta400, sans-serif;
    color: var(--mainWhite);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 240px;
}

.action-button:hover {
    background: var(--gray400);
}

.transport-image {
    flex: 1;
    width: 50%;
    border-radius: 16px;
    object-fit: cover;
    height: 400px;
}

.map-section {
    padding: 0 96px;
}

.map-container {
    width: 100%;
    height: 600px;
    border-radius: 16px;
    overflow: hidden;
    margin-top: 32px;
}

@media (max-width: 991px) {
    .outline-title {
        font-size: 4rem;
        -webkit-text-stroke: 2px var(--gray200);
    }

    .hotels-content {
        gap: 48px;
        margin: 48px 0;
    }

    .transport-block {
        flex-direction: column;
        gap: 32px;
        padding: 0;
    }

    .content-wrapper,
    .transport-image {
        width: 100%;
    }

    .section-title {
        font-size: 40px;
    }

    .section-description {
        font-size: 18px;
    }

    .action-button {
        padding: 12px 20px;
        font-size: 16px;
        min-width: auto;
    }

    .map-container {
        height: 400px;
    }

    .map-section {
        padding: 0 24px;
    }
}
</style>