<template>
    <div>
        <h1 :class="array">style</h1>
        <h1 :class="{red : red, bold : bold}">style</h1>

        <button v-on:click="toggleRed">Red</button>
        <button v-on:click="toggleBold">Bold</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

const array = ["red", "bold"];

const red = ref(false);
const bold = ref(false);

function toggleRed() {
  red.value = !red.value
}

function toggleBold() {
  bold.value = !bold.value
}

</script>

<style scoped>
.red {
    color: red;
}

.bold {
    text-transform: uppercase;
    font-weight: bold;
}
</style>
