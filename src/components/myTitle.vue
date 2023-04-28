<template>
    <div class="title">
        <h1>marry wednesday.</h1>
    </div>
    <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
</template>

<script>
export default {
    name: 'myTitle'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
    position: absolute;
    top: 60%;
    left: 55%;
    width: 50%;
    height: auto;
    transform: translate(-50%, -50%);
}

h1 {
    position: relative;
    font-size: 110px;
    text-align: left;
}

.circles {
    position: relative;
    justify-content: center;
    width: 100%;
    height: auto;
    background: aquamarine;
    display: flex;
}

.circle {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
}

</style>
