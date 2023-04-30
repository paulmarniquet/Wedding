<template>
    <div class="myTitle">
        <div class="title" v-motion :initial="{opacity: 0}"
             :enter="{ opacity: 1, transition: { opacity: {duration: 1600}}}">
            <h1>marry wednesday</h1>
        </div>
        <h1 class="hidden-text">
            <span class="hidden-text1" ref="hiddenText1">水</span>
            <span class="hidden-text2" ref="hiddenText2">曜</span>
            <span class="hidden-text3" ref="hiddenText3">日</span>
            <span class="hidden-text4" ref="hiddenText4">に</span>
            <span class="hidden-text5" ref="hiddenText5">結</span>
            <span class="hidden-text6" ref="hiddenText6">婚</span>
            <span class="hidden-text7" ref="hiddenText7">す</span>
            <span class="hidden-text8" ref="hiddenText8">る</span>
        </h1>
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
    methods: {
        showHiddenText() {
        },
        hideHiddenText() {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hidden-text {
    position: fixed;
    top: 10%;
    left: 0;
    width: 60%;
    height: auto;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    text-align: left;
    margin: 10% 20%;
    font-family: "Venarotta", sans-serif;
    font-weight: lighter;
    color: transparent;
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
    border-radius: 50%;
}
</style>