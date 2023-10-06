import { defineStore, StateTree } from "pinia";
import { ref } from "vue";
// import { parse, stringify } from 'zipson';
import { isSet, isString, isPlainObject } from 'lodash';

const deserializeNode = (node: StateTree) => {
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

const serializeNode = (node: StateTree) => {
    if (isSet(node)) {
        return '#set' + JSON.stringify(Array.from(node))
    } else if (isPlainObject(node)) {
        const newNode: StateTree = {};
        for (const key in node) {
            newNode[key] = serializeNode(node[key]);
        }
        return newNode;
    }
    return node;
};

const serialize = (tree: StateTree) => {
    console.log('se tree 1', tree);
    const newTree = serializeNode(tree);
    return JSON.stringify(newTree);
};

export const useTimestampStore = defineStore('timestamp', () => {
    const timestampFormat = ref("yyyy-MM-dd HH:mm:ss.SSS");
    const timestampFormats = ref(new Set(["yyyy-MM-dd HH:mm:ss.SSS"]));

    return {
        timestampFormat,
        timestampFormats,
    };
}, {
    // persist: true, // 启用持久化
    // persist: { // 启用自定义序列化，这里使用 zipson 压缩，和默认一样只支持少数类型，Set 无法持久化。
    //     serializer: {
    //         deserialize: parse,
    //         serialize: stringify,
    //     },
    // },
    // 注：有个 bug ,用 vue 开发调试工具看到的数据不实时（显示 undefined (Ref)且个数不对），序列化正常，使用也正常。
    persist: { // 启用自定义序列化，处理特定类型，这里处理 Set 。
        serializer: {
            deserialize: deserialize,
            serialize: serialize,
        },
    },
});