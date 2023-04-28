<template>
    <div class="picture">
        <h1>kyoto</h1>
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.picture img {
    position: relative;
    width: 50%;
    height: auto;
    margin-right: 150px;
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