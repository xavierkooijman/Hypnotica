<template>
    <section class="travel-section">
        <h1 class="outline-title">WHERE TO STAY</h1>
        <div class="travel-content">
            <!-- First Block -->
            <article class="transport-block">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">Numa Berlin</h2>
                        <p class="section-description">
                            Numa Berlin offers rooms and suites in Berlin, 800 metres from Kurfürstendamm. Free WiFi is
                            available throughout the property. The hotel has family rooms. The rooms and suites are
                            fitted with air conditioning, a flat-screen TV with satellite channels, a fridge, a coffee
                            machine, a rain shower, a hairdryer and a wardrobe. At the hotel every room has a private
                            bathroom with free toiletries.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at Numa Berlin</button>
                </div>
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/13/ad/d9/drift-rooms-apartments.jpg?w=500&h=-1&s=1"
                    class="transport-image" alt="Berlin public transport system" loading="lazy" />
            </article>

            <!-- Middle Block with Image First -->
            <article class="transport-block">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f3/50/dc/exterior-view-top-vch.jpg?w=700&h=-1&s=1" class="transport-image"
                    alt="Berlin accommodation options" loading="lazy" />
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">martas Hotel Berlin-Mitte</h2>
                        <p class="section-description">
                            This boutique hotel is housed in a beautiful historic building on a quiet street in the heart of Berlin's Mitte district, close to many galleries, restaurants and tourist attractions. The martas Hotel Berlin Mitte is within walking distance of the Hackescher Markt cultural district, the UNESCO-listed Museum Island, Alexanderplatz, the historic Unter den Linden boulevard, the Brandenburg Gate and the Friedrichstrasse shopping street. The hotel provides excellent public transport links to all areas of Berlin, with nearby S-Bahn (city rail) and U-Bahn (underground) stations.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at martas Hotel Berlin-Mitte</button>
                </div>
            </article>

            <!-- Third Block -->
            <article class="transport-block">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">nhow Berlin</h2>
                        <p class="section-description">
                            Located right on the bank of the Spree, the nhow Berlin is just a short distance from Berlin Tegel Airport and Berlin Central Station. The nhow Berlin has many nearby attractions. Guests will find that the Oberbaumbrücke, the Arena Badeschiff, and the Ratibortheater are all within walking distance. However, this hotel offers more than the usual in terms of in-house entertainment. Immerse yourself in art and music at our in-house concerts, exhibitions and fashion shows.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at nhow Berlin</button>
                </div>
                <img src="https://static.toiimg.com/thumb/msid-44859223,width=1200,height=900/44859223.jpg"
                    class="transport-image" alt="BVG mobile app interface" loading="lazy" />
            </article>

            <article class="transport-block">
                <img src="https://static-new.lhw.com/HotelImages/Final/LW0734/lw0734_88698852_720x450.jpg" class="transport-image"
                    alt="Berlin accommodation options" loading="lazy" />
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">Hotel Palace Berlin</h2>
                        <p class="section-description">
                            The Hotel Palace Berlin, situated in the bustling City West district, offers luxurious rooms and suites designed for both business and leisure travelers. Equipped with modern technical equipment and free Wi-Fi, guests can stay connected while enjoying the hotel's peaceful ambiance. With over 2,600 square meters of event space and 18 conference rooms, sixteen of which have natural daylight, the hotel is perfect for events of all sizes. The hotel's prime location also makes it an excellent base to explore Berlin's cultural and historical landmarks.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book a room at Hotel Palace Berlin</button>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TravelPage'
}
</script>

<style scoped>
.travel-section {
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

.travel-content {
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
    font: 62px Aspekta600, sans-serif;
    margin: 0;
}

.section-description {
    color: var(--gray100);
    font: 20px Aspekta250, sans-serif;
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

@media (max-width: 991px) {
    .outline-title {
        font-size: 4rem;
        -webkit-text-stroke: 2px var(--gray200);
    }

    .travel-content {
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
}
</style>