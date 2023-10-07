import { isSet, isString, isPlainObject } from 'lodash';
import type { StateTree } from 'pinia';

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

export const deserialize = (treeText: string) => {
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

export const serialize = (tree: StateTree) => {
    console.log('se tree 1', tree);
    const newTree = serializeNode(tree);
    return JSON.stringify(newTree);
};
