<template>
    <div>
        <ul>
            <li v-for="(item, index) in listItems" :key="index">
                Nomor id : {{ item.id }} Jenis item : {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
const listItems = [
    {
        id: 1,
        name: "Shampo",
    },
    {
        id: 2,
        name: "Sabun",
    },
    {
        id: 3,
        name: "Pasta Gigi",
    },
];
</script>

<style scoped></style>
