<template>
  <div class="toolkit-compress-image-page">
    <input type="file" accept="image/*" @input="onUpload" />
  </div>
</template>

<script lang="ts" setup>
import Compressor from "compressorjs";

const onUpload = (e: Event) => {
  let ev = e as InputEvent;
  let input = ev.target as HTMLInputElement;
  console.log("files", input.files);
  new Compressor(input.files![0], {
    quality: 0.6,
    convertSize: 1500000,
    // maxWidth: 1000,
    // maxHeight: 1000,
    // minWidth: 300,
    // minHeight: 300,
    success: (blob) => {
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "a.jpg";
        a.click();
    },
  });
};
</script>
