<template>
  <div class="demo-rx-window-page">
    <div>
      <button ref="addButton">+</button>
    </div>
    <div v-for="(a, i) in total" :key="i" class="group">
      <span v-for="v in a">{{ v }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// TODO

import { fromEvent, interval, window, map, take, mergeAll } from "rxjs";
import { onMounted, ref } from "vue";

const total = ref<Array<Array<number>>>([]);
const addButton = ref<HTMLButtonElement>();

onMounted(() => {
  const clicks = fromEvent(addButton.value!, "click");
  const sec = interval(4000);

  const ob = clicks.pipe(
    map(_ => 1),
    window(sec),
    // map((win) => win.pipe(take(2))),
    // mergeAll()
  );

  ob.subscribe((x) => console.log(x));
});
</script>

<style lang="scss" scoped>
.demo-rx-window-page {
  display: flex;
  flex-direction: column;

  .group {
    border: 1px solid red;
  }
}
</style>
