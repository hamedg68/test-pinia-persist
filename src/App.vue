<script setup lang="ts">
import { useTestPersistStore } from "./store/testPersistStore";
const store = useTestPersistStore();

function initialStore() {
  store.$patch({
    list: [{ id: 111 }],
  });

  store.item = {
    id: 22222,
    obj: { state: false },
  };
}
function updateStore() {
  store.$patch({
    list: [{ id: 123 }],
  });

  store.item = { id: 34324, obj: { state: true } };
}
</script>

<template>
  <div style="text-align: center">
    <h1>test pinia persisted</h1>

    <button @click="initialStore()">inital store</button>
    <button @click="updateStore()">update store</button>
  </div>
</template>

<style scoped></style>
