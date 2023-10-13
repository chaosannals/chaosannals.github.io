<template>
    <div class="form-number-input">
        <input v-model="modelValue" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);
const props = defineProps<{
    modelValue: number,
}>();

const modelValue = computed({
    get: () => props.modelValue.toString(),
    set(v: string) {
        emit('update:modelValue', Number(v));
    }
});
</script>

<style scoped lang="scss">
.form-number-input {
    display: flex;
    flex-shrink: 1;
    justify-self: start;
    align-self: start;
    padding: .4vw;
    border: 1px solid #4f4f4f;
    border-radius: .4vw;

    &>input {
        flex-grow: 1;
        flex-shrink: 1;
        font-size: 1vw;
        border: none;
        outline: none;
    }
}
</style>