<template>
    <div v-show="visible" ref="$el" class="popup" :style="style">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {
    ref,
    reactive,
    computed,
    watch,
    onMounted,
    onBeforeUnmount,
    type Ref,
} from 'vue';

function getPositionInfo(element: HTMLElement) {
    let x = element.offsetLeft - element.scrollLeft;
    let y = element.offsetTop - element.scrollTop;
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    if (element.parentElement) {
        const p = getPositionInfo(element.parentElement);
        x += p.x;
        y += p.y;
    }
    return { x, y, width, height };
}

const $el: Ref<HTMLElement | undefined> = ref();

const style = reactive({
    translate: '0 0',
});

const props = defineProps<{
    visible?: boolean,
    anchor?: HTMLElement
}>();
const emit = defineEmits(['update:visible']);

const visible = computed({
    get: () => props.visible,
    set: (newValue) => emit("update:visible", newValue),
});

onMounted(() => {
    document.body.appendChild($el.value as HTMLElement);
});

onBeforeUnmount(() => {
    document.body.removeChild($el.value as HTMLElement);
});

watch(() => props.visible, (newValue, oldValue) => {
    if (props.anchor) {
        const p = getPositionInfo(props.anchor);
        style.translate = `${p.x} ${p.y + p.height}px`;
        console.log('anchor', p);
    }
});

</script>

<style scoped lang="scss">
.popup {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
}
</style>