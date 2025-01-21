<template>
    <section class="travel-section">
        <h1 class="outline-title">TRAVEL</h1>
        <div class="travel-content">
            <!-- First Block -->
            <article class="transport-block">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">Berlin's public transport (BVG)</h2>
                        <p class="section-description">
                            To make every Hypnøtica fanatic's life a bit easier, BVG's public
                            transport network takes you stress-free to all corners of the
                            city. Whether you prefer to do a bit of sightseeing whilst
                            travelling or to get to the Hypnøtica locations, the tram, bus,
                            ferry or metro will get to your destination the quickest. Plan
                            your route via the BVG website and hop on whenever you are ready
                            to move to the next Hypnøtica location.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Plan your route with BVG</button>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/147e6ead757a34a94be2a02b0db0059cc625b1a5bf6a3794f3ddecbb8513a363"
                    class="transport-image" alt="Berlin public transport system" loading="lazy" />
            </article>

            <!-- Middle Block with Image First -->
            <article class="transport-block">
                <img src="https://www.dbfahrplan.com/assets/images/fahrplanauskunft.jpg" class="transport-image"
                    alt="Berlin accommodation options" loading="lazy" />
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">Deutsche Bahn</h2>
                        <p class="section-description">
                            Deutsche Bahn provides a sustainable and hassle-free way to travel from all parts of Germany
                            with many connections to Berlin. By choosing the train, you avoid the stress of parking in
                            the busy city center, leaving you free to relax on your way to Hypnøtica. Deutsche Bahn
                            makes your travels to Hypnøtica convenient, eco-friendly, and stress-free, even for the ones
                            who love making last minute plans.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Plan your route with Deutsche Bahn</button>
                </div>
            </article>

            <!-- Third Block -->
            <article class="transport-block">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h2 class="section-title">Flying to Berlin</h2>
                        <p class="section-description">
                            Berlin Brandenburg Airport is the main international airport serving Berlin, the capital of Germany. Located in Schönefeld, a municipality just south of Berlin, the airport offers excellent connections to the city, making it a convenient visitors outside of Germany.
                        </p>
                    </div>
                    <button class="action-button" tabindex="0">Book your flight with Skyscanner</button>
                </div>
                <img src="https://www.aviation24.be/wp-content/uploads/2019/06/American-TXL-PHL.jpg"
                    class="transport-image" alt="BVG mobile app interface" loading="lazy" />
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