import { TError } from "./TError";
import { TDynamicObject } from "./TInternal";
export declare type TIndexSearchData = {
    data: TDynamicObject;
    score: number;
};
export declare type TResponse = {
    err: TError | null;
    status: boolean;
};
export declare type TIndexDataBatchResponse = {
    index: string;
    count: number;
    execution: string;
    fetch: string;
};
export declare type TIndexDataResponse = {
    index: string;
    uid: string;
    status: boolean;
    execution: string;
    fetch: string;
};
export declare type TIndexConfigResponse = {
    index: string;
    status: boolean;
    execution: string;
    fetch: string;
};
export declare type TIndexDataCountResponse = {
    index: string;
    count: number;
    execution: string;
    fetch: string;
};
export declare type TIndexSearchResponse = {
    index: string;
    hits: number;
    nb_hits: number;
    data: TIndexSearchData[];
    execution: string;
};
