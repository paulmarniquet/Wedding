<template>
    <div class="myTitle">
        <div class="title" v-motion :initial="{opacity: 0}" :enter="{ opacity: 1, transition: { opacity: {duration: 1600}}}">
            <h1>marry wednesday.</h1>
        </div>
        <div class="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myTitle'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myTitle {
    position: relative;
    top: 30%;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    position: relative;
    width: 50%;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
h1 {
    position: relative;
    font-size: 110px;
    text-align: left;
    margin: 10% 20%;
    font-family: "Venarotta", sans-serif;
    font-weight: lighter;
}

.circles {
    position: relative;
    width: 50%;
    height: auto;
    margin: 12% auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    margin: 1%;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
}
</style>