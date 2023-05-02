<template>
    <div class="white"></div>
    <div class="header">
        <div class="initials">
            <p>Z</p>
            <p class="symbol">&</p>
            <p>T</p>
        </div>
        <div class="date">
            <p>28</p>
            <p class="symbol">/</p>
            <p>10</p>
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

.white {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 170px;
}

.header {
    position: fixed;
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

@media (max-width: 415px) {
    p {
        font-size: 12px;
    }
}


</style>
