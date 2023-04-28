<template>
    <div class="header">
        <div class="initials">
            <p>z</p>
            <p>&</p>
            <p>t</p>
        </div>
        <div class="date">
            <p>10</p>
            <p>/</p>
            <p>12</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    font-size: 20px;
    text-align: center;
}

.header {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.date {
    position: relative;
    top: 0;
    right: 0;
    margin: 5%;
}

.initials {
    position: relative;
    top: 0;
    left: 0;
    margin: 5%;
}

</style>
