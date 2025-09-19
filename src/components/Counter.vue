<template>
    <div>
        <h1 id="count">Counter : {{ counter }}</h1>
        <h1>Counter state : {{ stateCount }}</h1>

        <button v-on:click="increment">Add Counter</button>

        <br />
        <!-- ------ -->
        <button v-on:click="incrementState">Add Counter state</button>

        <!-- Complex --------- -->
        <h1>Nama Pegawai : {{ objectEmploye.nama }}</h1>
        <h1>Bayaran : {{ objectEmploye.count }}</h1>

        <button v-on:click="incrementComplex">Tambah Bayaran</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

let counter = 0;
let stateCount = ref(0);

// Complex state Object
let objectEmploye = ref({
    nama: "budi",
    count: 1000,
});

// Counter using DOM
function increment() {
    counter++;
    document.getElementById("count").innerHTML = `Counter : ${counter}`;
}

// Counter using reactive state
function incrementState() {
    stateCount.value++;
}

// Complex object Reactive state
function incrementComplex() {
    // objectEmploye.value = {
    //   nama : objectEmploye.value.nama,
    //   count : objectEmploye.value.count + 1000
    // }

    objectEmploye.value.nama = "joyo"
    objectEmploye.value.count++
}
</script>

<style scoped></style>
