<template>
    <button v-bind="$attrs" class="form-text-button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.form-text-button {
    padding: .1em .2em;
}
</style>