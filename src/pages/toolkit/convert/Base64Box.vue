<template>
    <div class="base64-box">
        <div class="convert-box">
            <label>文本：</label>
            <textarea v-model="data.originText" rows="4"></textarea>
            <label>Base64: </label>
            <p> {{ base64Encode }}</p>
        </div>

        <div class="convert-box">
            <label>Base64：</label>
            <textarea v-model="data.originBase64" rows="4"></textarea>
            <label>文本: </label>
            <p> {{ base64Decode }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import { reactive, computed } from 'vue';

const data = reactive({
    originText: "",
    originBase64: "",
});

const base64Encode = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Base64.stringify(bytes);
});

const base64Decode = computed(() => {
    const bytes = Base64.parse(data.originBase64);
    return Utf8.stringify(bytes);
});

</script>

<style scoped lang="scss">
.base64-box {
    margin: 1vw;
    background: #4499ff;

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