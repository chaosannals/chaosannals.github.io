import { defineStore } from "pinia";
import { ref } from "vue";

export const useShopStore = defineStore(
  "shop",
  () => {
    const car = ref([]);

    return {
        car,
    };
  },
  {
    persist: true,
  }
);
