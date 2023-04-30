<template>
    <div id="app">
        <custom-cursor
            :targets="[ 'p', 'h1' ]"
            :circleColor="'#fff'"
            :circleColorHover="'#2f2f2f'"
            :dotColor="'rgba(188,0,45,0.7)'"
            :dotColorHover="'rgba(188,0,45,255)'"
            :hoverSize="1.3"
        ></custom-cursor>
        <myHeader/>
        <myTitle/>
        <myInformations/>
        <myPicture/>
        <myGuests/>
        <myFooter/>
    </div>
</template>

<script>
import myHeader from "@/components/myHeader.vue";
import myTitle from "@/components/myTitle.vue";
import myInformations from "@/components/myInformations.vue";
import myPicture from "@/components/myPicture.vue";
import myGuests from "@/components/myGuests.vue";
import myFooter from "@/components/myFooter.vue";
import CustomCursor from "@/components/CustomCursor.vue";

export default {
    name: 'App',
    components: {
        CustomCursor,
        myHeader,
        myTitle,
        myInformations,
        myPicture,
        myGuests,
        myFooter
    }
}
</script>

<style>
@font-face {
    font-family: "Venarotta";
    src: local("Venarotta"),
    url("assets/Venarotta-Regular.ttf") format("truetype");
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    cursor: none;
    background-image: url("assets/background.png");
    background-repeat: no-repeat;
    background-position: bottom right;
}

#app p, h1 {
    user-select: none;
}

body::-webkit-scrollbar{
    display: none;
}
</style>
