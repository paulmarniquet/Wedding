<template>
    <div class="informations">
        <div class="myVenue" v-motion
             :initial="{opacity: 0,y: 100}"
             :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 100 }}">
            <p>the venue</p>
            <hr>
            <h1>8-10 Jonai, Odawara</h1>
            <h1>Kanagawa 250-0014</h1>
            <p class="stationJapanese">報徳二宮神社</p>

        </div>
        <div class="myAirport" v-motion
             :initial="{opacity: 0,y: 100}"
             :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 300 }}">
            <p>the station</p>
            <hr>
            <h1>Odawara Station</h1>
            <p class="stationJapanese">小田原駅</p>
        </div>
        <div class="myLodging" v-motion
             :initial="{opacity: 0,y: 100}"
             :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 500 }}">
            <p>the lodging</p>
            <hr>
            <h1>Odawara Ryokan</h1>
            <p class="stationJapanese">小田原旅館</p>
            <h2 class="infos">We recommend that guests stay near to Odawara Castle.</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: 'myGuests'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.informations {
    position: relative;
    margin-top: 15%;
    width: 100%;
    height: auto;
}

.informations p {
    font-family: "Roboto Regular", sans-serif;
    font-size: 18px;
}

.informations h1 {
    font-family: "Venarotta", sans-serif;
    font-size: 40px;
    font-weight: 1000;
    margin: 10px 0;
}

hr {
    position: relative;
    width: 14%;
    height: 2px;
    border: none;
    background-color: gainsboro;
    margin-left: 0;
    bottom: 12px;
}

.myVenue {
    position: relative;
    width: 25%;
    height: auto;
    margin-left: 20%;
}

.myAirport {
    position: relative;
    width: 25%;
    height: auto;
    left: 42%;
    margin-top: 4%;
}

.myLodging {
    position: relative;
    width: 20%;
    height: auto;
    left: 65%;
    margin-top: 4%;
}

.infos {
    font-family: "Roboto Regular", sans-serif;
    font-size: 17px;
    font-weight: lighter;
    color: darkgrey;
}

.stationJapanese {
    font-family: "Roboto Regular", sans-serif;
    font-size: 20px;
    font-weight: lighter;
    color: #2c3e50;
    letter-spacing: 30px;
}

.myLodging hr {
    width: 18%;
    height: 1.5px;
}

@media (max-width: 415px) {

    .informations p{
        font-size: 12px;
    }

    .myLodging {
        width: 100px;
    }

    .informations h1{
        font-size: 20px;
    }

    .informations a {
        font-size: 12px;
    }

    .stationJapanese {
        font-size: 10px;
        letter-spacing: 2px;
    }

    .infos {
        font-size: 8px;
    }
}


</style>