<template>
    <div class="zipson-box">
        <h2>Zipson</h2>
        <div class="convert-box">
            <label>对象（JSON 文本表示）:</label>
            <textarea v-model="data.jsonOriginText" rows="4"></textarea>
            <label>Zipson 编码：</label>
            <p>{{ zipsonEncrypted }}</p>
        </div>
        <div class="convert-box">
            <label>Zipson: </label>
            <textarea v-model="data.zipsonOriginText" rows="4"></textarea>
            <label>Zipson 解码（JSON 文本表示）：</label>
            <p>{{ zipsonDecrypted }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { parse, stringify } from 'zipson';

const data = reactive({
    jsonOriginText: "",
    zipsonOriginText: "",
});

const zipsonEncrypted = computed(() => {
    try {
        return stringify(JSON.parse(data.jsonOriginText));
    } catch (e: any) {
        return e.toString();
    }
});
const zipsonDecrypted = computed(() => {
    try {
        return JSON.stringify(parse(data.zipsonOriginText));
    } catch (e : any) {
        return e.toString();
    }
});

</script>

<style scoped lang="scss">
.zipson-box {
    margin: 1vw;
    background: #9999ff;

    .convert-box {
        display: flex;
        flex-direction: column;
        margin: 1vw;
        padding: 1vw;
        background: white;
        border: 1px solid #4f4f4f;
    }
}
</style>