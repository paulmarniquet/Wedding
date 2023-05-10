<template>
    <div class="myTitle">
        <div class="title" v-motion :initial="{opacity: 0}"
             :enter="{ opacity: 1, transition: { opacity: {duration: 2000, delay: 3000}}}">
            <h1>save the date</h1>
        </div>
        <div class="hidden-text" v-motion :initial="{opacity: 1}"
             :enter="{ opacity: 0, transition: { opacity: {duration: 300, delay: 2400}}}">
            <span v-motion :initial="{opacity: 0}"
                  :enter="{ opacity: 1, transition: { opacity: {duration: 100, delay: 1000}}}">日</span>
            <span v-motion :initial="{opacity: 0}"
                  :enter="{ opacity: 1, transition: { opacity: {duration: 100, delay: 1100}}}">付</span>
            <span v-motion :initial="{opacity: 0}"
                  :enter="{ opacity: 1, transition: { opacity: {duration: 100, delay: 1200}}}">を</span>
            <span v-motion :initial="{opacity: 0}"
                  :enter="{ opacity: 1, transition: { opacity: {duration: 100, delay: 1300}}}">保</span>
            <span v-motion :initial="{opacity: 0}"
                  :enter="{ opacity: 1, transition: { opacity: {duration: 100, delay: 1400}}}">存</span>
        </div>
        <div class="circles">
            <div class="circle" style="background-color: rgba(255, 251, 150, 0.3)"></div>
            <div class="circle" style="background-color: rgba(255, 219, 150, 0.4)"></div>
            <div class="circle" style="background-color: rgba(255, 177, 150, 0.5)"></div>
            <div class="circle" style="background-color: rgba(255, 153, 150, 0.6)"></div>
            <div class="circle" style="background-color: rgba(253, 26, 19, 0.5)"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myTitle',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hidden-text {
    width: 20%;
    height: auto;
    position: absolute;
    font-size: 25px;
    font-family: "Venarotta", sans-serif;
    font-weight: 100;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    top: 22%;
}

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
    width: 100%;
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
    border-radius: 50%;
}

@media (max-width: 415px) {
    h1 {
        font-size: 60px;
    }
    span {
        font-size: 20px;
    }
    .hidden-text {
        width: 50%;
        top: 20%;
    }
    .circle {
        margin: 1%;
        width: 10px;
        height: 10px;
    }
}

</style>