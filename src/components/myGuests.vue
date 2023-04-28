<template>
    <div class="informations">
        <div class="myVenue">
                <p>the venue</p>
                <hr>
                <h1>123</h1>
                <h1>Fujino</h1>
                <h1>Wataru</h1>
                <h1>Kyoto</h1>
        </div>
        <div class="myAirport">
                <p>the airport</p>
                <hr>
                <h1>Kyoto</h1>
                <h1>International</h1>
                <h1>Airport</h1>
        </div>
        <div class="myLodging">
                <p>the lodging</p>
                <hr>
                <h1>Sotono</h1>
                <h2 class="infos">We recommend that guests stay near King's Beach, CA on the north shore of Lake Tahoe near or at Tahoe Vistana Inn.</h2>
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
    font-size: 20px;
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
    left: 39%;
}

.myLodging {
    position: relative;
    width: 20%;
    height: auto;
    left: 65%;
}

.infos {
    font-family: "Roboto Regular", sans-serif;
    font-size: 17px;
    font-weight: lighter;
    color: darkgrey;
}

</style>