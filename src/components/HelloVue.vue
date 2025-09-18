<template>
    <div class="hello">
        <h1>hallo vue</h1>
    </div>
    <h1 :class="hello">Rudi</h1>


    <h1 v-html="nama"></h1>
    <h1 :id v-bind:class="nama">{{ nama }}</h1>

    <button :disabled="checkit">Press true</button>

    <h2 v-bind="paragraf">Saya sedang mencari kehidupan</h2>
</template>

<script setup>
console.log("Hello Vue");
const nama = "<b> azmi </b>";
const id = "testing";
const hello = "hello";

// multiple attributes
const paragraf = {
    class : "hello",
    id : "hello"
}

const checkit = true;
</script>

<style scoped>
.hello {
    color: green;
}
</style>
