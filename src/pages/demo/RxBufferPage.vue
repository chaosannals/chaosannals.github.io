<template>
  <div class="demo-rx-buffer-page">
    <div>
      <button ref="addButton" @click="onClickAdd">+</button>
    </div>
    <div class="buffer-list">
      <div v-for="(a, i) in total" :key="i" class="buffer-group">
        <div v-for="v in a" class="buffer-item">{{ v }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { buffer, merge, fromEvent, interval, Subject } from "rxjs";
import { ref } from "vue";

const total = ref<Array<Array<number>>>([]);
const counter = ref<number>(0);
const addButton = ref<HTMLButtonElement>();

const subject = new Subject<number>();

// const clicks = fromEvent(document, "click");
const intervalEvents = interval(4000);
// const buffered = clicks.pipe(buffer(intervalEvents));
// buffered.subscribe((x) => console.log(x));

const onClickAdd = () => {
  console.log("+", counter.value);
  subject.next(counter.value++);
};

subject.pipe(buffer(intervalEvents)).subscribe((v) => {
  console.log("v", v);
  total.value.push(v);
});
</script>

<style lang="scss" scoped>
.demo-rx-buffer-page {
  display: flex;
  flex-direction: column;

  .buffer-list {
    flex-grow: 1;
  }

  .buffer-group {
    display: flex;
    overflow: hidden;
    border: 1px solid red;
  }

  .buffer-item {
    padding: 0.5em;
    border: 1px solid #ddd;
  }
}
</style>
