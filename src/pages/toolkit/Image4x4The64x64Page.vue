<template>
    <div class="toolkit-image-4-x-4-the-64-x-64-page">
        <div v-for="(rows, i) in images" class="file-rows">
            <div v-for="(cell, j) in rows" class="file-cell">
                <div class="file-input">
                    <input accept="image/*" type="file" @input="onInputFile($event, i, j)" />
                    <img v-if="cell?.url" alt="image" :src="cell?.url" />
                </div>
            </div>
        </div>
        <div class="file-pane">
            <ElButton @click="onMergeGenerate">合成</ElButton>
        </div>
        <img v-if="targetUrl" :src="targetUrl"/>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive, ref, Ref } from 'vue';


const ROW_COUNT = 4;
const COLUMN_COUNT = 4;

type ImageFile = {
    file: File,
    url: string,
} | null;

const images: ImageFile[][] = reactive([]);
const targetUrl: Ref<string | null> = ref(null);

onBeforeMount(() => {
    for (let i = 0; i < ROW_COUNT; ++i) {
        const rows = [];
        for (let j = 0; j < COLUMN_COUNT; ++j) {
            rows.push(null);
        }
        images.push(rows);
    }
});

const onInputFile = (e: Event, i: number, j: number) => {
    const input = e.target as HTMLInputElement;
    const f = input.files![0];
    images[i][j] = {
        file: f,
        url: URL.createObjectURL(f),
    };
    input.value = "";
    console.log(f);
};

const onMergeGenerate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 4 * 64;
    canvas.height = 4 * 64;
    const context = canvas.getContext('2d');
    images.forEach((rows, i) => {
        rows.forEach((cell, j) => {
            if (cell) {
                const image = document.createElement('img');
                image.src = cell.url;
                context?.drawImage(
                    image, 0, 0, image.width, image.height,
                    j * 64, i * 64, 64, 64,
                );
            }
        });
    });
    canvas.toBlob((b) => {
        targetUrl.value = URL.createObjectURL(b!);
    }, 'image/png', 0.9);
}
</script>

<style scoped lang="scss">
.toolkit-image-4-x-4-the-64-x-64-page {
    .file-rows {
        display: flex;
        flex-direction: row;
    }

    .file-cell {
        display: flex;
    }

    .file-input {
        display: flex;
        width: 10em;
        height: 10em;
        border: 1px solid #ddd;
        overflow: hidden;
        position: relative;

        &>img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
        }

        &>input {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 20;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
}
</style>