export async function readAsArrayBuffer(file: Blob) {
    return new Promise((resolve: (result: ArrayBuffer) => void, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
        fileReader.onerror = (e) => reject(e);
        fileReader.readAsArrayBuffer(file);
    });
}