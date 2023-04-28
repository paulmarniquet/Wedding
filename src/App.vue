<template>
    <div id="app">
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

export default {
    name: 'App',
    components: {
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
}

#app p, h1 {
    user-select: none;
}
</style>
