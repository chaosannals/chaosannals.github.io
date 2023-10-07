<template>
    <div class="toolkit-convert-page">
        <ZipsonBox />
        <Base64Box />
    </div>
</template>

<script setup lang="ts">
import ZipsonBox from "./convert/ZipsonBox.vue";
import Base64Box from './convert/Base64Box.vue';

</script>

<style scoped lang="scss">
.toolkit-convert-page {
    display: flex;
}
</style>