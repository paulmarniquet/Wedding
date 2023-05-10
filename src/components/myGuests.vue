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
            <a href="https://goo.gl/maps/bKQozUkwRBjHt8aa6" class="location">> map</a>

        </div>
        <div class="myAirport" v-motion
             :initial="{opacity: 0,y: 100}"
             :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 300 }}">
            <p>the station</p>
            <hr>
            <h1>Odawara Station</h1>
            <p class="stationJapanese">小田原駅</p>
        </div>
        <div class="Access" v-motion
             :initial="{opacity: 0,y: 100}"
             :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 500 }}">
            <p>the access</p>
            <hr>
            <h1>Tokaido Shinkansen</h1>
            <h2 class="infos">38 minutes from Tokyo Station</h2>
            <h2 class="infos">32 minutes from Shinagawa Station</h2>
            <h2 class="infos">18 minutes from Shin-Yokohama Station</h2>
            <h1>Tokaido Line</h1>
            <h2 class="infos">57 minutes from Yokohama Station</h2>
            <h1>Odakyu Line</h1>
            <h2 class="infos">Romance Car : 75 minutes from Shinjuku Station</h2>
            <h2 class="infos">Express: 92 minutes from Shinjuku Station / 58 minutes from Machida Station</h2>
            <a href="https://www.hotoku.co.jp/access/" class="location">> hotoku access</a>
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
    margin-left: 15%;
}

.location {
    margin: 0;
    font-family: "Roboto Thin", sans-serif;
    font-size: 17px;
    letter-spacing: 2px;
    color: rgb(44, 62, 80, 0.8);
    text-decoration: none;
}

.location:hover {
    color: rgba(188, 0, 45, 255);
}

.myAirport {
    position: relative;
    width: 25%;
    height: auto;
    left: 38%;
    margin-top: 4%;
}

.Access {
    position: relative;
    width: 30%;
    height: auto;
    left: 58%;
    margin-top: 4%;
}

.Access h1 {
    font-family: "Venarotta", sans-serif;
    font-size: 30px;
    font-weight: 1000;
    margin: 20px 0;
}

.Access h2 {
    font-family: "Roboto Regular", sans-serif;
    font-size: 17px;
    font-weight: lighter;
    color: darkgrey;
    margin: 15px 0;
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

.Access hr {
    width: 18%;
    height: 1.5px;
}

@media (max-width: 415px) {

    .informations {
        margin-top: 30%;
    }

    .informations p {
        font-size: 12px;
    }

    .myVenue {
        position: relative;
        width: 25%;
        height: auto;
        margin-left: 15%;
    }

    .myAirport {
        position: relative;
        width: 25%;
        height: auto;
        left: 38%;
        margin-top: 4%;
    }

    .Access {
        width: 40%;
        left: 57%;
        margin-top: 7%;
    }

    .informations h1 {
        font-size: 20px;
    }

    .Access h1 {
        font-family: "Venarotta", sans-serif;
        font-size: 15px;
        font-weight: 1000;
        margin: 0
    }

    .Access h2 {
        font-family: "Roboto Regular", sans-serif;
        font-size: 8px;
        font-weight: lighter;
        color: darkgrey;
        margin: 5px 0;
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

@media (min-width: 768px ) and (max-width: 1024px) {

    .informations {
        margin-top: 30%;
    }

    .Access {
        width: 40%;
        left: 54%;
        margin-top: 7%;
    }

    .stationJapanese {
        font-size: 12px;
        letter-spacing: 2px;
    }

    .infos {
        font-size: 15px;
    }
}


</style>