import { defineStore } from "pinia";
import { ref } from "vue";
import { parse, stringify } from 'zipson';
import { isSet, isString, isPlainObject } from 'lodash';

const deserializeNode = (node) => {
    if (isString(node) && node.startsWith('#set')) {
        const list = JSON.parse(node.substring(4));
        console.log('de set', list);
        return new Set(list);
    } else if (isPlainObject(node)) {
        for (const key in node) {
            node[key] = deserializeNode(node[key]);
        }
    }
    console.log('de node', node);
    return node;
}

const deserialize = (treeText: string) => {
    const tree = JSON.parse(treeText);
    return deserializeNode(tree);
};

const serializeNode = (node) => {
    if (isSet(node)) {
        return '#set' + JSON.stringify(Array.from(node))
    } else if (isPlainObject(node)) {
        for (const key in node) {
            node[key] = serializeNode(node[key]);
        }
    }
    return node;
};

const serialize = (tree) => {
    const newTree = serializeNode(tree);
    return JSON.stringify(newTree);
};

export const useTimestampStore = defineStore('timestamp', () => {
    const timestampFormat = ref("yyyy-MM-dd HH:mm:ss.SSS");
    // const timestampFormats = ref(new Set(["yyyy-MM-dd HH:mm:ss.SSS"]));
    const timestampFormats = ref(["yyyy-MM-dd HH:mm:ss.SSS"]);

    return {
        timestampFormat,
        timestampFormats,
    };
}, {
    persist: true, // 启用持久化
    // persist: { // 启用自定义序列化，这里使用 zipson 压缩，和默认一样只支持少数类型，Set 无法持久化。
    //     serializer: {
    //         deserialize: parse,
    //         serialize: stringify,
    //     },
    // },
    // 不可用，这个库有bug, 其他属性修改时，不会触发 反序列化，而是直接取出。
    // persist: { // 启用自定义序列化，处理特定类型，这里处理 Set 。
    //     serializer: {
    //         deserialize: deserialize,
    //         serialize: serialize,
    //     },
    // },
});