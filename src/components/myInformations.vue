<template>
    <div class="phrase">
        <p>Join the celebration as Zoe and Taisuke say "I do" on the beautiful coast of Kyoto.</p>
    </div>
    <div class="informations">
        <div class="disposition">
                <p>the date</p>
                <hr>
                <h1>Monday</h1>
                <h1>October 28</h1>
                <h1>2023</h1>
        </div>
        <div class="disposition2">
                <p>the place</p>
                <hr>
                <h1>123</h1>
                <h1>Fujimota</h1>
                <h1>Haraju</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myInformations'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.informations {
    position: relative;
    width: 100%;
    height: 100%;
}

.phrase {
    position: relative;
    margin-top: 10%;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    font-family: "Roboto Regular", sans-serif;
    font-size: 24px;
    letter-spacing: 2px;
}

.informations p {
    font-family: "Roboto Regular", sans-serif;
    font-size: 30px;
}

.informations h1 {
    font-family: "Roboto Regular", sans-serif;
    font-size: 40px;
    margin: 10px 0;
}

hr {
    position: relative;
    width: 14%;
    height: 2px;
    border: none;
    background-color: gainsboro;
    margin-left: 0;
    bottom: 12px;
}

.disposition {
    position: relative;
    width: 25%;
    height: 100%;
    margin-left: 25%;
}

.disposition2 {
    position: relative;
    width: 25%;
    height: auto;
    left: 60%;
}

</style>