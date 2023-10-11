export async function readAsArrayBuffer(file: Blob) {
    return new Promise((resolve: (result: ArrayBuffer) => void, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
        fileReader.onerror = (e) => reject(e);
        fileReader.readAsArrayBuffer(file);
    });
}

export async function fetchHeadUtf8(url: string, length: number): Promise<Uint8Array> {
    const response = await fetch(url);
    const reader = response.body?.getReader();
    const buffer = new Uint8Array(length);
    let index = 0;
    while (reader != null && index < length) {
        const { done, value } = await reader.read();
        if (done) break;
        for (let i = 0; (i < value.length) && (index < length); ++i) {
            buffer[index++] = value[i];
        }
    }
    await reader?.cancel();

    // 最后一步 index++ 可能会使得 index == length
    if (index >= length) {
        index = length - 1;
    }

    // UTF8 截取后末尾可能是不完整字符
    let c = buffer[index];
    // 排除以 10xxxxxx 后半字符
    while ((c & 0b11000000) == 0b10000000 && (index > 0)) {
        c = buffer[--index];
    }
    // 排除前半字符 1+0*
    if (c >= 0b11000000 && (index > 0)) {
        --index;
    }
    // 需要再 new 一个 Uint8Array ，不然共用一个 ArrayBuffer, 而 ArrayBuffer 还是原先的长度，外面要取的是 ArrayBuffer。
    return (index + 1) < length ? new Uint8Array(buffer.subarray(0, index + 1)) : buffer;
}