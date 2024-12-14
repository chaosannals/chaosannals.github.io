<template>
  <div class="demo-rx-merge-scan-page">
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

import { fromEvent, interval, window, reduce, map } from "rxjs";
import { onMounted, ref } from "vue";

const total = ref<Array<Array<number>>>([]);
const addButton = ref<HTMLButtonElement>();

onMounted(() => {
  const clicks = fromEvent(addButton.value!, "click");
  const ob = clicks.pipe(
    window(interval(1000)),
    map((_) => -1),

    // reduce 必须整个管道关闭才会 触发 subscribe。
    reduce<number, Array<number>>(
      (acc: Array<number>, v: number, i: number) => {
        console.log("reduce", v, i);
        if (v > 0) {
          acc.push(v as number);
          return acc;
        } else {
          return [];
        }
      },
      []
    )
  );
  ob.subscribe((a) => {
    console.log(a);
  });
});
</script>

<style lang="scss" scoped>
.demo-rx-merge-scan-page {
  display: flex;
  flex-direction: column;

  .group {
    border: 1px solid red;
  }
}
</style>
