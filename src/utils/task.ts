export class CancelToken {
    isCancel: boolean = false;
    onCancel: (this: CancelToken) => void;
    constructor(onCancel: (this: CancelToken) => void = () => { }) {
        this.onCancel = onCancel.bind(this);
    }
}

export async function waitCanCancel(durationMs: number, token: CancelToken) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!token.isCancel) {
                resolve(null);
            } else {
                token.onCancel();
            }
        }, durationMs);
    });
}