<template>
    <div class="picture">
        <div class="place">
        <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800 }}">o</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: -10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 10 }}">d</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 20 }}">a</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: -10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 30 }}">w</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 40 }}">a</h1>
            <h1 v-motion
            :initial="{opacity: 0,x: -10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 50 }}">r</h1>
            <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 60 }}">a</h1>

            <div class="japaneseTitle">
            <h1 v-motion
                :initial="{opacity: 0,x: 0}"
                :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 2000 }}">小</h1>
            <h1 v-motion
                :initial="{opacity: 0,x: 0}"
                :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 2050 }}">田</h1>
            <h1 v-motion
                :initial="{opacity: 0,x: 0}"
                :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 2100 }}">原</h1>
            <h1 v-motion
                :initial="{opacity: 0,x: 0}"
                :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 2150 }}">市</h1>
            </div>
            </div>
        <img src="../assets/odawara.jpg">
    </div>
</template>

<script>
export default {
    name: 'myPicture'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.picture {
    margin-top: 15%;
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.picture img {
    margin: 0;
    position: relative;
    width: 50%;
    height: 50%;
    right: 270px;
}

.place {
    position: relative;
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    position: relative;
    font-size: 80px;
    text-align: left;
    font-family: "Hypereality", sans-serif;
    margin: 0;
    color: rgba(0,0,0, 0.7);
}

.japaneseTitle {
    position: absolute;
    width: 10%;
    height: auto;
    margin-right: 25%;
    z-index: -991;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 1);
}

.japaneseTitle h1 {
    font-size: 60px;
    text-align: left;
    font-family: "Hypereality", sans-serif;
    margin: 0;
    color: rgba(255, 255,255, 0.1);
}

@media (max-width: 415px) {
    h1 {
        font-size: 35px;
    }

    .japaneseTitle h1 {
        font-size: 30px;
        right: 10%;
    }

    .picture img {
        width: 50%;
        height: auto;
        right: 10%;
    }
}

</style>