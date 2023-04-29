<template>
    <div class="picture">
        <div class="place">
        <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800 }}"
        >k</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: -10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 10 }}">y</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 20 }}">o</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: -10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 30 }}">t</h1>
        <h1 v-motion
            :initial="{opacity: 0,x: 10}"
            :visibleOnce="{ opacity: 1, x: 0,transition: { duration: 800, delay: 40 }}">o</h1>
        </div>
        <img src="../assets/example.jpg">
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
}

.picture img {
    margin: 0;
    position: relative;
    width: 50%;
    height: auto;
    right: 350px;
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
    font-size: 110px;
    text-align: left;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-family: 'Playfair Display', serif;

}

</style>