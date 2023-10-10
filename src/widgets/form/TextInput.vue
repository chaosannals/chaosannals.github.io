<template>
    <div class="form-text-input">
        <input v-model="value" v-bind="$attrs" @focus="data.popupVisible = true" @blur="data.popupVisible = false" />
        <popup class="form-text-input-popup" :visible="data.popupVisible" :anchor="$el">
            <slot></slot>
        </popup>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

const props = defineProps<{
    modelValue: string,
}>();

const data = reactive({
    popupVisible: false,
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit('update:modelValue', newValue);
    },
});


</script>

<style scoped lang="scss">
.form-text-input {
    display: flex;
    padding: .4vw;
    border: 1px solid #4f4f4f;
    border-radius: .4vw;

    &>input {
        flex-grow: 1;
        font-size: 1vw;
        border: none;
        outline: none;
    }
}

.form-text-input-popup {
    background-color: white;
    box-shadow: 1px 1px 1px #4444;
}
</style>