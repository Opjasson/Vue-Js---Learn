<template>
    <div class="hello">
        <h1>hallo vue</h1>
    </div>
    <h1>{{ nama }}</h1>
    <h1 v-html="nama"></h1>
</template>

<script setup>
console.log("Hello Vue");
const nama = "<b> azmi </b>"
</script>

<style scoped>
.hello {
    color: green;
}
</style>
