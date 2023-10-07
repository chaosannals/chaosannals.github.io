<template>
    <div class="hash-box">
        <h2>散列（哈希）</h2>
        <div class="convert-box">
            <label>文本：</label>
            <textarea v-model="data.originText" rows="4"></textarea>
            <label>MD5（Hex）:</label>
            <p>{{ textMd5Hex }}</p>
            <label>MD5（base64）:</label>
            <p>{{ textMd5Base64 }}</p>
            <label>SHA256（Hex）:</label>
            <p>{{ textSha256Hex }}</p>
            <label>SHA256（Base64）:</label>
            <p>{{ textSha256Base64 }}</p>
        </div>
        <div class="convert-box">
            <label>文件：</label>
            <input type="file" @input="onOpenFile" />
            <label>MD5（Hex）:</label>
            <p>{{ fileMd5Hex }}</p>
            <label>MD5（Base64）:</label>
            <p>{{ fileMd5Base64 }}</p>
            <label>SHA256（Hex）:</label>
            <p>{{ fileSha256Hex }}</p>
            <label>SHA256（Base64）:</label>
            <p>{{ fileSha256Base64 }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import Hex from 'crypto-js/enc-hex';
import Md5 from 'crypto-js/md5';
import Sha256 from 'crypto-js/sha256';
import WordArray from 'crypto-js/lib-typedarrays'
import { readAsArrayBuffer } from '../../../utils/io';

const data = reactive({
    originText: "",
    originFile: null,
});

const textMd5Hex = computed(() => {
    const bytes = Utf8.parse(data.originText);
    const result = Md5(bytes);
    return Hex.stringify(result);
});

const textMd5Base64 = computed(() => {
    const bytes = Utf8.parse(data.originText);
    const result = Md5(bytes);
    return Base64.stringify(result);
});

const textSha256Hex = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Hex.stringify(Sha256(bytes));
});

const textSha256Base64 = computed(() => {
    const bytes = Utf8.parse(data.originText);
    return Base64.stringify(Sha256(bytes));
});

const onOpenFile = async (e) => {
    const file = e.target.files[0];
    const buffer = await readAsArrayBuffer(file);
    //@ts-ignore
    data.originFile = WordArray.create(buffer);
};

const fileMd5Hex = computed(() => {
    //@ts-ignore
    return Hex.stringify(Md5(data.originFile));
});

const fileMd5Base64 = computed(() => {
    //@ts-ignore
    return Base64.stringify(Md5(data.originFile));
});

const fileSha256Hex = computed(() => {
    //@ts-ignore
    return Hex.stringify(Sha256(data.originFile));
});

const fileSha256Base64 = computed(() => {
    //@ts-ignore
    return Base64.stringify(Sha256(data.originFile));
});
</script>

<style scoped lang="scss">
.hash-box {
    margin: 1vw;
    background: #9944ff;

    .convert-box {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin: 1vw;
        padding: 1vw;
        background: white;
        border: 1px solid #4f4f4f;
    }
}
</style>