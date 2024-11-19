import { defineStore } from "pinia";
import { ref } from "vue";
import { type RouteLocationNormalized } from "vue-router";

export const useAppStore = defineStore(
  "app",
  () => {
    const hasBack = ref(false);
    const routeFrom = ref<RouteLocationNormalized>();
    const isMdShowTabbar = ref(true);
    const notice = ref("");
    
    const visitorId = ref("");

    return {
      hasBack,
      routeFrom,
      isMdShowTabbar,
      notice,
      visitorId,
    };
  },
  {
    persist: true,
  }
);
