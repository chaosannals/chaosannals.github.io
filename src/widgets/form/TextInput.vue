<template>
    <div class="form-text-input">
        <input v-model="value" v-bind="$attrs" @focus="onFocus" @blur="onBlur" />
        <popup class="form-text-input-popup" :visible="data.popupVisible" :anchor="$el" @focus="cancelToken.isCancel = true"
            @blur="data.popupVisible = false">
            <slot :done="() => data.popupVisible = false"></slot>
        </popup>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { CancelToken, waitCanCancel } from '../../utils/task';

const props = defineProps<{
    modelValue: string,
}>();

const cancelToken = new CancelToken(function () {
    console.log(this);
    this.isCancel = false;
});

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

const onFocus = () => {
    data.popupVisible = true;
};

const onBlur = async () => {
    await waitCanCancel(400, cancelToken);
    data.popupVisible = false;
};
</script>

<style scoped lang="scss">
.form-text-input {
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

.form-text-input-popup {
    background-color: white;
    box-shadow: 1px 1px 1px #4444;
}
</style>