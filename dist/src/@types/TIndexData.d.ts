import { TDynamicObject } from "./TInternal";
export declare type TIndexes = {
    indexes: string[];
    execution: string;
    fetch: string;
};
export declare type TIndexSearch = {
    index: string;
    query: string;
    filter: TDynamicObject;
    offset: number;
    limit: number;
};
export declare type TIndexData = {
    index: string;
    uid: string;
    data: TDynamicObject;
};
export declare type TIndexDataBatch = {
    index: string;
    uid: string;
    data: TDynamicObject[];
};
export declare type TIndexConfig = {
    index: string;
    searchable: string[];
};
