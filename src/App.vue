<template>
    <myHeader/>
    <myTitle/>
</template>

<script>
import myHeader from "@/components/myHeader.vue";
import myTitle from "@/components/myTitle.vue";

export default {
    name: 'App',
    components: {
        myHeader,
        myTitle,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
