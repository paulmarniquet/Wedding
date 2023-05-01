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
}

</style>