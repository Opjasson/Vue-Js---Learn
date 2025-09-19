<template>
  <div>
    <h1 id="count">Counter : {{ counter }}</h1>

    <button v-on:click="increment">Add Counter</button>
  </div>
</template>

<script setup>
  let counter = 0;

  function increment() {
    counter++

    document.getElementById("count").innerHTML = `Counter : ${counter}`
  }
</script>

<style scoped></style>