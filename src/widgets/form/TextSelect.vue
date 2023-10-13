<template>
    <div ref="$el" class="form-text-select" @focus="onFocus" @blur="onBlur" tabindex="-1">
        <span>{{ modelValue[props.textField] }}</span>
    </div>
    <popup :visible="data.popupVisible" :anchor="$el" class="form-text-select-popup">
        <div v-for="option in props.options" @click="onSelect(option)" class="form-text-select-option"
            :class="{ selected: modelValue[props.keyField] == option[props.keyField] }">
            <span>{{ option[props.textField] }}</span>
        </div>
    </popup>
</template>

<script setup lang="ts">
import { type Ref, computed, reactive, ref } from 'vue';
import { CancelToken, waitCanCancel } from '../../utils/task';

const $el: Ref<HTMLElement | unknown> = ref();
const cancelToken = new CancelToken(function () {
    console.log(this);
    this.isCancel = false;
});

const emit = defineEmits(['update:modelValue']);
const props = withDefaults(defineProps<{
    keyField?: string,
    textField?: string,
    modelValue: any,
    options: any[],
}>(), {
    keyField: "value",
    textField: "text",
    options: () => [],
});
const data = reactive({
    popupVisible: false,
});

const modelValue = computed({
    get: () => props.modelValue,
    set(v) { emit('update:modelValue', v); }
});

const onFocus = () => {
    data.popupVisible = true;
};

const onBlur = async () => {
    await waitCanCancel(140, cancelToken);
    data.popupVisible = false;
};

const onSelect = (option: any) => {
    modelValue.value = option;
    data.popupVisible = false;
}
</script>

<style scoped lang="scss">
.form-text-select {
    display: flex;
    flex-shrink: 1;
    justify-self: start;
    align-self: start;
    padding: .4vw;
    border: 1px solid #4f4f4f;
    border-radius: .4vw;
}

.form-text-select-popup {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 1px 1px 1px #4444;

    .form-text-select-option {
        padding: .2em .4em;

        &.selected {
            color: #4499ff;
        }
    }
}
</style>