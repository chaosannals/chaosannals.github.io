<template>
  <div class="demo-rx-page">
    <div>
      <button ref="addButton" @click="onClickAdd">+</button>
    </div>
    <div v-for="(a, i) in total" :key="i" class="group">
      <span v-for="v in a">{{ v }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
// TODO

import { merge } from "lodash";
import { interval, Subject, map } from "rxjs";
import { onMounted, ref } from "vue";

const total = ref<Array<Array<number>>>([]);
const addButton = ref<HTMLButtonElement>();

const counter = ref<number>(0);
const subject = new Subject<number>();

// TODO
// const observable = merge(subject, interval(4000)).pipe(
//     map((v: number | Event | Array<number>) => {
//         if (Number.isInteger(v)) {
//             return 
//         }
//     })
// )

const onClickAdd = () => {
    console.log('+', counter.value);
    subject.next(counter.value++);
};


onMounted(() => {

});
</script>
