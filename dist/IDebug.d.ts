export declare type arbitary = any[];
export interface IDebug {
    error(...param: arbitary): void;
    info(...param: arbitary): void;
    done(...param: arbitary): void;
    tag: string;
}
