<template>
    <div class="toolkit-timestamp-page">
        <div>
            <label>时间戳：</label>
            <form-text-input v-model="data.timestampText" />
        </div>
        <div>
            <label>格式：</label>
            <form-text-input v-model="store.timestampFormat" @keydown.enter="onEnterFormat">
                <template #default="slotProps">
                    <div>
                        <div v-for="f in store.timestampFormats" @click="store.timestampFormat = f; slotProps.done()">
                            <span>{{ f }}</span>
                        </div>
                    </div>
                </template>
            </form-text-input>
        </div>
        <div>
            <label>结果：</label>
            <span>{{ timestampResult }}</span>
        </div>
        <div>
            <label>日期：</label>
            <form-text-input v-model="data.dateText" />
        </div>
        <div>
            <label>结果：</label>
            <span>{{ dateResult }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { format } from 'date-fns';
import { useTimestampStore } from '../../stores/toolkit';

const store = useTimestampStore();

const data = reactive({
    timestampText: new Date().getTime().toString(),
    dateText: new Date().toUTCString(),
});

const timestampResult = computed(() => {
    if (/^\d{10}$/.test(data.timestampText)) {
        const date = new Date();
        date.setTime(Number(`${data.timestampText}000`));
        return format(date, store.timestampFormat);
    }
    if (/^\d{13}$/.test(data.timestampText)) {
        const date = new Date();
        date.setTime(Number(data.timestampText));
        return format(date, store.timestampFormat);
    }
    return "不是有效的时间戳";
});

const dateResult = computed(() => {
    return Date.parse(data.dateText).toString();
});

const onEnterFormat = () => {
    //@ts-ignore
    //store.$hydrate();
    store.timestampFormats.add(store.timestampFormat);
};

</script>

<style scoped lang="scss">
.toolkit-timestamp-page {
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        margin: .4vw 1vw;

        & > label {
            min-width: 6em;
        }
    }
}
</style>