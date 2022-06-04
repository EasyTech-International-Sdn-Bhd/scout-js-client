import {TDynamicObject} from "./TInternal";

export type TIndexes = {
    indexes: string[],
    execution: string,
    fetch: string
}

export type TIndexSearch = {
    index: string,
    query: string,
    filter: TDynamicObject,
    offset: number,
    limit: number
}

export type TIndexData = {
    index: string,
    uid: string,
    data: TDynamicObject
}

export type TIndexDataBatch = {
    index: string,
    uid: string,
    data: TDynamicObject[]
}

export type TIndexConfig = {
    index: string,
    searchable: string[]
}
