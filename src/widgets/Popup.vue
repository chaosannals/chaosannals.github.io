<template>
    <div v-show="visible" ref="$el" class="popup" :style="style" tabindex="-1">
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

    if (element.offsetParent) {
        const p = getPositionInfo(element.offsetParent as HTMLElement);
        x += p.x;
        y += p.y;
    }
    return { x, y, width, height };
}

const $el: Ref<HTMLElement | undefined> = ref();

const style = reactive({
    transform: 'translate(0px, 0px)',
    // background: 'black',
    transition: 'transform .1s',
});

const props = defineProps<{
    visible?: boolean,
    anchor?: HTMLElement
}>();
const emit = defineEmits(['update:visible', 'mousedownin']);

const visible = computed({
    get: () => props.visible,
    set: (newValue) => emit("update:visible", newValue),
});

const onMouseDown = (e: MouseEvent) => {
    const result = ($el.value as HTMLElement).contains(e.target as Node);
    emit('mousedownin', result);
};

onMounted(() => {
    document.body.appendChild($el.value as HTMLElement);
    document.addEventListener('mousedown', onMouseDown);
});

onBeforeUnmount(() => {
    document.body.removeChild($el.value as HTMLElement);
    document.removeEventListener('mousedown', onMouseDown);
});

watch(() => props.visible, (_, __) => {
    if (props.anchor) {
        const p = getPositionInfo(props.anchor);
        style.transform = `translate(${p.x}px, ${p.y + p.height}px)`;
        console.log('anchor', p, style);
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