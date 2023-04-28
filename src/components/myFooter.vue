<template>
    <div class="myFooter">
        <div class="countdown">
            <h1>21 08 32 12</h1>
            <p>DAYS HOURS MINUTES SECONDS</p>
        </div>
        <hr>
        <div class="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.myFooter {
    top: 300px;
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.countdown {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.countdown p {
    font-size: 20px;
    font-family: "Roboto Thin", sans-serif;
    letter-spacing: 2px;
    color: rgb(0, 0, 0, 0.6);
    margin: 0;
}

.countdown h1 {
    font-size: 20px;
    font-family: "Roboto Regular", sans-serif;
    margin: 0;
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

hr {
    width: 70%;
    position: relative;
    margin-top: 5%;
    margin-bottom: 1%;
}

.circles {
    margin-top: 1%;
    margin-bottom: 4%;
}

.circle {
    margin: 1%;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 50%;
}
</style>