<template>
    <div id="app">
        <custom-cursor
            :targets="[ 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'button', 'input', 'textarea', 'span', 'div', 'li', 'ul', 'ol', 'img' ]"
            :circleColor="'#fff'"
            :circleColorHover="'#2f2f2f'"
            :dotColor="'#2f2f2f'"
            :dotColorHover="'red'"
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
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    cursor: none;
}

#app p, h1 {
    user-select: none;
}
</style>
