export class FetchElapsed {
    private start: number;
    private end: number;
    constructor() {
        this.start = new Date().getTime();
    }
    public elapsed(): string {
        this.end = new Date().getTime();
        const diff = this.end - this.start;
        return `${diff.toFixed(2)}ms`;
    }
}
export default function performance(): FetchElapsed {
    return new FetchElapsed();
}
