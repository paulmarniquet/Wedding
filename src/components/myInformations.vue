<template>
    <div class="phrase">
        <p>Celebrate love with us at the breathtaking Odawara Castle as Zoe and Taisuke tie the knot.</p>
        <P>Join us for an unforgettable wedding experience filled with joy, laughter, and cherished moments !</p>
    </div>
    <div class="informations">
        <div class="disposition">
            <p v-motion
               :initial="{opacity: 0,y: 100}"
               :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 800 }}" class="theplace">the date</p>
            <hr>
            <div v-motion
                 :initial="{opacity: 0,y: 100}"
                 :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 50 }}">
                <h1 class="date">Saturday</h1>
                <h1 class="date">October 28</h1>
                <h1 class="date">2023</h1>
            </div>
        </div>
        <div class="disposition2">
            <p v-motion
               :initial="{opacity: 0,y: 100}"
               :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 800 }}" class="theplace">the place</p>
            <hr>
            <div v-motion
                 :initial="{opacity: 0,y: 100}"
                 :visibleOnce="{ opacity: 1, y: 0,transition: { duration: 1000, delay: 50 }}">
                <h1 class="place">Hotoku</h1>
                <h1 class="place">Ninomiya</h1>
                <h1 class="place">Shrine</h1>
                <div class="linked">
                <a href="https://goo.gl/maps/FTX8EaGManJKhRmq8" class="location">8-10 Jonai, Odawara Kanagawa 250-0014</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myInformations'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.informations {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 7%;
}

.phrase {
    position: relative;
    margin-top: 10%;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Roboto Regular", sans-serif;
    font-size: 22px;
    letter-spacing: 3px;
    background-image: url("../assets/blue.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 25%;
}

.phrase p {
    position: relative;
    width: 80%;
    height: auto;
    margin: 0;
    color: rgba(0,0,0, 0.7);
    text-align: center;
}

.theplace {
    font-family: "Roboto Regular", sans-serif;
    font-size: 18px;
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

.disposition {
    position: relative;
    width: 25%;
    height: 100%;
    margin-left: 25%;
}

.disposition2 {
    position: relative;
    width: 25%;
    height: auto;
    left: 60%;
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
    color: rgba(188,0,45,255);
}

h1 {
    font-family: "Venarotta", sans-serif;
    font-size: 40px;
    font-weight: 1000;
    margin: 10px 0;
}

.linked {
    position: relative;
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 415px) {
    .phrase p {
        font-size: 12px;
    }

    .phrase {
        text-align: center;
        margin-top: 20%;
        width: 250px;
        height: 250px;
        margin-left: calc(50% - 125px);
        background-size: 50%;
    }

    .informations p{
        font-size: 12px;
    }

    .informations h1{
        font-size: 20px;
    }

    .informations a {
        font-size: 12px;
    }

    .disposition {
        margin-left: 20%;
        width: 60%;
    }

    .disposition2 {
        left: 53%;
        width: 45%;
    }

    .linked {
        width: 95%;
    }
}

@media (min-width: 768px ) and (max-width: 1024px) {
    .phrase p {
        font-size: 25px;
    }

    .phrase {
        text-align: center;
        margin-top: 20%;
        width: 600px;
        height: 400px;
        margin-left: calc(50% - 300px);
    }

    .disposition2 {
        left: 51%;
        width: 50%;
    }

    .disposition {
        margin-left: 20%;
        width: 60%;
    }
}


</style>