<template>
    <div class="toolkit-image-craft-page">
        <div class="setting-bar">
            <input type="file" @input="onSelectImage" />
            <form-text-select v-model="data.targetType" :options="targetTypes" />
            <form-number-input v-model="data.targetWidth" />
            <form-number-input v-model="data.targetHeight" />
            <form-number-input v-if="data.targetType.quality != undefined" v-model="data.targetType.quality" />
            <form-text-button @click="onExport">保存</form-text-button>
        </div>
        <div class="preview-box">
            <canvas ref="$canvas"></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Ref, reactive, ref, watch } from 'vue';

declare interface TargetType {
    value: any,
    text: string,
    mime: string,
    suffix: string,
    quality?: number,
}

const targetTypes: TargetType[] = [
    {
        value: 1,
        text: 'png',
        mime: 'image/png',
        suffix: 'png',
    },
    {
        value: 2,
        text: 'jpg',
        mime: 'image/jpeg',
        suffix: 'jpg',
        quality: 0.9,
    },
    {
        value: 3,
        text: 'webp',
        mime: 'image/webp',
        suffix: 'webp',
        quality: 0.9,
    },
];

const $canvas: Ref<HTMLCanvasElement | undefined> = ref();
const data = reactive({
    targetType: targetTypes[0],
    targetWidth: 0,
    targetHeight: 0,
} as {
    targetType: TargetType,
    targetWidth: number,
    targetHeight: number,
    sourceImage?: HTMLImageElement,
});

const draw = () => {
    $canvas.value!.width = data.targetWidth;
    $canvas.value!.height = data.targetHeight;
    const context = $canvas.value!.getContext('2d');
    const image = data.sourceImage!;
    context?.drawImage(
        image,
        0, 0, image.width, image.height,
        0, 0, data.targetWidth, data.targetHeight,
    );
};

watch(() => data.targetWidth, (width) => {
    if (data.sourceImage) {
        const ratio = data.sourceImage!.width / data.sourceImage!.height;
        data.targetHeight = width / ratio;
        draw();
    }
});

watch(() => data.targetHeight, (height) => {
    if (data.sourceImage) {
        const ratio = data.sourceImage!.width / data.sourceImage!.height;
        data.targetWidth = height * ratio;
        draw();
    }
});

const onSelectImage = (e: Event) => {
    const file = (e.target as HTMLInputElement).files![0];
    const src = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
        URL.revokeObjectURL(src);
        data.sourceImage = image;
        data.targetWidth = image.width;
        data.targetHeight = image.height;
        $canvas.value!.width = image.width;
        $canvas.value!.height = image.height;
        const context = $canvas.value!.getContext('2d');
        context?.drawImage(image, 0, 0, image.width, image.height);
    };
    image.src = src;
};

const onExport = () => {
    $canvas.value!.toBlob((blob) => {
        const url = URL.createObjectURL(blob!);
        const a = document.createElement('a');
        a.href = url;
        a.download = `download.${data.targetType.suffix}`;
        a.click();
    }, data.targetType.mime, data.targetType.quality);
};
</script>

<style scoped lang="scss">
.toolkit-image-craft-page {
    .setting-bar {
        display: flex;
    }

    .preview-box {
        overflow: auto;
    }
}
</style>