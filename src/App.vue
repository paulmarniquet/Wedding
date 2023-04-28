<template>
    <div id="app">
    <myHeader/>
    <myTitle/>
    <myInformations/>
    </div>
</template>

<script>
import myHeader from "@/components/myHeader.vue";
import myTitle from "@/components/myTitle.vue";
import myInformations from "@/components/myInformations.vue";

export default {
    name: 'App',
    components: {
        myHeader,
        myTitle,
        myInformations,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   /* color: #2c3e50;*/
    width: 100%;
    height: 100%;
}
</style>
