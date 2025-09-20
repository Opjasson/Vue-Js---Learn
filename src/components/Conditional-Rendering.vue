<template>
    <div v-if="score > 90">
        <p>Good score : {{ score }}</p>
    </div>
    <div v-else-if="score > 70">
        <p>Awesome score : {{ score }}</p>
    </div>
    <div v-else>
        <p>Ops, bad score : {{ score }}</p>
    </div>

</template>

<script setup>
import { ref } from "vue";

const score = ref(70);
</script>

<style scoped></style>
