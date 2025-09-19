<template>
    <div>
        <input type="text" placeholder="Firstname" id="firstname" />
        <input type="text" placeholder="Secondname" id="secondname" />

        <h1>Hallo {{ (fullName.firstName + " " + fullName.secondName) }}</h1>
        <button v-on:click="sayHello">Klik</button>
    </div>
</template>

<script setup>
import { reactive } from "vue";

let fullName = reactive({
    firstName: "",
    secondName: "",
});

function sayHello() {
    fullName.firstName = document.getElementById("firstname").value;
    fullName.secondName = document.getElementById("secondname").value;
}
</script>

<style scoped></style>
