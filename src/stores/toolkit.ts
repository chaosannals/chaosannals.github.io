import { defineStore, StateTree } from "pinia";
import { ref } from "vue";
import { serialize, deserialize } from '../utils/serial';

export const useTimestampStore = defineStore('timestamp', () => {
    const timestampFormat = ref("yyyy-MM-dd HH:mm:ss.SSS");
    const timestampFormats = ref(new Set(["yyyy-MM-dd HH:mm:ss.SSS"]));

    return {
        timestampFormat,
        timestampFormats,
    };
}, {
    // persist: true, // 启用持久化
    // 注：有个 bug ,用 vue 开发调试工具看到的数据不实时（显示 undefined (Ref)且个数不对），序列化正常，使用也正常。
    persist: { // 启用自定义序列化，处理特定类型，这里处理 Set 。
        serializer: {
            deserialize: deserialize,
            serialize: serialize,
        },
    },
});