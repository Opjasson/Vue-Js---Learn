<template>
    <div>
        <h1 id="count">Counter : {{ counter }}</h1>
        <h1>Counter state : {{ stateCount }}</h1>

        <button v-on:click="increment">Add Counter</button>

        <br />
        <!-- ------ -->
        <button v-on:click="incrementState">Add Counter state</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

let counter = 0;
let stateCount = ref(0);

// Counter using DOM
function increment() {
    counter++;
    document.getElementById("count").innerHTML = `Counter : ${counter}`;
}

// Counter using reactive state
function incrementState() {
    stateCount.value++;
}
</script>

<style scoped></style>
